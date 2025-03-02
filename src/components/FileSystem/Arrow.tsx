import { JSX } from 'solid-js'
import { FSNode, isFolder } from '../../types/FS.types'
import { BASE_ICONS } from '../../stores/icons'
import { secondaryBackground } from '../../stores/themeStore'
import { Dynamic } from 'solid-js/web'

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
				'background-color': secondaryBackground(),
				left: `-${props.fontSize + 4}px`
			}}
		>
			{props.node.isOpen ? (
				<Dynamic component={BASE_ICONS.chevronDown} size={props.fontSize} />
			) : (
				<Dynamic component={BASE_ICONS.chevronRight} size={props.fontSize} />
			)}
		</span>
	)
}
