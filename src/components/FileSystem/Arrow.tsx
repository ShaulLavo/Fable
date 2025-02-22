import { JSX } from 'solid-js'
import { FSNode, isFolder } from '../../types/FS.types'
import { ICONS } from '../../stores/icons'
import { currentBackground } from '../../stores/themeStore'

export const Arrow = (props: {
	node: FSNode
	onClick: JSX.EventHandlerUnion<
		HTMLSpanElement,
		MouseEvent,
		JSX.EventHandler<HTMLSpanElement, MouseEvent>
	>
	fontSize: number
}) => {
	if (props.node.path === '/' || !isFolder(props.node)) return null
	return (
		<span
			class="absolute top-1 cursor-pointer select-none  min-w-4"
			onClick={props.onClick}
			style={{
				'background-color': currentBackground(),
				left: `-${props.fontSize + 4}px`
			}}
		>
			{props.node.isOpen ? (
				<ICONS.chevronDown size={props.fontSize} />
			) : (
				<ICONS.chevronRight size={props.fontSize} />
			)}
		</span>
	)
}
