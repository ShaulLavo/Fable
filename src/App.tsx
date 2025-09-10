import { createEffect, createSignal, Show, lazy, onMount } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { GlobalLoader } from './components/GlobalLoader'
import SearchPalette from './components/SearchBar'

import { initialTree } from './consts/tree'
import { ContextMenu, useContextMenu } from './context/ContextMenu'
import { FSProvider, isMock } from './context/FsContext'
import { Main } from './Main'
import { MockFsProvider } from './mocks/FsContext.mock'
import { isStatusBar } from './stores/appStateStore'
import { fontFamilyWithFallback } from './stores/fontStore'
import {
	baseFontSize,
	bracketColors,
	currentBackground,
	currentColor
} from './stores/themeStore'
import { setCSSVariable } from './utils/dom'
// import './scripts/svgToCmp'
import { Toaster } from 'solid-sonner'
import { ConfirmDialogHost } from './components/ui/ConfirmDialog'
import { StatusBar } from './components/StatusBar'

//TODO PERFORMANCE :
// TODO lazy load AI + move it to worker
// TODO get rid of highlight js
// TODO icons ? maybe lazy them 2?

export default function App() {
	const { hideContextMenu } = useContextMenu()
	const [statusBarRef, setStatusBarRef] = createSignal<HTMLDivElement>(null!)

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
			<div
				style={{
					height: isStatusBar()
						? window.innerHeight - 28 + 'px'
						: window.innerHeight + 'px',
					overflow: 'hidden'
				}}
			>
				<Main sidebarSide="left" />
				<SearchPalette />
				<ConfirmDialogHost />

				<ContextMenu onClose={hideContextMenu} />
				<GlobalLoader />
				<Toaster />
			</div>
			<Show when={isStatusBar()}>
				<StatusBar ref={setStatusBarRef} />
			</Show>
		</Dynamic>
	)
}
