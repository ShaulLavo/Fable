import { createSignal, onMount } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { BASE_ICONS } from '../../stores/icons'
import { Button } from '../ui/Button'
import {
	currentBackground,
	currentColor,
	dragHandleColor,
	secondaryBackground,
	secondaryColor
} from '../../stores/themeStore'

interface ChatInputProps {
	value: string
	onInput: (
		e: InputEvent & {
			currentTarget: HTMLTextAreaElement
			target: HTMLTextAreaElement
		}
	) => void
	onSend: () => void
}

export function ChatInput(props: ChatInputProps) {
	const [isFocused, setIsFocused] = createSignal(false)
	let inputRef: HTMLTextAreaElement = null!

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			props.onSend()
		}
	}

	onMount(() => {
		if (inputRef) {
			inputRef.focus()
		}
	})

	return (
		<div
			class="border-t p-3 shrink-0"
			style={{
				'border-color': currentBackground()
			}}
		>
			<div
				class={`flex items-center rounded-lg border`}
				style={{
					'border-color': isFocused() ? currentColor() : currentBackground()
				}}
			>
				<textarea
					ref={inputRef}
					value={props.value}
					onInput={props.onInput}
					onKeyDown={handleKeyDown}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					placeholder="Type a message..."
					class="flex-1 p-2 bg-transparent outline-none resize-none min-h-[40px]"
					rows="1"
				/>
				<Button
					onClick={props.onSend}
					disabled={!props.value.trim()}
					class={`p-2 rounded-r-lg ${
						props.value.trim() ? '' : ' cursor-not-allowed'
					}`}
					style={{
						color: props.value.trim() ? currentColor() : secondaryColor()
					}}
				>
					<Dynamic component={BASE_ICONS.send} />
				</Button>
			</div>
		</div>
	)
}
