import { JSX, ParentComponent } from 'solid-js'
import { Resizable, ResizableHandle, ResizablePanel } from '../ui/Resizable'
import { ChatPanelSize, setChatPanelSize } from '../../stores/appStateStore'
import {
	dragHandleColor,
	secondaryBackground,
	secondaryColor
} from '../../stores/themeStore'

export const ChatLayout: ParentComponent<{ chat: JSX.Element }> = props => {
	return (
		<div
			class="w-full h-full flex flex-1"
			style={{ background: secondaryBackground(), color: secondaryColor() }}
		>
			<Resizable
				sizes={ChatPanelSize()}
				onSizesChange={size => {
					if (size.length !== 2) return
					setChatPanelSize(size)
				}}
				class="w-full h-full flex"
				orientation="horizontal"
			>
				<ResizablePanel
					class="overflow-hidden border-none h-full"
					initialSize={ChatPanelSize()[0]}
					id="content-area"
				>
					{props.children}
				</ResizablePanel>

				<ResizableHandle
					style={{ 'background-color': dragHandleColor(), width: '2px' }}
				/>

				<ResizablePanel
					class="overflow-hidden h-full"
					initialSize={ChatPanelSize()[1]}
					id="chat-area"
				>
					{props.chat}
				</ResizablePanel>
			</Resizable>
		</div>
	)
}
