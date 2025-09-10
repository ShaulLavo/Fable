import { createEffect, onCleanup, onMount } from 'solid-js'
import { FitAddon } from '@xterm/addon-fit'
import { Terminal as XTerm } from '@xterm/xterm'
import '@xterm/xterm/css/xterm.css'
import {
  list as opfsList,
  statPath as opfsStatPath,
  readText as opfsReadText
} from '../../service/OPFS.service'
import { xTermTheme, currentColor } from '../../stores/themeStore'
import { fontFamilyWithFallback } from '../../stores/fontStore'
import { hexToRgb } from '../../utils/color'
// Node stdlib-browser shims (available via Vite aliasing)
import vm from 'vm'
import fs from 'fs'
import path from 'path'
import os from 'os'
import util from 'util'
import url from 'url'
import assert from 'assert'
import buffer from 'buffer'
import stream from 'stream'
import tty from 'tty'
import zlib from 'zlib'
import crypto from 'crypto'
import events from 'events'
import timers from 'timers'
import timersPromises from 'timers/promises'

type Props = { class?: string }

function normalizePath(path: string): string {
  if (!path) return '/'
  const isAbs = path.startsWith('/')
  const parts = path.split('/').filter(Boolean)
  const stack: string[] = []
  for (const p of parts) {
    if (p === '.' || p === '') continue
    if (p === '..') {
      if (stack.length) stack.pop()
      continue
    }
    stack.push(p)
  }
  const joined = '/' + stack.join('/')
  return isAbs ? joined : joined || '/'
}

function resolvePath(cwd: string, target?: string): string {
  if (!target || target.trim() === '') return cwd
  if (target.startsWith('/')) return normalizePath(target)
  const base = cwd.endsWith('/') ? cwd : cwd + '/'
  return normalizePath(base + target)
}

export function Terminal(props: Props) {
  let container!: HTMLDivElement
  let term: XTerm
  let fit: FitAddon
  let cwd = '/'
  let lineBuffer = ''
  const history: string[] = []
  let histIdx = -1
  let nodeMode = false
  let nodeCtx: vm.Context | null = null
  const moduleCache: Record<string, { code?: string; exports?: any; evaluated?: boolean; type: 'js' | 'json' }> = {}

  async function getTS() {
    // Lazy-load TypeScript only when needed
    // @ts-ignore
    const ts = await import('typescript')
    return ts
  }

  // ANSI helpers
  const ANSI = {
    reset: '\x1b[0m',
    dim: '\x1b[2m'
  }

  function fgFromHex(hex: string | undefined): string {
    if (!hex) return '\x1b[96m'
    const rgb = hexToRgb(hex)
    if (!rgb) return '\x1b[96m'
    return `\x1b[38;2;${rgb.r};${rgb.g};${rgb.b}m`
  }

  function prompt() {
    const promptColor = fgFromHex(currentColor())
    const pfx = nodeMode ? 'node' : cwd
    term.write(`\r\n${promptColor}${pfx}${ANSI.reset} ${ANSI.dim}>${ANSI.reset} `)
  }

  function write(text: string) {
    term.write(text.replace(/\n/g, '\r\n'))
  }

  function writeln(text = '') {
    term.writeln(text)
  }

  async function cmdLs(args: string[]) {
    const target = args[0]
    const path = target ? resolvePath(cwd, target) : cwd
    try {
      const stat = await opfsStatPath(path)
      if (!stat) return writeln(`ls: cannot access ${path}: No such file or directory`)
      if (stat.isFile) {
        const name = path.split('/').filter(Boolean).pop() || '/'
        writeln(name)
        return
      }
      const entries = await opfsList(path)
      const out = entries
        .map(e => (e.kind === 'dir' ? e.name + '/' : e.name))
        .join('  ')
      writeln(out)
    } catch (e: any) {
      writeln(`ls: ${e?.message ?? String(e)}`)
    }
  }

  async function cmdCd(args: string[]) {
    const target = args[0] ?? '/'
    const next = resolvePath(cwd, target)
    const stat = await opfsStatPath(next)
    if (!stat) return writeln(`cd: no such file or directory: ${target}`)
    if (stat.isFile) return writeln(`cd: not a directory: ${target}`)
    cwd = next
  }

  // --- Minimal Node runner using node-stdlib-browser shims ---
  const moduleMap: Record<string, any> = {
    fs,
    path,
    os,
    util,
    url,
    assert,
    buffer,
    stream,
    tty,
    zlib,
    crypto,
    events,
    timers,
    'timers/promises': timersPromises
  }

  function makeRequire(baseDir: string) {
    return (spec: string) => {
      const clean = spec.replace(/^node:/, '')
      if (moduleMap[clean]) return moduleMap[clean]
      // During direct eval, we don't support loading OPFS modules synchronously.
      // For script execution (node <file>), a preloader provides a sync require.
      if (spec.startsWith('.') || spec.startsWith('/') ) {
        throw new Error(`Synchronous require not available in REPL. Use 'node <file>' to run modules.`)
      }
      throw new Error(`Cannot require '${spec}' (only core modules supported here)`) 
    }
  }

  function makeConsole() {
    const writeLn = (prefix: string, args: any[]) => {
      try {
        const text = args
          .map(a =>
            typeof a === 'string' ? a : util.inspect(a, { colors: false })
          )
          .join(' ')
        writeln(`${prefix}${text}`)
      } catch (e) {
        writeln(prefix + String(e))
      }
    }
    return {
      log: (...args: any[]) => writeLn('', args),
      info: (...args: any[]) => writeLn('', args),
      warn: (...args: any[]) => writeLn('', args),
      error: (...args: any[]) => writeLn('', args),
      dir: (...args: any[]) => writeLn('', args)
    }
  }

  function createNodeContext(baseDir: string, filename = '<repl>') {
    const sandbox: Record<string, any> = Object.create(null)
    const req = makeRequire(baseDir)
    const mod = { exports: {} as any }
    Object.assign(sandbox, {
      // Globals we provide to the iframe; avoid read-only like Infinity/NaN/undefined
      global: undefined as any,
      GLOBAL: undefined as any,
      root: undefined as any,
      console: makeConsole(),
      require: req,
      module: mod,
      exports: mod.exports,
      __dirname: baseDir,
      __filename: filename,
      process: { ...globalThis.process, cwd: () => baseDir },
      Buffer: globalThis.Buffer,
      setTimeout,
      clearTimeout,
      setInterval,
      clearInterval
    })
    // Make global references self-contained
    sandbox.global = sandbox
    sandbox.GLOBAL = sandbox
    sandbox.root = sandbox
    return vm.createContext(sandbox)
  }

  function runNodeScript(code: string, filename: string, baseDir: string) {
    try {
      const c = createNodeContext(baseDir, filename)
      // Avoid vm-browserify assigning read-only Window globals
      try {
        // @ts-ignore
        delete (c as any).Infinity
        // @ts-ignore
        delete (c as any).NaN
        // @ts-ignore
        delete (c as any).undefined
      } catch {}
      const wrapper = `((exports, require, module, __filename, __dirname) => {\n${code}\n})`
      const fn = vm.runInContext(wrapper, c, { filename }) as unknown as (
        e: any,
        r: any,
        m: any,
        f: string,
        d: string
      ) => void
      const req = (c as any).require ?? makeRequire(baseDir)
      const mod = (c as any).module ?? { exports: {} }
      fn(mod.exports, req, mod, filename, baseDir)
    } catch (e: any) {
      writeln(String(e?.message || e))
    }
  }

  function runNodeEval(line: string) {
    if (!line.trim()) return
    try {
      if (!nodeCtx) nodeCtx = createNodeContext(cwd, '<repl>')
      // Avoid vm-browserify assigning read-only Window globals between evals
      try {
        // @ts-ignore
        delete (nodeCtx as any).Infinity
        // @ts-ignore
        delete (nodeCtx as any).NaN
        // @ts-ignore
        delete (nodeCtx as any).undefined
      } catch {}
      const code = transformReplInput(line)
      const result = vm.runInContext(code, nodeCtx, { filename: '<repl>' })
      if (typeof result !== 'undefined') {
        try {
          writeln(util.inspect(result, { colors: false }))
        } catch {
          writeln(String(result))
        }
      }
    } catch (e: any) {
      writeln(String(e?.message || e))
    }
  }

  function transformReplInput(src: string): string {
    const s = src.trim()
    // function decl → globalThis.name = function name (...) {...}
    const fn = s.match(/^function\s+([A-Za-z_$][\w$]*)\s*\(/)
    if (fn) return s.replace(/^function\s+([A-Za-z_$][\w$]*)\s*\(/, `globalThis.${fn[1]} = function ${fn[1]}(`)
    // class decl → globalThis.Name = class Name {...}
    const cls = s.match(/^class\s+([A-Za-z_$][\w$]*)\b/)
    if (cls) return s.replace(/^class\s+([A-Za-z_$][\w$]*)\b/, `globalThis.${cls[1]} = class ${cls[1]}`)
    // var/let/const simple identifiers (no destructuring)
    if (/^(const|let|var)\s+/.test(s)) {
      const rest = s.replace(/^(const|let|var)\s+/, '')
      if (/[\[{]/.test(rest)) return s // skip destructuring to avoid wrong transforms
      const parts = rest.split(',')
      const assigns = parts
        .map(p => {
          const m = p.trim().match(/^([A-Za-z_$][\w$]*)\s*(?:=\s*(.+))?$/)
          if (!m) return null
          const name = m[1]
          const rhs = m[2] ?? 'undefined'
          return `globalThis.${name} = ${rhs}`
        })
        .filter(Boolean)
      if (assigns.length) return assigns.join('; ')
      return s
    }
    return s
  }

  async function runCommand(raw: string) {
    const trimmed = raw.trim()
    if (!trimmed) return
    const [cmd, ...args] = trimmed.split(/\s+/)
    switch (cmd) {
      case 'ls':
        await cmdLs(args)
        break
      case 'cd':
        await cmdCd(args)
        break
      case 'pwd':
        writeln(cwd)
        break
      case 'node': {
        // Usage:
        //  node            → enter REPL
        //  node -e "code"  → eval code
        //  node <file>     → run OPFS file
        if (args[0] === '-e') {
          const code = args.slice(1).join(' ')
          const unquoted = code.replace(/^['\"]|['\"]$/g, '')
          runNodeScript(unquoted, '<eval>', cwd)
        } else if (args[0]) {
          const scriptPath = resolvePath(cwd, args[0])
          const stat = await opfsStatPath(scriptPath)
          if (!stat) {
            writeln(`node: cannot open file ${args[0]}: No such file`)
            break
          }
          if (stat.isFile) {
            await runNodeProgram(scriptPath)
          } else {
            // Directory: try to resolve like Node (package.json main/module or index)
            const entry = await resolveEntryFromDir(scriptPath)
            if (!entry) {
              writeln(`node: ${args[0]}: No entry file found`)
              break
            }
            await runNodeProgram(entry)
          }
        } else {
          nodeMode = true
          nodeCtx = createNodeContext(cwd, '<repl>')
          writeln('Entering Node REPL. Type .exit to leave.')
        }
        break
      }
      case 'help':
        writeln('Supported: ls, cd, pwd, help, clear, node')
        break
      case 'clear':
        term.reset()
        break
      default:
        writeln(`${cmd}: command not found`)
    }
  }

  // ------- Minimal module runner for 'node <file>' -------

  async function resolveEntryFromDir(dir: string): Promise<string | null> {
    // Try package.json's module/main, else index.ts/js/json
    try {
      const pkgPath = dir.replace(/\/$/, '') + '/package.json'
      const s = await opfsStatPath(pkgPath)
      if (s && s.isFile) {
        const txt = await opfsReadText(pkgPath)
        const pkg = JSON.parse(txt)
        const cand = pkg.module || pkg.main
        if (typeof cand === 'string') {
          const p = normalizePath(path.join(dir, cand))
          const r = await resolveAsFileOrDir(p)
          if (r) return r
        }
      }
    } catch {}
    return (await resolveAsFileOrDir(path.join(dir, 'index'))) || null
  }

  async function resolveAsFileOrDir(p: string): Promise<string | undefined> {
    // Try exact
    const s1 = await opfsStatPath(p)
    if (s1?.isFile) return p
    if (s1 && !s1.isFile) return await resolveEntryFromDir(p)
    // Try extensions
    for (const ext of ['.ts', '.js', '.json']) {
      const s = await opfsStatPath(p + ext)
      if (s?.isFile) return p + ext
    }
    return undefined
  }

  function isRelative(spec: string) {
    return spec.startsWith('./') || spec.startsWith('../') || spec.startsWith('/')
  }

  async function buildGraph(entry: string) {
    const visited = new Set<string>()
    const pending: string[] = [entry]
    while (pending.length) {
      const file = pending.pop()!
      if (visited.has(file)) continue
      visited.add(file)
      const st = await opfsStatPath(file)
      if (!st || !st.isFile) continue
      if (file.endsWith('.json')) {
        const txt = await opfsReadText(file)
        moduleCache[file] = { type: 'json', exports: JSON.parse(txt), evaluated: true }
        continue
      }
      const src = await opfsReadText(file)
      const ts = await getTS()
      const out = ts.transpileModule(src, {
        compilerOptions: {
          target: ts.ScriptTarget.ES2020,
          module: ts.ModuleKind.CommonJS,
          esModuleInterop: true,
          allowJs: true
        },
        fileName: file
      })
      moduleCache[file] = { type: 'js', code: out.outputText, evaluated: false }
      // Scan for dependencies (require and import specifiers)
      const deps = new Set<string>()
      const reqRe = /require\s*\(\s*['\"]([^'\"]+)['\"]\s*\)/g
      const impRe = /import\s+(?:[^'\"]+from\s+)?['\"]([^'\"]+)['\"]/g
      let m: RegExpExecArray | null
      while ((m = reqRe.exec(src))) deps.add(m[1])
      while ((m = impRe.exec(src))) deps.add(m[1])
      const base = path.dirname(file)
      for (const d of deps) {
        if (!isRelative(d)) continue
        const abs = await resolveAsFileOrDir(normalizePath(path.join(base, d)))
        if (abs) pending.push(abs)
      }
    }
  }

  function createGraphRequire(forFile: string) {
    return (spec: string) => {
      const clean = spec.replace(/^node:/, '')
      if (moduleMap[clean]) return moduleMap[clean]
      if (!isRelative(spec)) {
        throw new Error(`Cannot require '${spec}' (only core modules and relative files are supported)`) 
      }
      const base = path.dirname(forFile)
      const resolved = resolveInGraph(normalizePath(path.join(base, spec)))
      if (!resolved) throw new Error(`Module not found: ${spec}`)
      return executeModule(resolved)
    }
  }

  function resolveInGraph(p: string): string | null {
    if (moduleCache[p]) return p
    for (const ext of ['.ts', '.js', '.json']) {
      if (moduleCache[p + ext]) return p + ext
    }
    // Directory index
    for (const idx of ['/index.ts', '/index.js', '/index.json']) {
      if (moduleCache[p + idx]) return p + idx
    }
    return null
  }

  function executeModule(file: string) {
    const entry = moduleCache[file]
    if (!entry) throw new Error(`Module not preloaded: ${file}`)
    if (entry.evaluated) return entry.exports
    if (entry.type === 'json') {
      entry.evaluated = true
      return entry.exports
    }
    const code = entry.code || ''
    const fn = new Function('exports', 'require', 'module', '__filename', '__dirname', code)
    const mod = { exports: {} as any }
    const req = createGraphRequire(file)
    fn(mod.exports, req, mod, file, path.dirname(file))
    entry.exports = mod.exports
    entry.evaluated = true
    return entry.exports
  }

  async function runNodeProgram(entryPath: string) {
    // Build dependency graph and execute entry
    for (const k of Object.keys(moduleCache)) delete moduleCache[k]
    const resolved = await resolveAsFileOrDir(entryPath)
    if (!resolved) throw new Error(`Entry not found: ${entryPath}`)
    await buildGraph(resolved)
    try {
      executeModule(resolved)
    } catch (e: any) {
      writeln(String(e?.message || e))
    }
  }

  function redrawInput() {
    // Clear entire line and redraw colored prompt + buffer
    const promptColor = fgFromHex(currentColor())
    const pfx = nodeMode ? 'node' : cwd
    term.write(`\x1b[2K\r${promptColor}${pfx}${ANSI.reset} ${ANSI.dim}>${ANSI.reset} ${lineBuffer}`)
  }

  // Special commands recognized inside Node REPL
  const nodeSpecials: Array<{ match: (s: string) => boolean; run: () => void }> = [
    {
      match: s => /^clear\s*(\(\s*\))?\s*$/i.test(s),
      run: () => {
        term.reset()
      }
    },
    {
      match: s => /^\.clear\s*$/.test(s),
      run: () => {
        term.reset()
      }
    }
  ]

  function handleData(data: string) {
    // Enter
    if (data === '\r' || data === '\n') {
      const current = lineBuffer
      history.push(current)
      histIdx = -1
      lineBuffer = ''
      writeln('')
      if (nodeMode) {
        if (current.trim() === '.exit') {
          nodeMode = false
          nodeCtx = null
          writeln('Leaving Node REPL.')
          prompt()
        } else {
          const special = nodeSpecials.find(s => s.match(current))
          if (special) {
            special.run()
            prompt()
          } else {
            runNodeEval(current)
            prompt()
          }
        }
      } else {
        runCommand(current).finally(() => prompt())
      }
      return
    }
    // Backspace
    if (data === '\x7F') {
      if (lineBuffer.length > 0) {
        lineBuffer = lineBuffer.slice(0, -1)
        // Erase one char visually
        term.write('\b \b')
      }
      return
    }
    // Arrow keys (basic history)
    if (data === '\x1b[A') { // Up
      if (!history.length) return
      if (histIdx < 0) histIdx = history.length - 1
      else histIdx = Math.max(0, histIdx - 1)
      // Clear and redraw
      lineBuffer = history[histIdx] ?? ''
      redrawInput()
      return
    }
    if (data === '\x1b[B') { // Down
      if (!history.length) return
      if (histIdx < 0) return
      histIdx = Math.min(history.length - 1, histIdx + 1)
      lineBuffer = history[histIdx] ?? ''
      redrawInput()
      return
    }
    // Printable characters (filter control sequences)
    if (data >= ' ' && !data.startsWith('\x1b')) {
      lineBuffer += data
      write(data)
      return
    }
  }

  onMount(() => {
    term = new XTerm({
      fontFamily: fontFamilyWithFallback(),
      cursorBlink: true,
      allowProposedApi: true,
      scrollback: 5000,
      theme: xTermTheme()
    })
    fit = new FitAddon()
    term.loadAddon(fit)
    term.open(container)
    queueMicrotask(() => fit.fit())
    const ro = new ResizeObserver(() => fit.fit())
    ro.observe(container)

    const disp = term.onData(handleData)
    writeln('OPFS Terminal — type "help" to start')
    prompt()

    onCleanup(() => {
      disp.dispose()
      ro.disconnect()
      term.dispose()
    })
  })

  // React to theme and font changes
  createEffect(() => {
    try {
      term && (term.options.theme = xTermTheme())
    } catch {}
  })
  createEffect(() => {
    try {
      term && (term.options.fontFamily = fontFamilyWithFallback())
    } catch {}
  })

  return (
    <div
      ref={container}
      class={`w-full h-full min-h-[120px] rounded-md border border-neutral-700 overflow-hidden ${
        props.class ?? ''
      }`}
    />
  )
}
