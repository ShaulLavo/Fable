import type ts from 'typescript'

// OPFS SyncAccessHandle types are available in workers
declare global {
  interface FileSystemFileHandle {
    createSyncAccessHandle(): Promise<FileSystemSyncAccessHandle>
  }
  interface FileSystemSyncAccessHandle {
    read(dataView: DataView, options?: { at?: number }): void
    write(data: BufferSource, options?: { at?: number }): void
    truncate(size: number): void
    flush(): void
    getSize(): number
    close(): void
  }
}

type DirNode = {
  dirs: Set<string>
  files: Set<string>
}

const encoder = new TextEncoder()
const decoder = new TextDecoder()

function normPath(p: string): string {
  if (!p) return '/'
  // normalize separators and ensure absolute
  p = p.replace(/\\/g, '/').trim()
  const parts = p.split('/').filter(Boolean)
  const norm = '/' + parts.join('/')
  return norm === '' ? '/' : norm
}

function dirname(p: string): string {
  p = normPath(p)
  const i = p.lastIndexOf('/')
  return i <= 0 ? '/' : p.slice(0, i)
}

function basename(p: string): string {
  p = normPath(p)
  const i = p.lastIndexOf('/')
  return i === -1 ? p : p.slice(i + 1)
}

async function getRootDirHandle(): Promise<FileSystemDirectoryHandle> {
  return await navigator.storage.getDirectory()
}

async function* walk(
  dir: FileSystemDirectoryHandle,
  currentPath: string
): AsyncGenerator<{ path: string; handle: FileSystemHandle }, void, unknown> {
  for await (const entry of (dir as any).values() as AsyncIterable<FileSystemHandle>) {
    const childPath = currentPath === '/' ? `/${entry.name}` : `${currentPath}/${entry.name}`
    if (entry.kind === 'directory') {
      yield { path: childPath, handle: entry }
      yield* walk(entry as FileSystemDirectoryHandle, childPath)
    } else {
      yield { path: childPath, handle: entry }
    }
  }
}

async function ensureDir(path: string): Promise<FileSystemDirectoryHandle> {
  const root = await getRootDirHandle()
  const parts = normPath(path).split('/').filter(Boolean)
  let dir = root
  for (const part of parts) {
    dir = await dir.getDirectoryHandle(part, { create: true })
  }
  return dir
}

async function getFileHandle(path: string, create = false): Promise<FileSystemFileHandle> {
  const parent = dirname(path)
  const name = basename(path)
  const dir = create ? await ensureDir(parent) : await getDir(parent)
  return await dir.getFileHandle(name, { create })
}

async function getDir(path: string): Promise<FileSystemDirectoryHandle> {
  const root = await getRootDirHandle()
  const parts = normPath(path).split('/').filter(Boolean)
  let dir = root
  for (const part of parts) {
    dir = await dir.getDirectoryHandle(part, { create: false })
  }
  return dir
}

export async function createOPFSSystem(
  overlayFiles: Map<string, string>
): Promise<ts.System> {
  // Build index and open sync handles for all existing files
  const dirIndex = new Map<string, DirNode>()
  const handleMap = new Map<string, FileSystemSyncAccessHandle>()
  const existsFiles = new Set<string>()
  const memWrites = new Map<string, string>() // for new files until handle exists

  function ensureDirIndex(dirPath: string) {
    dirPath = normPath(dirPath)
    if (!dirIndex.has(dirPath)) {
      dirIndex.set(dirPath, { dirs: new Set(), files: new Set() })
    }
  }

  function addFileToIndex(filePath: string) {
    filePath = normPath(filePath)
    existsFiles.add(filePath)
    const parent = dirname(filePath)
    ensureDirIndex(parent)
    dirIndex.get(parent)!.files.add(filePath)
  }

  function addDirToIndex(dirPath: string) {
    dirPath = normPath(dirPath)
    ensureDirIndex(dirPath)
    const parent = dirname(dirPath)
    if (parent !== dirPath) {
      ensureDirIndex(parent)
      dirIndex.get(parent)!.dirs.add(dirPath)
    }
  }

  async function buildIndex() {
    addDirToIndex('/')
    const root = await getRootDirHandle()
    for await (const { path, handle } of walk(root, '/')) {
      if (handle.kind === 'directory') {
        addDirToIndex(path)
      } else {
        addFileToIndex(path)
        try {
          const fh = await (handle as FileSystemFileHandle).createSyncAccessHandle()
          handleMap.set(path, fh)
        } catch (e) {
          // If we cannot open a sync handle, we'll fallback to mem Writes later
          // but keep it indexed for existence checks
        }
      }
    }
  }

  await buildIndex()

  function readFromHandle(path: string): string | undefined {
    const h = handleMap.get(path)
    if (!h) return memWrites.get(path)
    const size = h.getSize()
    if (size === 0) return ''
    const buf = new ArrayBuffer(size)
    const dv = new DataView(buf)
    h.read(dv, { at: 0 })
    return decoder.decode(new Uint8Array(buf))
  }

  function writeToHandle(path: string, data: string) {
    const h = handleMap.get(path)
    if (!h) {
      // File might be new or handle not pre-opened; store in mem and try to create asynchronously
      memWrites.set(path, data)
      ;(async () => {
        try {
          const fileHandle = await getFileHandle(path, true)
          const sync = await fileHandle.createSyncAccessHandle()
          handleMap.set(path, sync)
          const bytes = encoder.encode(data)
          sync.truncate(0)
          sync.write(bytes, { at: 0 })
          sync.flush()
          addFileToIndex(path)
          memWrites.delete(path)
        } catch (e) {
          // swallow errors; stays in memWrites
        }
      })()
      return
    }
    const bytes = encoder.encode(data)
    h.truncate(0)
    h.write(bytes, { at: 0 })
    h.flush()
  }

  function listFilesUnder(directory: string, recursive = true): string[] {
    directory = normPath(directory)
    const out: string[] = []
    for (const f of existsFiles) {
      if (f.startsWith(directory === '/' ? '/' : directory + '/')) {
        out.push(f)
      }
    }
    return out
  }

  const system: ts.System = {
    args: [],
    newLine: '\n',
    useCaseSensitiveFileNames: true,
    write: s => console.log(s),
    exit: () => {},
    getCurrentDirectory: () => '/',
    resolvePath: p => normPath(p),
    realpath: p => normPath(p),
    fileExists: p => {
      p = normPath(p)
      return overlayFiles.has(p) || existsFiles.has(p) || memWrites.has(p)
    },
    directoryExists: p => {
      p = normPath(p)
      return dirIndex.has(p)
    },
    createDirectory: p => {
      p = normPath(p)
      addDirToIndex(p)
      // async ensure in background
      ;(async () => {
        try {
          await ensureDir(p)
        } catch {}
      })()
    },
    readFile: (p, _encoding) => {
      p = normPath(p)
      if (overlayFiles.has(p)) return overlayFiles.get(p)
      return readFromHandle(p)
    },
    getFileSize: p => {
      p = normPath(p)
      if (overlayFiles.has(p)) return overlayFiles.get(p)!.length
      const h = handleMap.get(p)
      if (h) return h.getSize()
      const mem = memWrites.get(p)
      return mem ? mem.length : 0
    },
    writeFile: (p, data, _bom) => {
      p = normPath(p)
      // do not persist TS lib overlay writes
      if (p.startsWith('/lib.') && overlayFiles.has(p)) {
        overlayFiles.set(p, data)
        return
      }
      writeToHandle(p, data)
    },
    deleteFile: p => {
      p = normPath(p)
      overlayFiles.delete(p)
      memWrites.delete(p)
      existsFiles.delete(p)
      const parent = dirname(p)
      const d = dirIndex.get(parent)
      if (d) d.files.delete(p)
      const h = handleMap.get(p)
      if (h) {
        try {
          h.truncate(0)
          h.flush()
          h.close()
        } catch {}
        handleMap.delete(p)
      }
      ;(async () => {
        try {
          const parentDir = await getDir(parent)
          await (parentDir as any).removeEntry(basename(p))
        } catch {}
      })()
    },
    getExecutingFilePath: () => '/worker',
    getDirectories: p => {
      p = normPath(p)
      const dn = dirIndex.get(p)
      if (!dn) return []
      return Array.from(dn.dirs).map(d => basename(d))
    },
    readDirectory: (directory, extensions, _exclude, _include, _depth) => {
      directory = normPath(directory)
      const all = new Set<string>()
      // overlay files first
      for (const k of overlayFiles.keys()) {
        if (k.startsWith(directory === '/' ? '/' : directory + '/')) all.add(k)
      }
      // opfs indexed files
      for (const f of listFilesUnder(directory)) all.add(f)
      let res = Array.from(all)
      if (extensions && extensions.length) {
        res = res.filter(p => extensions!.some(ext => p.endsWith(ext)))
      }
      return res
    }
  }

  // Clean up on unload
  self.addEventListener('unload', () => {
    for (const h of handleMap.values()) {
      try {
        h.close()
      } catch {}
    }
  })

  return system
}
