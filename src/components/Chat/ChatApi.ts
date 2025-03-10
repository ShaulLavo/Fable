import {
	MLCEngine,
	MLCEngineInterface,
	ChatCompletionMessageParam,
	CompletionUsage
} from '@mlc-ai/web-llm'

export default class ChatApi {
	private engine: MLCEngineInterface
	private selectedModel: string
	private chatLoaded = false
	private requestInProgress = false
	private chatRequestChain: Promise<void> = Promise.resolve()
	private chatHistory: ChatCompletionMessageParam[] = []

	constructor(
		engine: MLCEngineInterface,
		selectedModel: string = 'Llama-3.1-8B-Instruct-q4f32_1-MLC'
	) {
		this.engine = engine
		this.selectedModel = selectedModel
	}

	async onGenerate(
		prompt: string,
		messageUpdate: (kind: string, text: string, append: boolean) => void,
		setRuntimeStats: (runtimeStats: string) => void
	) {
		if (this.requestInProgress) {
			return
		}
		this.pushTask(async () => {
			await this.asyncGenerate(prompt, messageUpdate, setRuntimeStats)
		})
		return this.chatRequestChain
	}

	async onReset(clearMessages: () => void) {
		if (this.requestInProgress) {
			this.engine.interruptGenerate()
		}
		this.chatHistory = []
		this.pushTask(async () => {
			await this.engine.resetChat()
			clearMessages()
		})
		return this.chatRequestChain
	}

	async asyncInitChat(
		messageUpdate: (kind: string, text: string, append: boolean) => void
	) {
		if (this.chatLoaded) return
		this.requestInProgress = true
		messageUpdate('init', '', true)
		const initProgressCallback = (report: { text: string }) => {
			messageUpdate('init', report.text, false)
		}
		this.engine.setInitProgressCallback(initProgressCallback)

		console.log(`Initializing model: ${this.selectedModel}`)

		try {
			await this.engine.reload(this.selectedModel)
		} catch (err: unknown) {
			messageUpdate('error', 'Init error, ' + (err?.toString() ?? ''), true)
			console.log(err)
			await this.unloadChat()
			this.requestInProgress = false
			return
		}
		this.requestInProgress = false
		this.chatLoaded = true
	}

	private async unloadChat() {
		await this.engine.unload()
		this.chatLoaded = false
	}

	private pushTask(task: () => Promise<void>) {
		const lastEvent = this.chatRequestChain
		this.chatRequestChain = lastEvent.then(task)
	}

	private async asyncGenerate(
		prompt: string,
		messageUpdate: (kind: string, text: string, append: boolean) => void,
		setRuntimeStats: (runtimeStats: string) => void
	) {
		await this.asyncInitChat(messageUpdate)
		this.requestInProgress = true

		if (prompt === '') {
			this.requestInProgress = false
			return
		}

		messageUpdate('right', prompt, true)
		messageUpdate('left', '', true)

		try {
			this.chatHistory.push({ role: 'user', content: prompt })
			let curMessage = ''
			let usage: CompletionUsage | undefined = undefined
			const completion = await this.engine.chat.completions.create({
				stream: true,
				messages: this.chatHistory,
				stream_options: { include_usage: true }
			})
			for await (const chunk of completion) {
				const curDelta = chunk.choices[0]?.delta.content
				if (curDelta) {
					curMessage += curDelta
				}
				messageUpdate('left', curMessage, false)
				if (chunk.usage) {
					usage = chunk.usage
				}
			}
			const output = await this.engine.getMessage()
			this.chatHistory.push({ role: 'assistant', content: output })
			messageUpdate('left', output, false)
			if (usage) {
				const runtimeStats =
					`prompt_tokens: ${usage.prompt_tokens}, ` +
					`completion_tokens: ${usage.completion_tokens}, ` +
					`prefill: ${usage.extra.prefill_tokens_per_s.toFixed(4)} tokens/sec, ` +
					`decoding: ${usage.extra.decode_tokens_per_s.toFixed(4)} tokens/sec`
				setRuntimeStats(runtimeStats)
			}
		} catch (err: unknown) {
			messageUpdate('error', 'Generate error, ' + (err?.toString() ?? ''), true)
			console.log(err)
			await this.unloadChat()
		}
		this.requestInProgress = false
	}
}
