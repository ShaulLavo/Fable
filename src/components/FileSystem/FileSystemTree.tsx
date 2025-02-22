import { batch, Component, createSignal, For, Show } from 'solid-js'

import { isDev } from 'solid-js/web'
import { EMPTY_NODE_NAME } from '../../consts/FS'
import { useFS } from '../../context/FsContext'
import { useFsDnd } from '../../hooks/useFsDnd'
import { Folder, FSNode, isFolder } from '../../types/FS.types'
import { cn } from '../../utils/cn'
import { NodeNameInput } from './NameInput'
import { Node } from './Node'
import { bracketColors, isDark } from '../../stores/themeStore'
import { getLighterRgbColor } from '../../utils/color'

export interface FileSystemTreeProps {
	node: FSNode
	parent?: Folder
	fontSize: number
	isContainerHovered: boolean
}

const SYSTEM_PATHS = ['/store.json']

export const FileSystemTree: Component<FileSystemTreeProps> = props => {
	if (!isDev && SYSTEM_PATHS.includes(props.node.path)) return null
	const { setCurrentPath, setCurrentFolder, setIsOpen, setCurrentNode, fs } =
		useFS()
	const {
		setDraggable,
		setDropzone,
		dropzone,
		isDraggedOver,
		isDragged,
		draggedNode
	} = useFsDnd(props.node)
	const isTemp = () => props.node.name === EMPTY_NODE_NAME
	const [isEditing, setIsEditing] = createSignal(isTemp())
	const [editingValue, setEditingValue] = createSignal('')

	const onClick = () => {
		const node = props.node
		batch(() => {
			if (isFolder(node)) {
				setIsOpen(node, !node.isOpen)
				setCurrentFolder(node)
			} else {
				if (props.parent) setCurrentFolder(props.parent)
			}
			setCurrentNode(node)
			setCurrentPath(node.path)
		})
	}
	const getLineColor = () => {
		const colorByDepth =
			Object.values(bracketColors())[
				(props.node.path.split('/').length - 1) % 7
			]
		const alpha = isDark() ? 0.25 : 0.5
		return getLighterRgbColor(colorByDepth, alpha)
	}
	return (
		<div
			ref={setDropzone}
			class={cn(
				'relative px-1 rounded select-none box-content transition duration-200 ease-in-out',
				{
					'bg-blue-100/30': isDraggedOver(),
					'opacity-70': isDragged()
				}
			)}
		>
			<span ref={setDraggable}>
				<Node
					node={props.node}
					onClick={onClick}
					// onDoubleClick={onDoubleClick}
					draggedNode={draggedNode()}
					fontSize={props.fontSize!}
				>
					{isEditing() ? (
						<NodeNameInput
							parentEl={dropzone()}
							editingValue={editingValue()}
							isEditing={isEditing()}
							isTemp={isTemp()}
							node={props.node}
							setEditingValue={setEditingValue}
							setIsEditing={setIsEditing}
						/>
					) : (
						props.node.name
					)}
				</Node>
			</span>

			<div
				class={cn(
					'pl-1 ml-1 border-l box-border transition duration-200 ease-in-out',
					{}
				)}
				style={{
					'margin-left': `${props.fontSize / 2}px `,
					'padding-left': `${props.fontSize / 2}px `,
					'border-color': getLineColor()
				}}
			>
				<Show when={isFolder(props.node) && props.node.isOpen}>
					<For each={isFolder(props.node) && props.node.children}>
						{child => (
							<FileSystemTree
								node={child}
								parent={props.node as Folder}
								fontSize={props.fontSize}
								isContainerHovered={props.isContainerHovered}
							/>
						)}
					</For>
				</Show>
			</div>
		</div>
	)
}
