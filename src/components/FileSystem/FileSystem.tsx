import { createPointerListeners } from '@solid-primitives/pointer'
import { VsNewFile, VsNewFolder } from 'solid-icons/vs'
import { createSignal, For } from 'solid-js'
import { EMPTY_NODE_NAME } from '../../consts/FS'
import { useFS } from '../../context/FsContext'
import { createInnerZoom } from '../../hooks/createInnerZoom'
import { useOPFS } from '../../hooks/useOPFS'
import { currentBackground, currentColor } from '../../stores/themeStore'
import { FileSystemTree } from './FileSystemTree'
import { ICONS } from '../../stores/icons'

interface FileSystemProps {}

export function FileSystem(props: FileSystemProps) {
	const { fs, addNode } = useFS()
	const OPFS = useOPFS()
	const [editorContainer, setEditorContainer] = createSignal<HTMLDivElement>(
		null!
	)

	const [isHovered, setIsHovered] = createSignal(false)
	createPointerListeners({
		target: editorContainer,
		pointerTypes: ['touch', 'mouse'],
		onEnter: () => setIsHovered(true),
		onLeave: () => setIsHovered(false)
	})

	const { fontSize } = createInnerZoom({
		ref: editorContainer,
		key: 'explorer'
	})

	return (
		<div
			class="flex flex-col min-w-28"
			ref={setEditorContainer}
			style={{
				'background-color': currentBackground(),
				color: currentColor()
			}}
		>
			<div class="flex justify-between items-center px-2">
				{fs.name.toUpperCase()}
				<div class="flex items-center">
					<span
						class="p-1 hover:bg-gray-200 hover:bg-opacity-10 transition duration-200 ease-in-out"
						onClick={() => addNode({ name: EMPTY_NODE_NAME })}
					>
						<ICONS.addFile />
					</span>
					<span
						class="p-1 hover:bg-gray-200 hover:bg-opacity-10 transition duration-200 ease-in-out"
						onClick={() => addNode({ name: EMPTY_NODE_NAME, children: [] })}
					>
						<ICONS.addFolder />
					</span>
				</div>
			</div>

			<For each={fs.children}>
				{node => (
					<FileSystemTree
						node={node}
						fontSize={fontSize()}
						isContainerHovered={isHovered()}
					/>
				)}
			</For>
		</div>
	)
}
{
}
