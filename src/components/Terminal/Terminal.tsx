import { createEffect, onCleanup, onMount } from 'solid-js'
import '@xterm/xterm/css/xterm.css'
import { xTermTheme } from '../../stores/themeStore'
import { fontFamilyWithFallback } from '../../stores/fontStore'
import { Terminal as XTerm } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'
import { TerminalController } from './controller'

type Props = { class?: string }

export function Terminal(props: Props) {
	let container!: HTMLDivElement
	let term: XTerm
	let fit: FitAddon
	let controller: TerminalController | null = null

	onMount(async () => {
		term = new XTerm({
			fontFamily: fontFamilyWithFallback(),
			cursorBlink: true,
			allowProposedApi: true,
			scrollback: 5000,
			theme: xTermTheme()
		})
		fit = new FitAddon()
		term.loadAddon(fit)
		term.open(container)
		queueMicrotask(() => fit.fit())
		const ro = new ResizeObserver(() => fit.fit())
		ro.observe(container)

		controller = new TerminalController(term)
		const disp = term.onData(d => controller!.handleData(d))
		controller.intro()

		onCleanup(() => {
			disp.dispose()
			ro.disconnect()
			term.dispose()
			controller = null
		})
	})

	createEffect(() => {
		try {
			term && (term.options.theme = xTermTheme())
		} catch {}
	})
	createEffect(() => {
		try {
			term && (term.options.fontFamily = fontFamilyWithFallback())
		} catch {}
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
