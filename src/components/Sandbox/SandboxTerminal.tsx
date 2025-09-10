import { onMount, onCleanup } from 'solid-js'
import { FitAddon } from '@xterm/addon-fit'
import '@xterm/xterm/css/xterm.css'
import { useTerminal } from '../../context/TerminalContext'
import { useWebContainer } from '../../context/WebContainerContext'
import type { Terminal } from '@xterm/xterm'

type Props = { class?: string }

let fitAddonInstance: FitAddon | null = null
const getFitAddon = (term: Terminal) => {
	if (!fitAddonInstance) {
		fitAddonInstance = new FitAddon()
		term.loadAddon(fitAddonInstance)
	}
	return fitAddonInstance
}

export function SandboxTerminal(props: Props) {
	let container!: HTMLDivElement
	const { term } = useTerminal()
	const { writeToShell } = useWebContainer()

	onMount(() => {
		if (!term.element) {
			term.open(container)
		} else if (term.element !== container) {
			container.appendChild(term.element)
		}
		const fitAddon = getFitAddon(term)
		// Initial fit
		queueMicrotask(() => fitAddon.fit())

		// Refit on container resize and window resize
		const ro = new ResizeObserver(() => fitAddon.fit())
		ro.observe(container)
		const onWindowResize = () => fitAddon.fit()
		window.addEventListener('resize', onWindowResize)

		const disposable = term.onData(writeToShell)
		onCleanup(() => {
			disposable.dispose()
			ro.disconnect()
			window.removeEventListener('resize', onWindowResize)
		})
	})

	return (
		<div
			ref={container}
			class={`w-full h-full min-h-[120px] rounded-md border border-neutral-700 overflow-hidden ${
				props.class ?? ''
			}`}
		/>
	)
}
