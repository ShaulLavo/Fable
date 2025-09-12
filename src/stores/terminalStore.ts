import { createSignal } from 'solid-js'
import type { Terminal as XTerm } from '@xterm/xterm'
import type { FitAddon } from '@xterm/addon-fit'
import type { TerminalController } from '../components/Terminal/controller'
import { createElementBounds } from '@solid-primitives/bounds'

export const [terminalContainer, setTerminalContainer] =
	createSignal<HTMLDivElement>()

export const [terminal, setTerminal] = createSignal<XTerm>()

export const [fitAddon, setFitAddon] = createSignal<FitAddon>()

export const [terminalController, setTerminalController] =
	createSignal<TerminalController | null>(null)

export const terminalBounds = createElementBounds(() => terminalContainer()!)
