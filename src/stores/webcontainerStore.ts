import { createSignal } from 'solid-js'
import { WebContainer } from '@webcontainer/api'
import { OPFSSync } from '../service/OPFS.service'

// Public signals to share across mounts
const [serverUrl, setServerUrl] = createSignal('')
const [code, setCode] = createSignal('')

// Internal module-scoped state (singleton by module)
let bootPromise: Promise<WebContainer> | null = null
let instance: WebContainer | null = null
let mounted = false
let depsInstalled = false
let serverStarted = false
let serverProcess: any | null = null
let serverReadyListenerAdded = false
let shell: any | null = null
let shellWriter: WritableStreamDefaultWriter<string> | null = null
let shellReaderActive = false
let outputSink: (s: string) => void = () => {}
const outputWatchers: Array<{
	marker: string
	resolve: () => void
	reject: (e: unknown) => void
	timeoutId?: ReturnType<typeof setTimeout>
}> = []

export function getServerUrl() {
	return serverUrl
}
export function setServerUrlValue(url: string) {
	setServerUrl(url)
}
export function getCode() {
	return code
}
export function setCodeValue(v: string) {
	setCode(v)
}

export async function getWebContainer(): Promise<WebContainer> {
	if (instance) return instance
	if (!bootPromise) {
		bootPromise = WebContainer.boot().then(wc => {
			instance = wc
			return wc
		})
	}
	return bootPromise
}

export type FileTreeMount = Record<string, { file: { contents: string } }>

export async function ensureMounted(wc: WebContainer, files: FileTreeMount) {
	if (mounted) return
	await wc.mount(files ?? {})
	mounted = true
}

export async function ensureDepsInstalled() {
	if (depsInstalled) return
	await runInShell('npm install', { awaitExit: true })
	depsInstalled = true
	try {
		const wc = getInstanceUnsafe()
		if (wc) await syncNodeModulesToOPFS(wc)
		outputSink(`\r\n[sync] node_modules mirrored to OPFS`)
	} catch (e) {
		outputSink(`\r\n[sync] mirror failed: ${(e as Error)?.message ?? e}`)
	}
}

export async function ensureServer(wc: WebContainer) {
	if (!serverReadyListenerAdded) {
		wc.on('server-ready', (_port: number, url: string) => {
			setServerUrl(url)
		})
		serverReadyListenerAdded = true
	}

	if (serverStarted) return
	if (!depsInstalled) {
		// Install first (await), mirror node_modules, then start the dev server
		await runInShell('npm install', { awaitExit: true })
		depsInstalled = true
		try {
			await syncNodeModulesToOPFS(wc)
			outputSink(`\r\n[sync] node_modules mirrored to OPFS`)
		} catch (e) {
			outputSink(`\r\n[sync] mirror failed: ${(e as Error)?.message ?? e}`)
		}
		await runInShell('npm run start', { awaitExit: false })
		serverStarted = true
		return
	}
	await runInShell('npm run start', { awaitExit: false })
	serverStarted = true
}

export function getInstanceUnsafe() {
	return instance
}
export function getServerProcessUnsafe() {
	return serverProcess
}
export function writeToShell(data: string) {
	shellWriter?.write(data)
}
export function attachTerminalWrite(fn: (s: string) => void) {
	outputSink = fn
}

// Type text into the interactive shell with optional delay.
// This simulates human typing and can optionally press Enter at the end.
export async function typeInShell(
	text: string,
	options?: { delayMs?: number; pressEnter?: boolean; signal?: AbortSignal }
) {
	if (!shellWriter)
		throw new Error('Shell is not initialized. Call ensureShell() first.')
	const delayMs = options?.delayMs ?? 20
	const pressEnter = options?.pressEnter ?? true

	const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms))

	for (const ch of text) {
		if (options?.signal?.aborted) throw new Error('typeInShell aborted')
		// Write each character and wait a bit to simulate typing
		await shellWriter.write(ch)
		if (delayMs > 0) await sleep(delayMs)
	}
	if (pressEnter) {
		await shellWriter.write('\r')
	}
}

// Convenience: type a full command and run it
export async function runInShell(
	command: string,
	options?: {
		delayMs?: number
		signal?: AbortSignal
		awaitExit?: boolean
		timeoutMs?: number
	}
) {
	if (options?.awaitExit) {
		const token = `__RUN_DONE__${Date.now()}_${Math.random()
			.toString(36)
			.slice(2, 8)}__`
		const done = waitForShellMarker(token, {
			timeoutMs: options?.timeoutMs ?? 10 * 60_000,
			signal: options?.signal
		})
		// await typeInShell(`${command}; echo ${token}`, {
		// 	delayMs: options?.delayMs,
		// 	pressEnter: true,
		// 	signal: options?.signal
		// })
		await done
		return
	}
	return typeInShell(command, {
		delayMs: options?.delayMs,
		pressEnter: true,
		signal: options?.signal
	})
}

function waitForShellMarker(
	marker: string,
	opts?: { timeoutMs?: number; signal?: AbortSignal }
) {
	return new Promise<void>((resolve, reject) => {
		const watcher = {
			marker,
			resolve: () => {
				if (watcher.timeoutId) clearTimeout(watcher.timeoutId)
				const idx = outputWatchers.indexOf(watcher as any)
				if (idx >= 0) outputWatchers.splice(idx, 1)
				resolve()
			},
			reject: (e: unknown) => {
				if (watcher.timeoutId) clearTimeout(watcher.timeoutId)
				const idx = outputWatchers.indexOf(watcher as any)
				if (idx >= 0) outputWatchers.splice(idx, 1)
				reject(e)
			},
			timeoutId: undefined as undefined | ReturnType<typeof setTimeout>
		}
		if (opts?.timeoutMs && opts.timeoutMs > 0) {
			watcher.timeoutId = setTimeout(
				() =>
					watcher.reject(
						new Error(`Timed out waiting for shell marker: ${marker}`)
					),
				opts.timeoutMs
			)
		}
		if (opts?.signal) {
			const onAbort = () =>
				watcher.reject(new Error('Aborted waiting for shell marker'))
			if (opts.signal.aborted) return onAbort()
			opts.signal.addEventListener('abort', onAbort, { once: true })
		}
		outputWatchers.push(watcher as any)
	})
}

export async function ensureShell(wc: WebContainer, cols = 80, rows = 24) {
	if (shell) return
	shell = await wc.spawn('jsh', { terminal: { cols, rows } })
	shellWriter = shell.input.getWriter()
	if (!shellReaderActive) {
		shellReaderActive = true
		const reader = shell.output.getReader()
		;(async () => {
			try {
				while (true) {
					const { value, done } = await reader.read()
					if (done) break
					if (value) {
						outputSink(value)
						for (const w of [...outputWatchers]) {
							if (value.includes(w.marker)) {
								w.resolve()
							}
						}
					}
				}
			} catch {
				// ignore reader errors on teardown
			} finally {
				shellReaderActive = false
			}
		})()
	}
}

// --- WC → OPFS sync for node_modules ---
async function syncNodeModulesToOPFS(wc: WebContainer) {
	await copyDirRecursive(wc, '/node_modules')
}

async function copyDirRecursive(wc: WebContainer, dirPath: string) {
	// Ensure destination dir exists
	await OPFSSync.ensureDirRecursive(dirPath)
	const entries = await wc.fs.readdir(dirPath, { withFileTypes: true } as any)
	for (const entry of entries as any[]) {
		const childPath =
			dirPath === '/' ? `/${entry.name}` : `${dirPath}/${entry.name}`
		if (
			typeof entry.isDirectory === 'function'
				? entry.isDirectory()
				: entry.kind === 'directory'
		) {
			await copyDirRecursive(wc, childPath)
		} else {
			const data = await wc.fs.readFile(childPath)
			await OPFSSync.writeBytes(childPath, data as Uint8Array)
		}
	}
}
