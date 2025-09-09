import {
	AppConfig,
	MLCEngine,
	MLCEngineInterface,
	modelLibURLPrefix,
	modelVersion
} from '@mlc-ai/web-llm'
import { createSignal, createMemo } from 'solid-js'
import { makePersisted } from '@solid-primitives/storage'
import { dualStorage } from '../utils/DualStorage'
import ChatApi, { DEFAULT_MODEL } from '../components/Chat/ChatApi'

// Centralized LLM config and singletons
export const appConfig: AppConfig = {
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

let engine: MLCEngineInterface | null = null
let api: ChatApi | null = null

export function getEngine(): MLCEngineInterface {
	if (!engine) {
		engine = new MLCEngine({ appConfig })
	}
	return engine
}

// Provider selection: 'local' (MLC) or 'vercel' (AI SDK Gateway)
export type LlmProvider = 'local' | 'vercel'

export const [provider, setProvider] = makePersisted(
	createSignal<LlmProvider>('local'),
	{ name: 'llmProvider', storage: dualStorage }
)

// Selected model ids for each provider
const defaultLocalModelId = appConfig.model_list[0].model_id
export const [localModelId, setLocalModelId] = makePersisted(
	createSignal<string>(defaultLocalModelId),
	{ name: 'localModelId', storage: dualStorage }
)

export const [vercelModelId, setVercelModelId] = makePersisted(
	createSignal<string>(DEFAULT_MODEL),
	{ name: 'vercelModelId', storage: dualStorage }
)

export const localModels = createMemo(() =>
	appConfig.model_list.map(m => ({ id: m.model_id, name: m.model_id }))
)

export function getChatApi(): ChatApi {
	if (!api) {
		// Initialize API based on current provider selection
		if (provider() === 'vercel') {
			api = new ChatApi(getEngine(), vercelModelId(), 'vercel')
		} else {
			api = new ChatApi(getEngine(), localModelId(), 'local')
		}
	}
	return api
}

// Update the active local model in the running engine-backed API
export function setActiveLocalModel(id: string) {
	setLocalModelId(id)
	// Recreate API to switch models
	api = new ChatApi(getEngine(), id, 'local')
}

export function setActiveVercelModel(id: string) {
	setVercelModelId(id)
	api = new ChatApi(getEngine(), id, 'vercel')
}

export function setActiveProvider(next: LlmProvider) {
	setProvider(next)
	if (next === 'vercel') {
		api = new ChatApi(getEngine(), vercelModelId(), 'vercel')
	} else {
		api = new ChatApi(getEngine(), localModelId(), 'local')
	}
}

// Helper to get a simple suggestion from the global LLM
export async function llmSuggest(prompt: string): Promise<string> {
	const chat = getChatApi()
	return chat.suggest(prompt)
}
