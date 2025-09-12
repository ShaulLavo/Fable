import { JSX, ParentComponent } from 'solid-js'
import { Resizable, ResizableHandle, ResizablePanel } from '../ui/Resizable'
import { ChatPanelSize, setChatPanelSize } from '../../stores/appStateStore'
import {
	currentBackground,
	dragHandleColor,
	secondaryBackground,
	secondaryColor
} from '../../stores/themeStore'

export const ChatLayout: ParentComponent<{
	chat: JSX.Element
	side?: 'left' | 'right'
}> = props => {
	const side = () => props.side ?? 'right'
	return (
		<div
			class="w-full h-full flex flex-1"
			style={{ background: secondaryBackground(), color: secondaryColor() }}
		>
			<Resizable
				sizes={ChatPanelSize()}
				onSizesChange={size => {
					if (size.length !== 2) return
					if (size[0] === 50) return
					setChatPanelSize(size)
				}}
				class="w-full h-full flex"
				orientation="horizontal"
			>
				{side() === 'left' ? (
					<>
						<ResizablePanel
							class="overflow-hidden border-none h-full"
							initialSize={ChatPanelSize()[1]}
							id="chat-area"
						>
							<div class="flex flex-col h-full min-h-0">{props.chat}</div>
						</ResizablePanel>
						<ResizableHandle
							style={{ 'background-color': currentBackground(), width: '2px' }}
						/>
						<ResizablePanel
							class="overflow-hidden h-full"
							initialSize={ChatPanelSize()[0]}
							id="content-area"
						>
							{props.children}
						</ResizablePanel>
					</>
				) : (
					<>
						<ResizablePanel
							class="overflow-hidden border-none h-full"
							initialSize={ChatPanelSize()[0]}
							id="content-area"
						>
							{props.children}
						</ResizablePanel>
						<ResizableHandle
							style={{ 'background-color': currentBackground(), width: '2px' }}
						/>
						<ResizablePanel
							class="overflow-hidden h-full"
							initialSize={ChatPanelSize()[1]}
							id="chat-area"
						>
							<div class="flex flex-col h-full min-h-0">{props.chat}</div>
						</ResizablePanel>
					</>
				)}
			</Resizable>
		</div>
	)
}
