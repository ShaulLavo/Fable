import type { JSX } from 'solid-js'

import { initialTree } from '../consts/tree'
import type { Folder } from '../types/FS.types'
import { AppStateProvider } from './AppStateContext'
import { FSProvider } from './FsContext'
import { TerminalProvider } from './TerminalContext'
import { FontProvider } from './FontContext'
import { LlmProvider } from './LlmContext'
import { ThemeProvider } from './ThemeContext'

// Single entry-point for all app providers + a coordinating reducer
export function Providers(props: {
	children: JSX.Element
	initialFs?: Folder
}) {
	return (
		<AppStateProvider>
			<FontProvider>
				<ThemeProvider>
					<FSProvider initialTree={props.initialFs ?? initialTree}>
						<LlmProvider>
							<TerminalProvider>{props.children}</TerminalProvider>
						</LlmProvider>
					</FSProvider>
				</ThemeProvider>
			</FontProvider>
		</AppStateProvider>
	)
}
