import { Toaster } from 'solid-sonner'
import { MainView } from './MainView'
import { GlobalLoader } from './components/GlobalLoader'
import SearchPalette from './components/SearchBar'
import { StatusBar } from './components/StatusBar'
import { ConfirmDialogHost } from './components/ui/ConfirmDialog'
import { ContextMenu } from './context/ContextMenu'
import { Providers } from './context/Providers'

//TODO PERFORMANCE :
// TODO lazy load AI + move it to worker
// TODO get rid of highlight js
// TODO icons ? maybe lazy them 2?

export default function App() {
	return (
		<Providers>
			<div
				style={{
					height: window.innerHeight + 'px',
					overflow: 'hidden'
				}}
			>
				<MainView sidebarSide="left" />
				<SearchPalette />
				<ConfirmDialogHost />
				<ContextMenu />
				<GlobalLoader />
				<Toaster />
				<StatusBar />
			</div>
		</Providers>
	)
}
