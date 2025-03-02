interface ResolveOptions {
	type?: 'file' | 'directory' | null
	create?: boolean
}

async function resolvePath(
	path: string,
	options: ResolveOptions = {}
): Promise<FileSystemFileHandle | FileSystemDirectoryHandle> {
	const { type = 'file', create = false } = options
	const parts = path.split('/').filter(part => part !== '')
	let current: FileSystemDirectoryHandle =
		await navigator.storage.getDirectory()
	for (let i = 0; i < parts.length; i++) {
		const part = parts[i]
		const isLast = i === parts.length - 1
		if (isLast) {
			if (type === 'file') {
				return await current.getFileHandle(part, { create })
			} else if (type === 'directory') {
				return await current.getDirectoryHandle(part, { create })
			}
		} else {
			current = await current.getDirectoryHandle(part, { create: true })
		}
	}
	return current
}
type CreateReadStreamOptions = {
	start?: number
	end?: number
	highWaterMark?: number
}
class FileHandle {
	handle: FileSystemFileHandle
	flags: string
	position: number
	constructor(handle: FileSystemFileHandle, flags: string = 'r') {
		this.handle = handle
		this.flags = flags
		this.position = 0
	}
	async read(
		buffer: Uint8Array,
		offset: number,
		length: number,
		position?: number
	): Promise<{ bytesRead: number; buffer: Uint8Array }> {
		const file = await this.handle.getFile()
		const pos =
			position !== undefined && position !== null ? position : this.position
		const blob = file.slice(pos, pos + length)
		const arrayBuffer = await blob.arrayBuffer()
		const bytesRead = Math.min(length, arrayBuffer.byteLength)
		buffer.set(new Uint8Array(arrayBuffer), offset)
		if (position === undefined || position === null) {
			this.position = pos + bytesRead
		}
		return { bytesRead, buffer }
	}
	async write(
		buffer: Uint8Array,
		offset: number,
		length: number,
		position?: number
	): Promise<{ bytesWritten: number; buffer: Uint8Array }> {
		const writable = await this.handle.createWritable({
			keepExistingData: true
		})
		let pos: number
		if (this.flags.includes('a')) {
			const file = await this.handle.getFile()
			pos = file.size
		} else if (position !== undefined && position !== null) {
			pos = position
		} else {
			pos = this.position
		}
		await writable.seek(pos)
		await writable.write(buffer.slice(offset, offset + length))
		await writable.close()
		if (
			(position === undefined || position === null) &&
			!this.flags.includes('a')
		) {
			this.position = pos + length
		}
		return { bytesWritten: length, buffer }
	}
	async close(): Promise<void> {}
}

class Dirent {
	name: string
	_handle: FileSystemHandle
	constructor(handle: FileSystemHandle) {
		this.name = handle.name
		this._handle = handle
	}
	isFile(): boolean {
		return this._handle.kind === 'file'
	}
	isDirectory(): boolean {
		return this._handle.kind === 'directory'
	}
	isBlockDevice(): boolean {
		return false
	}
	isCharacterDevice(): boolean {
		return false
	}
	isSymbolicLink(): boolean {
		return false
	}
	isFIFO(): boolean {
		return false
	}
	isSocket(): boolean {
		return false
	}
}

class Dir {
	dirHandle: FileSystemDirectoryHandle
	entries: AsyncIterator<FileSystemHandle>
	constructor(dirHandle: FileSystemDirectoryHandle) {
		this.dirHandle = dirHandle
		this.entries = (dirHandle as any).values()
	}
	async read(): Promise<Dirent | null> {
		const result = await this.entries.next()
		if (result.done) return null
		return new Dirent(result.value)
	}
	async close(): Promise<void> {}
}

class Stats {
	dev: number
	ino: number
	mode: number
	nlink: number
	uid: number
	gid: number
	rdev: number
	size: number
	blksize: number
	blocks: number
	atimeMs: number
	mtimeMs: number
	ctimeMs: number
	birthtimeMs: number
	atime: Date
	mtime: Date
	ctime: Date
	birthtime: Date
	constructor(
		fileOrDir: File | { kind: 'directory'; lastModified: number; size: number }
	) {
		const isFile = fileOrDir instanceof File
		this.mode = isFile ? 0o100000 : 0o40000
		this.dev = 0
		this.ino = 0
		this.nlink = 1
		this.uid = 0
		this.gid = 0
		this.rdev = 0
		this.size = isFile ? fileOrDir.size : 0
		this.blksize = 4096
		this.blocks = Math.ceil(this.size / 512)
		const time = fileOrDir.lastModified
		this.atimeMs = time
		this.mtimeMs = time
		this.ctimeMs = time
		this.birthtimeMs = time
		this.atime = new Date(time)
		this.mtime = new Date(time)
		this.ctime = new Date(time)
		this.birthtime = new Date(time)
	}
	isFile(): boolean {
		return (this.mode & 0o170000) === 0o100000
	}
	isDirectory(): boolean {
		return (this.mode & 0o170000) === 0o40000
	}
	isBlockDevice(): boolean {
		return false
	}
	isCharacterDevice(): boolean {
		return false
	}
	isSymbolicLink(): boolean {
		return false
	}
	isFIFO(): boolean {
		return false
	}
	isSocket(): boolean {
		return false
	}
}

const fsPromises = {
	async open(
		path: string,
		flags: string = 'r',
		mode?: number
	): Promise<FileHandle> {
		const create = flags.includes('w') || flags.includes('a')
		const truncate = flags.includes('w')
		const handle = (await resolvePath(path, {
			type: 'file',
			create
		})) as FileSystemFileHandle
		if (truncate) {
			const writable = await handle.createWritable({ keepExistingData: false })
			await writable.close()
		}
		return new FileHandle(handle, flags)
	},
	async readFile(
		path: string,
		options: { encoding?: string } = {}
	): Promise<string | Uint8Array> {
		const handle = (await resolvePath(path, {
			type: 'file'
		})) as FileSystemFileHandle
		const file = await handle.getFile()
		if (options.encoding) {
			return await file.text()
		}
		return new Uint8Array(await file.arrayBuffer())
	},
	async writeFile(
		path: string,
		data: Uint8Array | string,
		options: { encoding?: string } = {}
	): Promise<void> {
		const handle = (await resolvePath(path, {
			type: 'file',
			create: true
		})) as FileSystemFileHandle
		const writable = await handle.createWritable({ keepExistingData: false })
		await writable.write(data)
		await writable.close()
	},
	async stat(path: string): Promise<Stats> {
		const handle = await resolvePath(path, { type: null })
		const file =
			handle.kind === 'file'
				? await (handle as FileSystemFileHandle).getFile()
				: ({ kind: 'directory', lastModified: 0, size: 0 } as const)
		return new Stats(file)
	},
	async mkdir(path: string): Promise<void> {
		await resolvePath(path, { type: 'directory', create: true })
	},
	async readdir(path: string): Promise<string[]> {
		const dirHandle = (await resolvePath(path, {
			type: 'directory'
		})) as FileSystemDirectoryHandle
		const entries: string[] = []
		for await (const entry of (dirHandle as any).values()) {
			entries.push(entry.name)
		}
		return entries
	},
	async opendir(path: string): Promise<Dir> {
		const dirHandle = (await resolvePath(path, {
			type: 'directory'
		})) as FileSystemDirectoryHandle
		return new Dir(dirHandle)
	},
	async unlink(path: string): Promise<void> {
		const parentPath = path.substring(0, path.lastIndexOf('/')) || '/'
		const fileName = path.split('/').pop()!
		const parentDir = (await resolvePath(parentPath, {
			type: 'directory'
		})) as FileSystemDirectoryHandle
		await parentDir.removeEntry(fileName)
	},
	async rename(oldPath: string, newPath: string): Promise<void> {
		const oldParentPath = oldPath.substring(0, oldPath.lastIndexOf('/')) || '/'
		const oldName = oldPath.split('/').pop()!
		const newParentPath = newPath.substring(0, newPath.lastIndexOf('/')) || '/'
		const newName = newPath.split('/').pop()!
		const oldParentDir = (await resolvePath(oldParentPath, {
			type: 'directory'
		})) as FileSystemDirectoryHandle
		const fileHandle = await oldParentDir.getFileHandle(oldName)
		const newParentDir = (await resolvePath(newParentPath, {
			type: 'directory',
			create: true
		})) as FileSystemDirectoryHandle
		const file = await fileHandle.getFile()
		const newHandle = await newParentDir.getFileHandle(newName, {
			create: true
		})
		const writable = await newHandle.createWritable()
		await writable.write(await file.arrayBuffer())
		await writable.close()
		await oldParentDir.removeEntry(oldName)
	},
	async createReadStream(
		path: string,
		options: CreateReadStreamOptions = {}
	): Promise<ReadableStream<Uint8Array>> {
		const { start = 0, end = Infinity, highWaterMark = 64 * 1024 } = options
		const handle = (await resolvePath(path, {
			type: 'file'
		})) as FileSystemFileHandle
		const file = await handle.getFile()
		const fileSize = file.size
		if (start > fileSize - 1 || end < start) {
			throw new Error(
				'Invalid range: start must be less than or equal to file size and end must be greater than or equal to start'
			)
		}
		const effectiveEnd = Math.min(end, fileSize - 1)
		let position = start
		const stream = new ReadableStream<Uint8Array>({
			async pull(controller) {
				if (position > effectiveEnd) {
					controller.close()
					return
				}
				const chunkSize = Math.min(highWaterMark, effectiveEnd - position + 1)
				const blob = file.slice(position, position + chunkSize)
				const arrayBuffer = await blob.arrayBuffer()
				const chunk = new Uint8Array(arrayBuffer)
				controller.enqueue(chunk)
				position += chunk.length
				if (position > effectiveEnd) {
					controller.close()
				}
			}
		})
		return stream
	}
}

export { fsPromises }
