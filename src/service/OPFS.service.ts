import { dir as opfsDir, file as opfsFile } from 'opfs-tools'
import { unwrap } from 'solid-js/store'
import { File, Folder, FSNode, isFolder } from '../types/FS.types'

type OpfsResource = {
	exists(): Promise<boolean>
	remove(): Promise<void>
	moveTo(target: OpfsResource): Promise<void>
}
export async function* readFileChunks(
	file: ReturnType<typeof opfsFile>,
	chunkSize: number = 1024
): AsyncGenerator<string, void, unknown> {
	const reader = (await file.stream()).getReader()
	const decoder = new TextDecoder()
	let buffer = new Uint8Array(0)
	while (true) {
		const { done, value } = await reader.read()
		if (done) {
			if (buffer.length) yield decoder.decode(buffer, { stream: false })
			break
		}
		buffer = concat(buffer, value) as Uint8Array<ArrayBuffer>
		while (buffer.length >= chunkSize) {
			// reader.releaseLock()
			// await reader.closed
			yield decoder.decode(buffer.slice(0, chunkSize), { stream: true })
			buffer = buffer.slice(chunkSize)
		}
	}
}

function concat(a: Uint8Array, b: Uint8Array): Uint8Array {
	const c = new Uint8Array(a.length + b.length)
	c.set(a, 0)
	c.set(b, a.length)
	return c
}

const saveFile = async (file: File, content: string) => {
	const writer = await opfsFile(file.path).createWriter()
	await writer.truncate(0)
	await writer.write(content)
	await writer.close()
}

const getFileInChunks = async (
	file: File | ReturnType<typeof opfsFile>,
	size?: number
) => {
	const f = opfsFile(file.path)
	const chunks = readFileChunks(f, size)
	return chunks
}
const getFile = async (file: File, as?: 'text' | 'buffer') => {
	try {
		const f = opfsFile(file.path)
		return await f.text()
	} catch (e) {
		console.error('failed to get file content!' + JSON.stringify(file), e)
		// throw e
	}
}

const move = async (node: FSNode, oldPath: string) => {
	const moveResource = async (resource: OpfsResource, target: OpfsResource) => {
		const exists = await resource.exists()
		if (!exists) return
		await resource.moveTo(target)
	}

	if (isFolder(node)) {
		const folder = opfsDir(oldPath)
		const targetFolder = opfsDir(node.path)
		await moveResource(folder, targetFolder)
		return
	}
	const file = opfsFile(oldPath)
	const targetFile = opfsFile(node.path)
	await moveResource(file, targetFile)
}

const remove = async (node: FSNode) => {
	try {
		if (isFolder(node)) {
			const dir = opfsDir(node.path)
			if (await dir.exists()) {
				await dir.remove()
			}
			return
		}
		const file = opfsFile(node.path)
		if (await file.exists()) {
			await file.remove()
		}
	} catch (e) {
		console.error('failed to remove rewind state!', e)
		throw e
	}
}

const tree = async (n: Folder): Promise<Folder> => {
	const node = unwrap(n)
	if (node.path === 'root/') node.path = '/'
	const dir = opfsDir(node.path || '/')
	const childrenResources = await dir.children()
	const newChildren: FSNode[] = await Promise.all(
		childrenResources.map(async child => {
			if (child.kind === 'dir') {
				const oldChild = node.children
					.filter(isFolder)
					.find(c => c.path === child.path)
				const newChild: Folder = {
					name: child.name,
					path: child.path,
					children: oldChild
						? oldChild.children.toSorted((a, b) => a.name.localeCompare(b.name))
						: [],
					isOpen: oldChild ? oldChild.isOpen : false
				}

				return tree(newChild)
			}
			return { name: child.name, path: child.path }
		})
	)

	return {
		name: node.name,
		children: newChildren,
		isOpen: node.isOpen,
		path: node.path
	}
}

async function mapFiles(
	root: Folder
): Promise<{ files: Record<string, { code: string }> }> {
	const result = { files: {} as Record<string, { code: string }> }
	async function traverse(node: FSNode): Promise<void> {
		if (isFolder(node)) {
			await Promise.all(node.children.map(child => traverse(child)))
		} else {
			const content = await getFile(node as File)
			result.files[node.path] = { code: content ?? '' }
		}
	}
	await traverse(root)
	return result
}

export const OPFS = {
	saveFile,
	getFile,
	move,
	remove,
	tree,
	getFileInChunks,
	mapFiles
}
