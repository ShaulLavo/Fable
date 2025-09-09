import hljs from 'highlight.js'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import { batch, createMemo, createSignal, onMount } from 'solid-js'
import { createStore } from 'solid-js/store'
import { Message } from './Chat'
import ChatApi from './ChatApi'
import { useFS } from '../../context/FsContext'
import { useCurrentFile } from '../../hooks/useCurrentFile'
import { useFileExtension } from '../../hooks/useFileExtension'

const marked = new Marked(
	markedHighlight({
		emptyLangClass: 'hljs',
		langPrefix: 'hljs language-',
		highlight(code, lang, info) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext'
			return hljs.highlight(code, { language }).value
		}
	})
)

export async function formatChatMessage(message: string): Promise<string> {
	return await marked.parse(message)
}
export function useChat(api: ChatApi) {
    const { openFiles, currentFile } = useFS()
    const { currentFileContent } = useCurrentFile(currentFile, openFiles)
    const { currentExtension } = useFileExtension()

	const [messages, setMessages] = createSignal<Message[]>([
		{ id: 1, content: 'Hello! How can I help you today?', role: 'assistant' }
	])

	const [formattedMessages, setFormattedMessages] = createStore<string[]>([])

	const setMessageAt = (message: Message, index: number) => {
		setMessages(prev => {
			const newMessages = [...prev]
			newMessages[index] = message
			return newMessages
		})
		formatChatMessage(message.content).then(formatted => {
			setFormattedMessages(prev => {
				const newFormattedMessages = [...prev]
				newFormattedMessages[index] = formatted
				return newFormattedMessages
			})
		})
	}

	const [isLoading, setIsLoading] = createSignal(true)
	const [inputValue, setInputValue] = createSignal('')
    const [includeTabContext, setIncludeTabContext] = createSignal(true)

    const currentTabLabel = createMemo(() => currentFile()?.path || '')

    const buildSystemContext = () => {
        const file = currentFile()
        if (!file) return ''
        const code = currentFileContent() || ''
        const max = 2000
        const snippet = code.length > max ? code.slice(-max) : code
        const ext = currentExtension()
        return `You are a helpful coding assistant. Use the following current tab as primary context for your response when relevant.\nCurrent tab: ${file.path}\nContent:\n\n\`\`\`${ext || ''}\n${snippet}\n\`\`\``
    }

	const initChat = async () => {
		await api.asyncInitChat((kind, text) => {
			if (!text.trim()) return
			setMessageAt(
				{
					id: 1,
					content: text,
					role: 'assistant'
				},
				0
			)
		})
		setIsLoading(false)
	}

	const sendMessage = async (message: string) => {
		if (!message.trim()) return
		const formatted = await formatChatMessage(message)
		const id = messages().length + 1

		const userMessage: Message = {
			id,
			content: formatted,
			role: 'user'
		}
		batch(() => {
			setMessageAt(userMessage, messages().length)
			setInputValue('')
		})

		const assistantMessageId = messages().length + 1
		setMessageAt(
			{
				id: assistantMessageId,
				content: '',
				role: 'assistant'
			},
			messages().length
		)

		await api.onGenerate(
			message,
			(kind, text, append) => {
				if (!text.trim()) return
				if (kind === 'right') return
				setMessageAt(
					{
						id: assistantMessageId,
						content: append ? text : text,
						role: 'assistant'
					},
					messages().length - 1
				)
			},
			console.log,
			includeTabContext() ? { system: buildSystemContext() } : undefined
		)
	}

	onMount(() => initChat())

	return {
		messages,
		inputValue,
		setInputValue,
		sendMessage,
		isLoading,
		formattedMessages,
		includeTabContext,
		setIncludeTabContext,
		currentTabLabel
	}
}
