import { dir } from 'opfs-tools'
import { createSignal } from 'solid-js'
import { useFS } from '../context/FsContext'
import { getFolder, nodeChildOf } from '../service/FS.service'
import { Folder, FSNode, isFolder } from '../types/FS.types'
import { useDnD } from './useDnd'
import { useOPFS } from './useOPFS'
import { viewTransition, viewTransitionBatched } from '../utils/viewTransition'

const [draggedNode, setDraggedNode] = createSignal<FSNode | null>(null)
const [draggedOverNode, _setDraggedOverNode] = createSignal<FSNode | null>(null)

const setDraggedOverNode = (node: FSNode | null) => {
	if (node === null) return _setDraggedOverNode(null)
	if (isFolder(node)) _setDraggedOverNode(node)
}

export const useFsDnd = (node: FSNode) => {
	const { moveNode, setIsOpen, addNode, fs } = useFS()
	const { write } = useOPFS()
	const handleFileEntry = async (
		entry: FileSystemFileEntry,
		toPath: string
	) => {
		entry.file(async file => {
			const path = `${toPath}/${file.name}`
			await write(path, file.stream())
			addNode({ parent: getFolder(fs, toPath) ?? fs, name: file.name })
			// TODO set current path
		})
	}

	const handleDirectoryEntry = async (
		entry: FileSystemDirectoryEntry,
		parentPath: string
	) => {
		if (parentPath.startsWith('/')) parentPath = parentPath.slice(1)
		let path = parentPath + '/' + entry.name
		if (path.startsWith('/')) path = path.slice(1)

		let folder =
			getFolder(fs, parentPath) ??
			(addNode({ name: parentPath, children: [] }) as Folder) ??
			fs

		addNode({
			parent: folder,
			name: entry.name,
			children: []
		})
		await dir(path).create()
		const reader = entry.createReader()

		const entries = await new Promise<FileSystemEntry[]>(resolve => {
			reader.readEntries(resolve)
		})
		for (const entry of entries) {
			if (entry.isFile) {
				await handleFileEntry(entry as FileSystemFileEntry, path)
			} else if (entry.isDirectory) {
				await handleDirectoryEntry(entry as FileSystemDirectoryEntry, path)
			}
		}
	}

	const handleItemDrop = async (dt: DataTransfer, node: FSNode) => {
		const folder = getFolder(fs, node.path)
		if (!folder) return
		let parentPath = folder.path
		const items = dt.items

		for (const item of items) {
			const entry =
				item.webkitGetAsEntry() || (await item.getAsFileSystemHandle())
			// wierd bug in older chrome versions
			setTimeout(async () => {
				if (!entry) return

				if (entry instanceof FileSystemDirectoryHandle) {
				} else if (entry instanceof FileSystemFileHandle) {
				} else {
					if (entry.isDirectory) {
						await handleDirectoryEntry(
							entry as FileSystemDirectoryEntry,
							parentPath
						)
						return
					}
					if (entry.isFile) {
						await handleFileEntry(entry as FileSystemFileEntry, parentPath)
						return
					}
				}
			}, 0)
		}
	}
	const { dropzone, draggable, ...rest } = useDnD({
		onDragStart(event) {
			if (!event.dataTransfer) return
			event.dataTransfer.setData('text/plain', node.path)

			const clone = draggable().parentElement!.cloneNode(true) as HTMLElement
			clone.style.position = 'absolute'
			clone.style.top = '-1000px'
			clone.style.left = '-1000px'
			document.body.appendChild(clone)
			event.dataTransfer.setDragImage(clone, 0, 0)
			setTimeout(() => {
				setDraggedNode(node)
				document.body.removeChild(clone)
			}, 0)
		},
		onDragEnd() {
			setDraggedNode(null)
			setDraggedOverNode(null)
		},
		onDrop(event) {
			event.preventDefault()
			const dt = event.dataTransfer
			if (!dt) return
			const from = dt.getData('text/plain')
			if (from) {
				if (from === node.path) return
				const to = node.path
				viewTransitionBatched(() => {
					moveNode(from, to)
					setDraggedOverNode(null!)
					setDraggedNode(null!)
				})
				return
			}
			if (dt.items && dt.items.length > 0) {
				handleItemDrop(dt, node)
			}
		},
		onDragOver(event) {
			event.stopPropagation()
			if (!event.dataTransfer) return
			event.dataTransfer.dropEffect = 'move'
			setDraggedOverNode(node)
			const dragged = draggedNode()

			if (!dragged) return
			if (node === dragged) return
			if (!isFolder(node)) return
			if (isFolder(dragged) && nodeChildOf(node, dragged)) return

			setIsOpen(node, true)
		},
		onDragEnter(event) {
			event.preventDefault()

			if (isFolder(node)) event.stopPropagation()
			else return
			if (!event.dataTransfer) return
			event.dataTransfer.dropEffect = 'move'
		},
		onDragLeave() {}
	})

	return {
		dropzone,
		...rest,
		isDraggedOver: () => draggedOverNode() === node,
		isDragged: () => draggedNode() === node,
		draggedNode
	}
}
