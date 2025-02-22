import { JSX } from 'solid-js'
import { useFS } from '../../context/FsContext'
import { FSNode, isFolder } from '../../types/FS.types'
import { cn } from '../../utils/cn'
import { ICONS } from '../../stores/icons'
import { Dynamic } from 'solid-js/web'
import { Arrow } from './Arrow'
import { isDark } from '../../stores/themeStore'

type OnClickEvent = JSX.EventHandlerUnion<
	HTMLSpanElement,
	MouseEvent,
	JSX.EventHandler<HTMLSpanElement, MouseEvent>
>

export const Node = (props: {
	node: FSNode
	onClick: OnClickEvent
	onDoubleClick?: OnClickEvent
	children: JSX.Element
	draggedNode: FSNode | null
	fontSize: number
}) => {
	const { currentNode } = useFS()
	const getIcon = () => {
		if (!isFolder(props.node)) return ICONS.file
		return props.node.isOpen ? ICONS.folderOpen : ICONS.folder
	}
	const isCurrent = () => props.node === currentNode()

	return (
		<div class="relative">
			<Arrow
				node={props.node}
				onClick={props.onClick}
				fontSize={props.fontSize}
			/>
			<span
				class={cn(
					'cursor-pointer flex items-center rounded transition duration-200 ease-in-out',
					{
						'bg-gray-700/5': isCurrent(),
						'hover:bg-gray-900/5': !props.draggedNode,
						'hover:bg-gray-200/5': isDark() && !props.draggedNode,
						'bg-gray-100/5': isDark() && isCurrent()
					}
				)}
				style={{ 'font-size': `${props.fontSize}px` }}
				onClick={props.onClick}
				onDblClick={props.onDoubleClick}
			>
				<span class="mr-2 pl-1">
					<Dynamic component={getIcon()} />
				</span>
				<span>{props.children}</span>
			</span>
		</div>
	)
}
