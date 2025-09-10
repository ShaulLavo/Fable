import Resizable from '@corvu/resizable'
import { createEffect, createSignal, For, Show } from 'solid-js'
import { FileSystem } from './components/FileSystem/FileSystem'
import {
	horizontalPanelSize,
	verticalPanelSize,
	isStatusBar,
	mainSideBarPosition,
	setHorizontalPanelSize,
	setVerticalPanelSize
} from './stores/appStateStore'
import {
	currentBackground,
	dragHandleColor,
	secondaryColor
} from './stores/themeStore'

import { Dynamic, Portal } from 'solid-js/web'
import SearchPalette from './components/SearchBar'
import { StatusBar } from './components/StatusBar'
import { ResizableHandle, ResizablePanel } from './components/ui/Resizable'
import { fontFamilyWithFallback } from './stores/fontStore'
import { BASE_ICONS } from './stores/icons'
import { Tabs } from './components/ui/AlwaysRenderTabs'
import { lazy } from 'solid-js'
const Chat = lazy(() =>
	import('./components/Chat/Chat').then(m => ({ default: m.Chat }))
)
import { Terminal } from './components/Terminal/Terminal'
export interface MainProps {
	sidebarSide?: 'left' | 'right'
}

export function Main(props: MainProps) {
	const [editorContainer, setEditorContainer] = createSignal<HTMLDivElement>(
		null!
	)
	const [rightContainer, setRightContainer] = createSignal<HTMLDivElement>(
		null!
	)
	const [leftContainer, setLeftContainer] = createSignal<HTMLDivElement>(null!)
	const tabs = [
		{
			id: '1',
			icon: <Dynamic component={BASE_ICONS.file} />,
			label: 'EXPLORER',
			content: <FileSystem />
		},
		{
			id: '2',
			icon: <Dynamic class="h-full" component={BASE_ICONS.chat} />,
			label: 'CHAT',
			content: <Chat />
		}
	]
	return (
		<div style={{ 'font-family': fontFamilyWithFallback() }}>
			{/* Top: main content (left sidebar + right workbench), Bottom: terminal */}
			<Resizable
				sizes={verticalPanelSize()}
				onSizesChange={size => {
					if (size.length !== 2) return
					setVerticalPanelSize(size)
				}}
				class="w-full flex"
				style={{
					'background-color': currentBackground(),
					color: secondaryColor(),
					height: isStatusBar()
						? window.innerHeight - 28 + 'px'
						: window.innerHeight + 'px',
					overflow: 'hidden'
				}}
				orientation="vertical"
				accessKey="vertical"
			>
				<ResizablePanel class="min-h-0">
					<Resizable
						sizes={horizontalPanelSize()}
						onSizesChange={size => {
							if (size.length !== 2) return
							setHorizontalPanelSize(size)
						}}
						class="w-full  flex min-h-0"
						style={{
							'background-color': currentBackground(),
							color: secondaryColor(),
							height: '100%',
							overflow: 'hidden'
						}}
						orientation="horizontal"
						accessKey="horizontal"
					>
						<ResizablePanel
							class="overflow-x-hidden border-none h-full "
							initialSize={horizontalPanelSize()?.[0]}
							id="left-sidebar"
							ref={setLeftContainer}
						>
							<Portal
								mount={
									props.sidebarSide === 'left'
										? leftContainer()
										: rightContainer()
								}
								ref={ref => (ref.style.height = '100%')}
							>
								<Tabs tabs={tabs} />
							</Portal>
						</ResizablePanel>
						<ResizableHandle
							style={{ 'background-color': dragHandleColor(), width: '2px' }}
						/>
						<ResizablePanel
							class="overflow-hidden min-h-0"
							initialSize={horizontalPanelSize()?.[1]}
							id="right-sidebar"
							ref={setRightContainer}
						>
							<Portal
								mount={
									props.sidebarSide === 'left'
										? rightContainer()
										: leftContainer()
								}
							>
								<Workbench />
							</Portal>
						</ResizablePanel>
					</Resizable>
				</ResizablePanel>
				<ResizableHandle
					style={{ 'background-color': dragHandleColor(), height: '2px' }}
				/>
				<ResizablePanel class="min-h-[140px]">
					<Terminal class="h-full" />
				</ResizablePanel>
			</Resizable>
		</div>
	)
}
// Editor layout moved to components/Editor/EditorArea for code-splitting

// Right workbench: left = editor layout, right = live preview iframe
const EditorAreaLazy = lazy(() => import('./components/Editor/EditorArea'))

const Workbench = () => {
	const [mountEditor, setMountEditor] = createSignal(false)
	;(() => {
		if ('requestIdleCallback' in window) {
			;(window as any).requestIdleCallback(() => setMountEditor(true))
		} else {
			setTimeout(() => setMountEditor(true), 0)
		}
	})()
	return (
		<Show
			when={mountEditor()}
			fallback={<div class="p-2 text-sm opacity-80">Loading editor…</div>}
		>
			<EditorAreaLazy />
		</Show>
	)
}
