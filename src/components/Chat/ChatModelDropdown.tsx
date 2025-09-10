import { For, Show, createSignal, onMount } from 'solid-js'
import { HoverCard } from '../HoverCard'
import { cn } from '../../utils/cn'
import { DEFAULT_MODEL, SUPPORTED_MODELS, getAvailableModels, isGatewayConfigured } from './Gateway'
import {
  localModelId,
  localModels,
  provider,
  setActiveLocalModel,
  setActiveProvider,
  setActiveVercelModel,
  vercelModelId
} from '../../stores/llmStore'
import { dragHandleColor, secondaryBackground } from '../../stores/themeStore'

export default function ChatModelDropdown() {
  const [loading, setLoading] = createSignal(false)
  const [vercelModels, setVercelModels] = createSignal<{ id: string; name: string }[]>([])
  const vercelReady = () => isGatewayConfigured()

  onMount(async () => {
    if (vercelReady()) {
      setLoading(true)
      try {
        const models = await getAvailableModels()
        setVercelModels(models)
      } finally {
        setLoading(false)
      }
    }
  })

  const trigger = (
    <button
      class={cn('text-xs px-2 py-1 border rounded hover:opacity-100 opacity-80')}
      style={{ 'border-color': dragHandleColor() }}
    >
      {provider()} · {provider() === 'local' ? localModelId() : vercelModelId() || DEFAULT_MODEL}
    </button>
  )

  const content = (
    <div class="min-w-[320px] max-w-[480px] text-xs">
      <div class="flex border-b" style={{ 'border-color': dragHandleColor() }}>
        <div class="px-2 py-1 font-semibold">Select Model</div>
      </div>
      <div class="p-2 grid grid-cols-2 gap-2" style={{ 'background-color': secondaryBackground() }}>
        <div>
          <div class="mb-1 opacity-80">Local</div>
          <div class="space-y-1">
            <For each={localModels()}>
              {(m) => (
                <div
                  class={cn(
                    'flex items-center justify-between px-2 py-1 rounded cursor-pointer border',
                    m.id === localModelId() ? 'border-blue-500' : 'border-transparent hover:border-blue-300'
                  )}
                  onClick={() => {
                    setActiveProvider('local')
                    setActiveLocalModel(m.id)
                  }}
                >
                  <div class="truncate pr-2" title={m.name}>{m.name}</div>
                  <span class="opacity-70">Use</span>
                </div>
              )}
            </For>
          </div>
        </div>
        <div>
          <div class="mb-1 opacity-80">Vercel</div>
          <Show when={vercelReady()} fallback={<div class="opacity-75">Not configured</div>}>
            <Show when={!loading()} fallback={<div class="opacity-75">Loading…</div>}>
              <div class="space-y-1">
                <For each={vercelModels().length ? vercelModels() : SUPPORTED_MODELS.map(id => ({ id, name: id }))}>
                  {(m) => (
                    <div
                      class={cn(
                        'flex items-center justify-between px-2 py-1 rounded cursor-pointer border',
                        m.id === vercelModelId() ? 'border-blue-500' : 'border-transparent hover:border-blue-300'
                      )}
                      onClick={() => {
                        setActiveProvider('vercel')
                        setActiveVercelModel(m.id)
                      }}
                    >
                      <div class="truncate pr-2" title={m.name}>{m.name}</div>
                      <span class="opacity-70">Use</span>
                    </div>
                  )}
                </For>
              </div>
            </Show>
          </Show>
        </div>
      </div>
      <div class="px-2 py-1 opacity-70 border-t" style={{ 'border-color': dragHandleColor() }}>
        Tip: set VERCEL_OIDC_TOKEN (or VITE_VERCEL_OIDC_TOKEN). You can also store it in localStorage/sessionStorage as VERCEL_OIDC_TOKEN for local dev.
      </div>
    </div>
  )

  return <HoverCard trigger={trigger} caredContent={content} hasArrow gap={8} />
}
