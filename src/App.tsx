import { createEffect } from 'solid-js'
import { initialTree } from './consts/tree'
import { FSProvider } from './context/FsContext'
import { Main } from './Main'
import { setCSSVariable } from './utils/dom'
import {
	baseFontSize,
	bracketColors,
	currentBackground,
	currentColor
} from './stores/themeStore'
import { fontFamilyWithFallback } from './stores/fontStore'
import { Sandpack } from './utils/Sandpack'

export default function App() {
	createEffect(() => {
		setCSSVariable('--font-family', fontFamilyWithFallback())

		setCSSVariable('--current-color', currentColor())
		setCSSVariable('--current-background', currentBackground())

		if (bracketColors()) {
			for (const [key, color] of Object.entries(bracketColors())) {
				setCSSVariable('--rainbow-bracket-' + key, color as string)
			}
		}
	})

	createEffect(() => {
		const fontSize = `${baseFontSize()}px`
		document.documentElement.style.fontSize = fontSize
	})

	return (
		<FSProvider initialTree={initialTree}>
			<Main />
		</FSProvider>
	)
}
