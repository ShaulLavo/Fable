import { createElementBounds } from '@solid-primitives/bounds'
import { FitAddon } from '@xterm/addon-fit'
import { Terminal as XTerm } from '@xterm/xterm'
import '@xterm/xterm/css/xterm.css'
import { createEffect, onCleanup, onMount } from 'solid-js'
import { fontFamilyWithFallback } from '../../stores/fontStore'
import {
	setFitAddon,
	setTerminal,
	setTerminalContainer,
	setTerminalController,
	terminal,
	terminalContainer
} from '../../stores/terminalStore'
import { xTermTheme } from '../../stores/themeStore'
import { TerminalController } from './controller'

type Props = { class?: string }

export function Terminal(props: Props) {
	onMount(async () => {
		const term = new XTerm({
			fontFamily: fontFamilyWithFallback(),
			cursorBlink: true,
			allowProposedApi: true,
			scrollback: 5000,
			theme: xTermTheme()
		})
		setTerminal(term)
		const fit = new FitAddon()
		setFitAddon(fit)
		term.loadAddon(fit)
		term.open(terminalContainer()!)
		queueMicrotask(() => fit.fit())
		const ro = new ResizeObserver(() => fit.fit())
		ro.observe(terminalContainer()!)

		const controller = new TerminalController(term)
		setTerminalController(controller)
		const disp = term.onData(d => controller!.handleData(d))
		controller.intro()

		onCleanup(() => {
			disp.dispose()
			ro.disconnect()
			term.dispose()
			setTerminalController(null)
		})
	})

	createEffect(() => {
		try {
			terminal() && (terminal()!.options.theme = xTermTheme())
		} catch {}
	})
	createEffect(() => {
		try {
			terminal() && (terminal()!.options.fontFamily = fontFamilyWithFallback())
		} catch {}
	})

	return (
		<div
			ref={setTerminalContainer}
			class={`w-full h-full min-h-[120px] rounded-md  overflow-hidden ${
				props.class ?? ''
			}`}
		/>
	)
}
