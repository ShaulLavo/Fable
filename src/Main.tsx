import { createSignal, onMount, Show } from 'solid-js'
import { GlobalLoader } from './components/GlobalLoader'
import SearchPalette from './components/SearchBar'
import { registerGlobalHotkeys } from './utils/keymap'

import { useAppState } from './context/AppStateContext'
import { ContextMenu, useContextMenu } from './context/ContextMenu'
import { MainView } from './MainView'
// import './scripts/svgToCmp'
import { Toaster } from 'solid-sonner'
import { StatusBar } from './components/StatusBar'
import { ConfirmDialogHost } from './components/ui/ConfirmDialog'

export function Main() {
	const { hideContextMenu } = useContextMenu()
	const [, setStatusBarRef] = createSignal<HTMLDivElement>(null!)
	const { isStatusBar, toggleSideBar, setIsSearchBar, toggleTerminal } =
		useAppState()
	onMount(() => {
		registerGlobalHotkeys({ toggleSideBar, setIsSearchBar, toggleTerminal })
	})

	return (
		<div
			style={{
				height: window.innerHeight + 'px',
				overflow: 'hidden'
			}}
		>
			<MainView sidebarSide="left" />
			<SearchPalette />
			<ConfirmDialogHost />

			<ContextMenu onClose={hideContextMenu} />
			<GlobalLoader />
			<Toaster />
			<Show when={isStatusBar()}>
				<StatusBar ref={setStatusBarRef} />
			</Show>
		</div>
	)
}
