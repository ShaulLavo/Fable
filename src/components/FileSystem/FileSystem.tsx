import { createPointerListeners } from '@solid-primitives/pointer'
import { createSignal, For } from 'solid-js'
import { EMPTY_NODE_NAME } from '../../consts/FS'
import { useFS } from '../../context/FsContext'
import { createInnerZoom } from '../../hooks/createInnerZoom'
import { useOPFS } from '../../hooks/useOPFS'
import { BASE_ICONS } from '../../stores/icons'
import { secondaryColor, secondaryBackground } from '../../stores/themeStore'
import { Span } from '../ui/Span'
import { FileSystemTree } from './FileSystemTree'
import { Dynamic } from 'solid-js/web'
import { GlobalLoader, Loader } from '../GlobalLoader'
import { isFsLoading } from '../../stores/appStateStore'

interface FileSystemProps {}

export function FileSystem(props: FileSystemProps) {
	const { fs, addNode, removeNode, currentNode, updateNodeName } = useFS()
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
			class="flex flex-col  min-w-28 h-lvh relative z-80"
			ref={setEditorContainer}
			style={{
				'background-color': secondaryBackground(),
				color: secondaryColor()
				// 'z-index': 80,
				// position: 'relative'
			}}
		>
			<Loader
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				show={isFsLoading()}
			/>
			<div class="flex justify-between items-center px-2">
				{fs.name.toUpperCase()}
				<div class="flex items-center">
					<Span
						enableHover
						class="p-1"
						onClick={() => addNode({ name: EMPTY_NODE_NAME })}
						title="Add File"
					>
						<Dynamic component={BASE_ICONS.addFile} />
					</Span>
					<Span
						enableHover
						class="p-1"
						onClick={() => addNode({ name: EMPTY_NODE_NAME, children: [] })}
						title="Add Folder"
					>
						<Dynamic component={BASE_ICONS.addFolder} />
					</Span>
					<Span
						enableHover
						class="p-1"
						onClick={() => removeNode(currentNode())}
						title="Delete"
					>
						<Dynamic component={BASE_ICONS.trash} />
					</Span>
					<Span
						enableHover
						class="p-1"
						onClick={() => updateNodeName(currentNode(), EMPTY_NODE_NAME)}
						title="Rename"
					>
						<Dynamic component={BASE_ICONS.rename} />
					</Span>
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
