import { createGatewayProvider, type GatewayModelId } from '@ai-sdk/gateway'

export const DEFAULT_MODEL = 'gpt-5'

export const SUPPORTED_MODELS: GatewayModelId[] = [
  'amazon/nova-pro',
  'anthropic/claude-4-sonnet',
  'google/gemini-2.5-flash',
  'moonshotai/kimi-k2',
  'gpt-5',
  'xai/grok-3-fast'
]

function getVercelOidcToken(): string | undefined {
  // Vite exposes env vars prefixed with VITE_
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const viteEnvDirect = (import.meta as any)?.env?.VERCEL_OIDC_TOKEN as string | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const viteEnvPrefixed = (import.meta as any)?.env?.VITE_VERCEL_OIDC_TOKEN as string | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nodeEnv = (typeof process !== 'undefined' ? (process as any).env?.VERCEL_OIDC_TOKEN : undefined) as
    | string
    | undefined
  const ls = typeof localStorage !== 'undefined' ? localStorage.getItem('VERCEL_OIDC_TOKEN') ?? undefined : undefined
  const ss = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('VERCEL_OIDC_TOKEN') ?? undefined : undefined
  return viteEnvDirect ?? viteEnvPrefixed ?? nodeEnv ?? ss ?? ls
}

const gateway = createGatewayProvider({
  apiKey: getVercelOidcToken()
})

export function isGatewayConfigured(): boolean {
  return Boolean(getVercelOidcToken())
}

export async function getAvailableModels() {
  try {
    const response = await gateway.getAvailableModels()
    return response.models.map(model => ({ id: model.id, name: model.name }))
  } catch (err) {
    console.warn('Gateway model discovery failed; falling back to static list.', err)
    return SUPPORTED_MODELS.map(id => ({ id, name: id }))
  }
}

