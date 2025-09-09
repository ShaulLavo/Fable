import { AppConfig, MLCEngine, MLCEngineInterface, modelLibURLPrefix, modelVersion } from '@mlc-ai/web-llm'
import ChatApi from '../components/Chat/ChatApi'

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

export function getChatApi(): ChatApi {
  if (!api) {
    const modelId = appConfig.model_list[0].model_id
    api = new ChatApi(getEngine(), modelId)
  }
  return api
}

// Helper to get a simple suggestion from the global LLM
export async function llmSuggest(prompt: string): Promise<string> {
  const chat = getChatApi()
  return chat.suggest(prompt)
}

