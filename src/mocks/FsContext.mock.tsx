import {
	createContext,
	createSignal,
	JSX,
	ParentComponent,
	useContext,
	type Accessor
} from 'solid-js'
import { createStore } from 'solid-js/store'
import { FSContext } from '../context/FsContext'
import { Folder, FSNode, File } from '../types/FS.types'

const initialFs: Folder = {
	name: 'root',
	path: '/',
	children: [
		{ name: 'folder1', path: '/folder1', children: [], isOpen: false },
		{ name: 'file1.txt', path: '/file1.txt' }
	],
	isOpen: true
}

const MockFSContext = createContext<FSContext>()

export const MockFsProvider: ParentComponent<{
	initialTree?: Folder
}> = props => {
	const [fs, setFs] = createStore<Folder>(initialFs)

	const [currentNode, setCurrentNode] = createSignal<FSNode>(fs)
	const [currentFolder, setCurrentFolder] = createSignal<Folder>(fs)
	const [currentFile, setCurrentFile] = createSignal<File>(null!)
	const [currentFileSize, setCurrentFileSize] = createSignal<number>(0)
	const [tabs, setTabs] = createSignal<string[]>([])

	const currentPath: Accessor<string> = () => currentNode().path

	const openFiles = new Map<string, string>()

	const addNode = (config: {
		name: string
		parent?: Folder
		children?: FSNode[]
		onlyInMemory?: boolean
		skipSort?: boolean
	}): FSNode => {
		console.log('addNode called with', config)
		const parent = config.parent || fs
		const newPath = `${parent.path}/${config.name}`
		const newNode: FSNode = config.children
			? {
					name: config.name,
					path: newPath,
					children: config.children,
					isOpen: false
				}
			: { name: config.name, path: newPath }

		return newNode
	}

	const updateNodeName = (node: FSNode, name: string): void => {
		console.log('updateNodeName called with', node, name)
	}

	const removeNode = (node?: FSNode, onlyInMemory?: boolean): void => {
		console.log('removeNode called with', node, onlyInMemory)
	}

	const setIsOpen = (node: Folder, isOpen: boolean): void => {
		console.log('setIsOpen called with', node, isOpen)
	}

	const moveNode = (currentPath: string, newPath: string): void => {
		console.log('moveNode called with', currentPath, newPath)
	}

	const setLastKnownFile = (file: File | null): void => {
		console.log('setLastKnownFile called with', file)
	}

	const mockFsContext: FSContext = {
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
		<MockFSContext.Provider value={mockFsContext}>
			{props.children}
		</MockFSContext.Provider>
	)
}

export const useMockFS = () => {
	const context = useContext(MockFSContext)
	if (!context)
		throw new Error('useMockFS must be used within a MockFsProvider')
	return context
}
