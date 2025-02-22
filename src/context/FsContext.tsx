import { WindowEventListener } from '@solid-primitives/event-listener'
import { ReactiveMap } from '@solid-primitives/map'
import { makePersisted } from '@solid-primitives/storage'
import {
	Accessor,
	batch,
	createContext,
	createEffect,
	createMemo,
	createSignal,
	on,
	onMount,
	ParentComponent,
	Setter,
	useContext
} from 'solid-js'
import { createStore, produce } from 'solid-js/store'
import { EMPTY_NODE_NAME } from '../consts/FS'
import { LOCAL_STORAGE_CAP, STORAGE_KEYS } from '../consts/storage'
import { useOPFS } from '../hooks/useOPFS'
import {
	folderHas,
	getFolder,
	getNode,
	getParent,
	sortTreeInDraft
} from '../service/FS.service'
import { File, Folder, FSNode, isFolder } from '../types/FS.types'
import { cappedSetItem } from '../utils/storage'
import { formatCode, formatter, getConfigFromExt } from '../utils/format'
import { useFileExtension } from '../hooks/useFileExtension'
import { useCurrentFile } from '../hooks/useCurrentFile'
interface FSContext {
	fs: Folder
	setFs: Setter<Folder>
	currentPath: Accessor<string>
	setCurrentPath: (path: string) => void
	currentNode: Accessor<FSNode>
	setCurrentNode: (node: FSNode) => void
	currentFolder: Accessor<Folder>
	setCurrentFolder: (folder: Folder) => void
	currentFile: Accessor<File | null>
	addNode: (config: {
		name: string
		parent?: Folder
		children?: FSNode[]
		onlyInMemory?: boolean
	}) => void | FSNode
	updateNodeName: (node: FSNode, name: string) => void
	removeNode: (node?: FSNode, onlyInMemory?: boolean) => void
	setIsOpen: (node: Folder, isOpen: boolean) => void
	moveNode: (currentPath: string, newPath: string) => void
	currentFileSize: Accessor<number>
	openFiles: Map<string, string>
}

const FSContext = createContext<FSContext>()

const EMPTY_ROOT = {
	name: 'root',
	path: '',
	children: [],
	isOpen: true
}

const isEmpty = (node: FSNode) => {
	return (
		isFolder(node) &&
		node.isOpen &&
		node.children.length === 0 &&
		node.name === 'root' &&
		node.path === '/'
	)
}

export const FSProvider: ParentComponent<{ initialTree?: Folder }> = props => {
	const savedData = JSON.parse(
		localStorage.getItem(STORAGE_KEYS.FS) ?? 'null'
	) as Folder | null

	const [fs, setFs] = makePersisted(
		createStore<Folder>(savedData ?? EMPTY_ROOT),
		{
			name: STORAGE_KEYS.FS
		}
	)
	const OPFS = useOPFS()

	onMount(async () => {
		const tree = await OPFS.tree(fs)
		if (!isEmpty(tree)) {
			tree.name = 'root'
			sortTreeInDraft(tree)
			setFs(tree)
			return
		}
		// if OPFS is empty we load demo data

		// const { initialTree } = await import('../consts/tree')
		// setFs(initialTree)
		// const { fileContents } = await import('../consts/files')
		// let promises = []
		// for (const [path, content] of Object.entries(fileContents)) {
		// 	const name = path.split('/').pop()
		// 	if (!name) continue
		// 	if (path === currentFile()?.path) {
		// 		openFiles.set(path, content)
		// 	}
		// 	promises.push(OPFS.saveFile({ name, path }, content))
		// }
		// await Promise.all(promises)
	})

	const openFiles = new ReactiveMap<string, string>()
	const [currentPath, setCurrentPath] = makePersisted(createSignal('/'), {
		name: STORAGE_KEYS.CURRENT_PATH
	})
	const [currentNode, setCurrentNode] = createSignal(
		getNode(fs, currentPath()) ?? fs
	)
	const [currentFolder, setCurrentFolder] = createSignal(
		getFolder(fs, currentPath()) ?? fs
	)
	const [lastKnownFile, setLastKnownFile] = makePersisted(
		createSignal<File | null>(null),
		{ name: STORAGE_KEYS.LAST_KNOWN_FILE }
	)

	const currentFile = createMemo(() =>
		!isFolder(currentNode()) ? currentNode() : lastKnownFile()
	)
	const [currentFileSize, setCurrentFileSize] = createSignal(0)
	const file = lastKnownFile()
	if (file) {
		const content = localStorage.getItem(STORAGE_KEYS.LAST_KNOWN_FILE_CONTENT)
		if (content) openFiles.set(file.path, content)
	}
	const { currentFileContent } = useCurrentFile(currentFile, openFiles)
	createEffect(
		on(currentFile, async file => {
			if (!file || !file.path) return
			setLastKnownFile(file)
			if (openFiles.has(file.path)) {
			} else {
				const opfsNode = await OPFS.getOpfsNode(file)
				if (opfsNode.kind === 'file') {
					const size = await opfsNode.getSize()
					setCurrentFileSize(size)
					if (size <= LOCAL_STORAGE_CAP) {
						const content = await opfsNode.text()
						openFiles.set(file.path, content)
						return
					}
				}
				const chunk = await OPFS.getFileInChunks(file, LOCAL_STORAGE_CAP)
				if (!chunk) return
				const { value, done } = await chunk.next()
				if (done) return
				openFiles.set(file.path, value)
			}
		})
	)
	const addNode: FSContext['addNode'] = ({
		name,
		parent = currentFolder(),
		children,
		onlyInMemory = false
	}) => {
		if (!parent) return
		if (parent.name === EMPTY_NODE_NAME) return
		const isDir = Array.isArray(children)
		const segments = name.split('/').filter(segment => segment !== '')
		let parentPath = parent.path
		if (parentPath === '/') parentPath = ''

		const newPath =
			parentPath === ''
				? '/' + segments.join('/')
				: `${parentPath}/${segments.join('/')}`
		if (folderHas(name, parent)) {
			console.error(
				`A ${
					isDir ? 'folder' : 'file'
				} with the name "${name}" already exists in "${parent.name}".`
			)
			return
		}

		setFs(
			produce((draft: Folder) => {
				const target = getNode(draft, parent.path)
				if (!target || !isFolder(target)) return
				let current: FSNode = target
				let currentPath: string = target.path
				for (let i = 0; i < segments.length; i++) {
					const segment: string = segments[i]
					currentPath =
						currentPath === '' ? '/' + segment : `${currentPath}/${segment}`
					const existing = getNode(draft, currentPath)
					if (!existing) {
						if (i === segments.length - 1) {
							if (isDir) {
								const newFolder: Folder = {
									name: segment,
									path: currentPath,
									children,
									isOpen: true
								}
								;(current as Folder).children.push(newFolder)
								current = newFolder
							} else {
								const newFile: File = { name: segment, path: currentPath }
								;(current as Folder).children.push(newFile)
								current = newFile
							}
						} else {
							const newFolder: Folder = {
								name: segment,
								path: currentPath,
								children: [] as FSNode[],
								isOpen: true
							}
							;(current as Folder).children.push(newFolder)
							current = newFolder
						}
					} else {
						if (!isFolder(existing) && i < segments.length - 1) return
						current = existing
					}
				}
				const parentNode = getParent(current, draft) ?? draft
				sortTreeInDraft(parentNode)
			})
		)
		const newNode = getNode(
			fs,
			newPath.startsWith('/') ? newPath.slice(1) : newPath
		)
		if (!newNode) return console.error('Failed to add node.', newPath)
		if (newNode.name === EMPTY_NODE_NAME) return
		batch(() => {
			if (isDir) {
				setCurrentPath(newNode.path)
				setCurrentFolder(newNode as Folder)
				setCurrentNode(newNode)
				setIsOpen(newNode as Folder, true)
			} else {
				setCurrentPath(newNode.path)
				setCurrentNode(newNode)
				setIsOpen(parent, true)
			}
		})
		!onlyInMemory && OPFS.create(newNode).catch(() => removeNode(newNode, true))
		return newNode
	}
	function findNodesByName(
		root: Folder,
		name: string,
		type: 'folder' | 'file' | 'node' = 'node'
	): File[] {
		const result: FSNode[] = []
		function traverse(node: FSNode): void {
			if ((type === 'folder' || type === 'node') && isFolder(node)) {
				node.children.forEach(child => traverse(child))
				if (node.name === name) {
					result.push(node)
				}
			} else if (type === 'file' || type === 'node') {
				if (node.name === name) {
					result.push(node)
				}
			}
		}
		traverse(root)
		return result
	}

	async function customUpdateNodeName(node: FSNode, name: string) {
		//TODO this is a mess
		//node has new path after batch so we capture old path here
		const oldPath = node.path

		const updateDescendantPaths = (
			folder: Folder,
			oldPrefix: string,
			newPrefix: string
		) => {
			folder.children.forEach(child => {
				if (child.path.startsWith(oldPrefix)) {
					if (isFolder(child)) {
						updateDescendantPaths(child, oldPrefix, newPrefix)
					}
					setFs(
						produce(draft => {
							const target = getNode(draft, child.path)
							if (target) {
								target.path = child.path.replace(oldPrefix, newPrefix)
							}
						})
					)
				}
			})
		}
		setFs(
			produce(draft => {
				const target = getNode(draft, node.path)
				if (!target) return
				const oldPath = target.path
				const newPath = target.path.replace(target.name, name)
				if (isFolder(target)) {
					updateDescendantPaths(target, oldPath, newPath)
				}
				target.path = node.path.replace(node.name, name)
				target.name = name
				if (oldPath === currentPath()) setCurrentPath(newPath)
			})
		)
		if (openFiles.has(oldPath)) {
			const content = openFiles.get(oldPath)
			openFiles.delete(oldPath)
			openFiles.set(node.path, content ?? '')
		}

		await OPFS.move(node, oldPath)
	}

	const updateNodeName: FSContext['updateNodeName'] = (node, name) => {
		batch(() => {
			removeNode(node)
			addNode({
				name,
				parent: getParent(node, fs) ?? fs,
				children: isFolder(node) ? node.children : undefined
			})
		})
	}

	function setIsOpen(node: Folder, isOpen: boolean) {
		setFs(
			produce(draft => {
				const target = getNode(draft, node.path)
				if (target && isFolder(target)) {
					target.isOpen = isOpen
				}
			})
		)
	}

	async function removeNode(
		node: FSNode = currentNode(),
		onlyInMemory = false
	) {
		const parent = getParent(node, fs)
		if (!parent) return
		setFs(
			produce((draft: Folder) => {
				const targetParent = getNode(draft, parent.path)
				if (!targetParent || !isFolder(targetParent)) return
				const index = targetParent.children.findIndex(
					child => child.path === node.path
				)
				if (index === -1) return
				targetParent.children.splice(index, 1)
				// sortTreeInDraft(draft)
			})
		)
		if (openFiles.has(node.path)) {
			openFiles.delete(node.path)
		}

		if (onlyInMemory) return
		await OPFS.remove(node).catch(() => {
			addNode({
				name: node.name,
				parent: parent,
				children: isFolder(node) ? node.children : undefined,
				onlyInMemory: true
			})
		})
	}

	const moveNode = (currentPath: string, targetPath: string) => {
		//maybe untrack here ?
		const old = getNode(fs, currentPath)
		if (!old) return

		let content: string | undefined
		if (!isFolder(old)) {
			content = openFiles.get(old.path)
		}

		batch(() => {
			removeNode(old)
			const node = addNode({
				name: old.name,
				parent: getFolder(fs, targetPath) ?? fs,
				children: isFolder(old) ? old.children : undefined
			})
			if (content && node) {
				openFiles.set(node.path, content)
			}
		})
	}

	const context: FSContext = {
		fs,
		setFs,
		currentPath,
		setCurrentPath,
		currentNode,
		setCurrentNode,
		currentFolder,
		setCurrentFolder,
		currentFile,
		addNode,
		updateNodeName,
		removeNode,
		setIsOpen,
		moveNode,
		currentFileSize,
		openFiles
	}

	return (
		<FSContext.Provider value={context}>
			<WindowEventListener
				onUnload={() => {
					cappedSetItem(
						STORAGE_KEYS.LAST_KNOWN_FILE_CONTENT,
						currentFileContent()
					)
				}}
			/>

			{props.children}
		</FSContext.Provider>
	)
}

export function useFS() {
	const context = useContext(FSContext)
	if (!context) throw new Error('useFS must be used within a FSProvider')
	return context
}
