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
	ParentComponent,
	Setter,
	useContext
} from 'solid-js'
import { createStore, produce } from 'solid-js/store'
import { SYSTEM_PATHS } from '../consts/app'
import { EMPTY_NODE_NAME } from '../consts/FS'
import { LOCAL_STORAGE_CAP, STORAGE_KEYS } from '../consts/storage'
import { useCurrentFile } from '../hooks/useCurrentFile'
import { useOPFS } from '../hooks/useOPFS'
import { useMockFS } from '../mocks/FsContext.mock'
import {
	folderHas,
	getFolder,
	getNode,
	getParent,
	sortTreeInDraft
} from '../service/FS.service'
import { rootName, setIsFsLoading } from '../stores/appStateStore'
import { editorMounted, setStart, start } from '../stores/editorStore'
import { File, Folder, FSNode, isFolder } from '../types/FS.types'
import { cappedSetItem } from '../utils/storage'

export interface FSContext {
	fs: Folder
	setFs: Setter<Folder>
	currentPath: Accessor<string>
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
		skipSort?: boolean
	}) => void | FSNode
	updateNodeName: (node: FSNode, name: string) => void
	removeNode: (node?: FSNode, onlyInMemory?: boolean) => void
	setIsOpen: (node: Folder, isOpen: boolean) => void
	moveNode: (currentPath: string, newPath: string) => void
	currentFileSize: Accessor<number>
	openFiles: Map<string, string>
	setLastKnownFile: (file: File | null) => void
	tabs: Accessor<string[]>
}

const FSContext = createContext<FSContext>()

const EMPTY_ROOT = {
	name: rootName(),
	path: '',
	children: [],
	isOpen: true
}

const isEmptyNode = (node: FSNode) => {
	let nodeCopy = { ...node, children: [...((node as Folder)?.children ?? [])] }

	if (isFolder(nodeCopy) && nodeCopy.name === rootName()) {
		nodeCopy.children = nodeCopy.children.filter(
			child => !SYSTEM_PATHS.includes(child.path)
		)
	} else return false

	const rootPaths = ['', '/']
	return (
		nodeCopy.isOpen &&
		nodeCopy.children.length === 0 &&
		rootPaths.includes(nodeCopy.path)
	)
}
export const isMock = false
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

	createEffect(
		on(
			editorMounted,
			async mounted => {
				if (!mounted) return
				try {
					// OPFS is the source of truth
					let tree = await OPFS.tree(fs)
					if (!isEmptyNode(tree)) {
						tree.name = rootName()
						setFs(sortTreeInDraft(tree))
						return
					}
					setIsFsLoading(true)
					// GET DEMO DATA
					const fable = import.meta.glob('../**/*', {
						exhaustive: true,
						import: '*',
						query: '?raw',
						eager: true
						// eager: isDev ? false : true
					}) as Record<string, { default: string }>

					const promises = Object.entries(fable).map(([path, content]) => {
						const name = path.split('/').pop()

						if (!name) return
						if (path.startsWith('../')) {
							path = path.slice(2)
						}
						if (path.startsWith('./')) {
							path = path.slice(1)
						}
						// console.log(name, path, content.default)
						return OPFS.saveFile({ name, path }, content.default)
					})
					await Promise.all(promises)
					tree = await OPFS.tree(fs)
					tree.name = rootName()
					setFs(sortTreeInDraft(tree))
				} catch (e) {
					console.error(e)
				} finally {
					console.info(
						`OPFS sync took ${(performance.now() - start()).toFixed(2)} ms`
					)
					queueMicrotask(() => setStart(0))
					setIsFsLoading(false)
					setCurrentNode(fs.children.find(n => n.name === 'App.tsx')!)
				}
			},
			{ defer: true }
		)
	)

	createEffect(
		on(
			editorMounted,
			async mounted => {
				if (!mounted) return

				let tabsFromStorage = localStorage.getItem(STORAGE_KEYS.TABS)
				if (tabsFromStorage) {
					tabsFromStorage = JSON.parse(tabsFromStorage)
					if (!Array.isArray(tabsFromStorage)) return

					const promises = tabsFromStorage
						.filter(Boolean)
						.map(async (path: string) => {
							const file = getNode(fs, path)
							if (!file) return
							const content = await OPFS.getFile(file)
							return { path: file.path, content: content ?? '' }
						})

					;(await Promise.all(promises))
						.filter(p => !!p)
						.forEach(({ path, content }) => {
							openFiles.set(path, content)
						})
				}
				console.info(
					`tab sync took ${(performance.now() - start()).toFixed(2)} ms`
				)
			},
			{ defer: true }
		)
	)

	const openFiles = new ReactiveMap<string, string>()
	const tabs = createMemo(() => [...openFiles.keys()])
	createEffect(
		on(
			tabs,
			tabs => {
				localStorage.setItem(STORAGE_KEYS.TABS, JSON.stringify(tabs))
			},
			{ defer: true }
		)
	)
	const [currentPath, setCurrentPath] = makePersisted(createSignal('/'), {
		name: STORAGE_KEYS.CURRENT_PATH
	})
	const [currentNode, _setCurrentNode] = createSignal(
		getNode(fs, currentPath()) ?? fs
	)
	const setCurrentNode = (node: FSNode) => {
		//TODO is better cleaner to just effect??
		batch(() => {
			_setCurrentNode(node)
			setCurrentPath(node.path)
		})
	}
	const [currentFolder, setCurrentFolder] = createSignal(
		getFolder(fs, currentPath()) ?? fs
	)
	const [lastKnownFile, setLastKnownFile] = makePersisted(
		createSignal<File | null>(null),
		{ name: STORAGE_KEYS.LAST_KNOWN_FILE }
	)
	const file = lastKnownFile()
	if (file) {
		const content = localStorage.getItem(STORAGE_KEYS.LAST_KNOWN_FILE_CONTENT)
		if (content) openFiles.set(file.path, content)
	}
	const currentFile = createMemo(() =>
		!isFolder(currentNode()) ? currentNode() : lastKnownFile()
	)
	const [currentFileSize, setCurrentFileSize] = createSignal(0)

	const { currentFileContent } = useCurrentFile(currentFile, openFiles)
	const loadCurrentFile = async (file: File | null) => {
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
	}
	createEffect(on(currentFile, loadCurrentFile, { defer: true }))

	const addNode: FSContext['addNode'] = ({
		name,
		parent = currentFolder(),
		children,
		onlyInMemory = false,
		skipSort = false
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
				let currentPath = target.path
				for (let i = 0; i < segments.length; i++) {
					const segment = segments[i]
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
				if (!skipSort) sortTreeInDraft(parentNode)
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
				setCurrentFolder(newNode as Folder)
				setCurrentNode(newNode)
				setIsOpen(newNode as Folder, true)
			} else {
				setCurrentNode(newNode)
				setIsOpen(parent, true)
			}
		})
		if (!onlyInMemory) {
			OPFS.create(newNode).catch(() => removeNode(newNode, true))
		}

		return newNode
	}
	const removeNode: FSContext['removeNode'] = (
		node: FSNode = currentNode(),
		onlyInMemory = false
	) => {
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
			})
		)
		const deleteFromMap = (node: FSNode) => {
			if (isFolder(node)) {
				node.children.forEach(child => deleteFromMap(child))
			} else {
				if (openFiles.has(node.path)) {
					openFiles.delete(node.path)
				}
			}
		}
		deleteFromMap(node)

		if (onlyInMemory) return
		OPFS.remove(node).catch(() => {
			addNode({
				name: node.name,
				parent: parent,
				children: isFolder(node) ? node.children : undefined,
				onlyInMemory: true
			})
		})
	}
	const updateNodeName: FSContext['updateNodeName'] = (node, name) => {
		batch(() => {
			const replaceNameInMap = (node: FSNode) => {
				if (isFolder(node)) {
					node.children.forEach(child => replaceNameInMap(child))
				} else {
					if (openFiles.has(node.path)) {
						const content = openFiles.get(node.path)
						openFiles.delete(node.path)
						openFiles.set(node.path.replace(node.name, name), content ?? '')
					}
				}
			}
			removeNode(node)
			const newNode = addNode({
				name,
				parent: getParent(node, fs) ?? fs,
				children: isFolder(node) ? node.children : undefined,
				skipSort: name === EMPTY_NODE_NAME
			})
			if (currentNode().path === node.path) {
				setCurrentPath(node.path.replace(node.name, name))
				setCurrentNode(
					newNode ?? getNode(fs, node.path.replace(node.name, name)) ?? fs
				)
			}
			replaceNameInMap(node)
		})
	}
	const moveNode = (currentPath: string, targetPath: string) => {
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

	const context: FSContext = {
		fs,
		setFs,
		currentPath,
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
		openFiles,
		setLastKnownFile,
		tabs
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
	if (isMock) return useMockFS()
	const context = useContext(FSContext)
	if (!context) throw new Error('useFS must be used within a FSProvider')
	return context
}
