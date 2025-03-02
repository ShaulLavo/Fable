import {
	AppConfig,
	MLCEngine,
	modelLibURLPrefix,
	modelVersion
} from '@mlc-ai/web-llm'
import { For, ParentComponent, Show } from 'solid-js'
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

export type Message = {
	id: number
	content: string
	role: 'user' | 'assistant'
}

const appConfig: AppConfig = {
	model_list: [
		{
			model: 'https://huggingface.co/mlc-ai/Qwen2.5-1.5B-Instruct-q4f32_1-MLC',
			model_id: 'Qwen2.5-1.5B-Instruct-q4f32_1-MLC',
			model_lib:
				modelLibURLPrefix +
				modelVersion +
				'/Qwen2-1.5B-Instruct-q4f32_1-ctx4k_cs1k-webgpu.wasm'
		}
	]
}
export const Chat: ParentComponent = props => {
	const api = new ChatApi(
		new MLCEngine({ appConfig }),
		appConfig.model_list[0].model_id
	)
	const {
		messages,
		inputValue,
		setInputValue,
		sendMessage,
		isLoading,
		formattedMessages
	} = useChat(api)

	const chatContent = (
		<div
			class={cn('flex flex-col h-full relative', {
				'pb-6': isStatusBar()
			})}
			style={{
				'background-color': currentBackground()
			}}
		>
			<Loader
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				show={isLoading()}
			/>
			<div
				class="p-3 flex justify-between items-center border-b "
				style={{
					'border-color': dragHandleColor()
				}}
			>
				<h2 class="font-bold flex items-center">
					<Dynamic component={BASE_ICONS.chat} />
					&nbsp; Chat
				</h2>
			</div>
			<div class="flex-1 overflow-y-auto p-1 space-y-4">
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
			</div>
			<ChatInput
				value={inputValue()}
				onInput={e => setInputValue(e.target.value)}
				onSend={() => sendMessage(inputValue())}
			/>
		</div>
	)

	return <ChatLayout chat={chatContent}>{props.children}</ChatLayout>
}
