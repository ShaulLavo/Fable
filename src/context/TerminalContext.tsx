import { createContext, createEffect, useContext, type JSX } from 'solid-js'
import { Terminal as XTerm } from '@xterm/xterm'
import '@xterm/xterm/css/xterm.css'
import { xTermTheme } from '../stores/themeStore'

type TerminalContextValue = {
  term: XTerm
}

const baseTheme = {
  foreground: '#F8F8F8',
  background: '#2D2E2C',
  selection: '#5DA5D533',
  black: '#1E1E1D',
  brightBlack: '#262625',
  red: '#CE5C5C',
  brightRed: '#FF7272',
  green: '#5BCC5B',
  brightGreen: '#72FF72',
  yellow: '#CCCC5B',
  brightYellow: '#FFFF72',
  blue: '#5D5DD3',
  brightBlue: '#7279FF',
  magenta: '#BC5ED1',
  brightMagenta: '#E572FF',
  cyan: '#5DA5D5',
  brightCyan: '#72F0FF',
  white: '#F8F8F8',
  brightWhite: '#FFFFFF'
}

const TerminalContext = createContext<TerminalContextValue>()

// Create a single terminal instance at module scope so it persists
const termSingleton = new XTerm({
  fontFamily: '"Cascadia Code", Menlo, monospace',
  theme: baseTheme,
  cursorBlink: true,
  allowProposedApi: true,
  scrollback: 5000,
})

export function TerminalProvider(props: { children: JSX.Element }) {
  // Sync xterm theme with current app theme
  createEffect(() => {
    try {
      // Apply the current xterm theme from the theme store
      termSingleton.options.theme = xTermTheme()
    } catch (e) {
      // no-op if terminal not ready
    }
  })
  return (
    <TerminalContext.Provider value={{ term: termSingleton }}>
      {props.children}
    </TerminalContext.Provider>
  )
}

export function useTerminal() {
  const ctx = useContext(TerminalContext)
  if (!ctx) throw new Error('useTerminal must be used within TerminalProvider')
  return ctx
}
