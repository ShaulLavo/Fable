import { createEffect } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { Chat } from './components/Chat/Chat'
import { GlobalLoader } from './components/GlobalLoader'
import { initialTree } from './consts/tree'
import { ContextMenu, useContextMenu } from './context/ContextMenu'
import { FSProvider, isMock } from './context/FsContext'
import { MockFsProvider } from './mocks/FsContext.mock'
import { fontFamilyWithFallback } from './stores/fontStore'
import {
	baseFontSize,
	bracketColors,
	currentBackground,
	currentColor
} from './stores/themeStore'
import { setCSSVariable } from './utils/dom'
import { Main } from './Main'
// import './scripts/svgToCmp'

export default function App() {
	const { hideContextMenu } = useContextMenu()

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
		<Dynamic
			component={isMock ? MockFsProvider : FSProvider}
			initialTree={initialTree}
		>
			<Chat>
				<Main />
			</Chat>
			<ContextMenu onClose={hideContextMenu} />
			<GlobalLoader />
		</Dynamic>
	)
}
