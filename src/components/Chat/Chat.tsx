import { children, For, ParentComponent, Show } from 'solid-js'
import ChatApi from './ChatApi'
import { ChatInput } from './ChatInput'
import { ChatLayout } from './ChatLayout'
import { ChatMessage } from './ChatMessage'
import { useChat } from './useChat'
import {
	currentBackground,
	currentColor,
	dragHandleColor,
	secondaryBackground
} from '../../stores/themeStore'
import { BASE_ICONS } from '../../stores/icons'
import { Dynamic } from 'solid-js/web'
import { Loader } from '../GlobalLoader'
import { isStatusBar } from '../../stores/appStateStore'
import { cn } from '../../utils/cn'
import { getChatApi } from '../../stores/llmStore'
import { TabChip } from '../ui/TabChip'
import { useFS } from '../../context/FsContext'
import { getNode } from '../../service/FS.service'
import ChatModelDropdown from './ChatModelDropdown'
import { StickToBottom } from '../StickToBottom'

export type Message = {
	id: number
	content: string
	role: 'user' | 'assistant'
}
export const Chat = () => {
	const api = getChatApi()
	const { fs, setCurrentNode } = useFS()
	const {
		messages,
		inputValue,
		setInputValue,
		sendMessage,
		isLoading,
		formattedMessages,
		includeTabContext,
		setIncludeTabContext,
		currentTabLabel
	} = useChat(api)

	return (
		<div
			class={cn('flex flex-col h-full min-h-0 relative flex-1', {})}
			style={{ 'background-color': currentBackground() }}
		>
			<Loader
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				show={isLoading()}
			/>
			<div
				class="p-3 flex justify-between items-center border-b shrink-0"
				style={{ 'border-color': dragHandleColor() }}
			>
				{/* <h2 class="font-bold flex items-center">
					<Dynamic component={BASE_ICONS.chat} />
					&nbsp; Chat
				</h2> */}
				<ChatModelDropdown />
			</div>
			<StickToBottom class="flex-1 min-h-0" initial="instant">
				{ctx => (
					<StickToBottom.Content class="p-1 space-y-4">
						<For each={messages()}>
							{(message, i) => (
								<div>
									<ChatMessage
										message={message}
										formattedMessages={formattedMessages}
										index={i()}
									/>
								</div>
							)}
						</For>
					</StickToBottom.Content>
				)}
			</StickToBottom>
			{/* Context indicator uses the actual Tab UI */}
			<Show when={includeTabContext() && currentTabLabel()}>
				<div class="px-3 pb-1 flex items-center gap-2 text-xs opacity-90">
					<TabChip
						path={currentTabLabel()!}
						selected={false}
						onClose={() => setIncludeTabContext(false)}
						onClick={() => {
							const node = getNode(fs, currentTabLabel()!) ?? fs
							setCurrentNode(node)
						}}
					/>
				</div>
			</Show>

			<ChatInput
				value={inputValue()}
				onInput={e => setInputValue(e.target.value)}
				onSend={() => sendMessage(inputValue())}
			/>
		</div>
	)
}
