import { ReactiveMap } from '@solid-primitives/map'
import { dir as fsDir, file as fsFile, write as fsWrite } from 'opfs-tools'
import { OPFS } from '../service/OPFS.service'
import { FSNode, File, Folder, isFolder } from '../types/FS.types'
const enum ACTIONS {
	SAVE_FILE = 'SAVE_FILE',
	GET_FILE = 'GET_FILE',
	MOVE = 'MOVE',
	REMOVE = 'REMOVE',
	TREE = 'TREE',
	WRITE = 'WRITE',
	READ_CHUNK = 'READ_CHUNK',
	MAP_FILES = 'MAP_FILES',
	CREATE_FILE = 'CREATE_FILE',
	CREATE_FOLDER = 'CREATE_FOLDER'
}
const pendingActions = new ReactiveMap<ACTIONS, number>()
export function useOPFS() {
	const addAction = (action: ACTIONS) => {
		const count = pendingActions.get(action) ?? 0
		pendingActions.set(action, count + 1)
	}
	const removeAction = (action: ACTIONS) => {
		const count = pendingActions.get(action) ?? 0
		if (count <= 1) {
			pendingActions.delete(action)
		} else {
			pendingActions.set(action, count - 1)
		}
	}
	const measure = async <T, Args extends unknown[]>(
		action: ACTIONS,
		fn: (...args: Args) => Promise<T>,
		...args: Args
	): Promise<T> => {
		addAction(action)
		const start = performance.now()
		try {
			return await fn(...args)
		} finally {
			const duration = performance.now() - start
			console.info(`${action} took ${duration}ms`)
			removeAction(action)
		}
	}

	const saveFile = (file: File, content: string) =>
		measure(ACTIONS.SAVE_FILE, () => OPFS.saveFile(file, content))

	const getFile = (file: File) =>
		measure(ACTIONS.GET_FILE, () => OPFS.getFile(file))

	const move = (node: FSNode, oldPath: string) =>
		measure(ACTIONS.MOVE, () => OPFS.move(node, oldPath))

	const remove = (node: FSNode) =>
		measure(ACTIONS.REMOVE, () => OPFS.remove(node))

	const tree = (node: Folder) => measure(ACTIONS.TREE, () => OPFS.tree(node))

	const write: typeof fsWrite = (...params) =>
		measure(ACTIONS.WRITE, () => fsWrite(...params))

	const getFileInChunks = (file: File, size?: number) =>
		measure(ACTIONS.READ_CHUNK, () => OPFS.getFileInChunks(file, size))

	const mapFiles = (root: Folder) =>
		measure(ACTIONS.MAP_FILES, OPFS.mapFiles, root)

	const getOpfsNode = async (node: FSNode) =>
		isFolder(node) ? fsDir(node.path) : fsFile(node.path)

	const isLoading = () => pendingActions.size > 0

	const actions = () => Array.from(pendingActions.keys())
	const createFile = (path: string, content: string) =>
		measure(ACTIONS.CREATE_FILE, async () => {
			const file = await fsFile(path).createWriter()
			await file.write(content)
			return file
		})
	const createFolder = (path: string) =>
		measure(ACTIONS.CREATE_FOLDER, async () => {
			const folder = await fsDir(path).create()
			return folder
		})

	const create = async (node: FSNode) => {
		if (isFolder(node)) {
			createFolder(node.path)
			node.children.forEach(create)
		} else {
			return createFile(node.path, '')
		}
	}
	return {
		saveFile,
		getFile,
		move,
		remove,
		tree,
		write,
		isLoading,
		actions,
		getFileInChunks,
		getOpfsNode,
		mapFiles,
		create
	}
}
