import Resizable from '@corvu/resizable'
import { createEffect, createSignal, For, Show } from 'solid-js'
import { Editor } from './components/Editor/Editor'
import { FileSystem } from './components/FileSystem/FileSystem'
import {
	horizontalPanelSize,
	isStatusBar,
	isZenMode,
	mainSideBarPosition,
	setHorizontalPanelSize,
	setIsZenMode,
	updateEditorPanelSize
} from './stores/appStateStore'
import {
	currentBackground,
	dragHandleColor,
	secondaryColor
} from './stores/themeStore'

import { file } from 'opfs-tools'
import { Dynamic, Portal } from 'solid-js/web'
import BinaryFileViewer from './components/BinaryFileViewer'
import { EditorNav } from './components/Editor/EditorNav'
import { EditorTabs } from './components/Editor/EditorTabs'
import ImageViewer from './components/ImageViewer'
import SearchPalette from './components/SearchBar'
import { StatusBar } from './components/StatusBar'
import { ResizableHandle, ResizablePanel } from './components/ui/Resizable'
import { useFS } from './context/FsContext'
import { useFileExtension } from './hooks/useFileExtension'
import { fontFamilyWithFallback } from './stores/fontStore'
import { BASE_ICONS } from './stores/icons'
import { cn } from './utils/cn'
import { Tabs } from './components/ui/AlwaysRenderTabs'
import { Chat } from './components/Chat/Chat'

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
			<Resizable
				sizes={horizontalPanelSize()}
				onSizesChange={size => {
					if (size.length !== 2) return
					setHorizontalPanelSize(size)
				}}
				class="w-full  flex "
				style={{
					'background-color': currentBackground(),
					color: secondaryColor(),
					height: isStatusBar()
						? window.innerHeight - 28 + 'px'
						: window.innerHeight + 'px',
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
							props.sidebarSide === 'left' ? leftContainer() : rightContainer()
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
					class="overflow-hidden"
					initialSize={horizontalPanelSize()?.[1]}
					id="right-sidebar"
					ref={setRightContainer}
				>
					<Portal
						mount={
							props.sidebarSide === 'left' ? rightContainer() : leftContainer()
						}
					>
						<EditorLayout />
					</Portal>
				</ResizablePanel>
			</Resizable>
		</div>
	)
}
interface EditorLayoutProps {
	extraKeyBindings?: Record<string, () => boolean>
}
const EditorLayout = (props: EditorLayoutProps) => {
	const { isBinary, isImage } = useFileExtension()
	const { currentFile } = useFS()
	const [fileBuffer, setFileBuffer] = createSignal<Uint8Array>()
	createEffect(async () => {
		if (isBinary() || isImage()) {
			setFileBuffer(
				new Uint8Array(await file(currentFile()?.path!).arrayBuffer())
			)
		}
	})
	const [editorPanels, setEditorPanels] = createSignal([
		{ id: 1, content: 'Editor 1' }
		// { id: 2, content: 'Editor 2' }
	])
	const [editorSizes, setEditorSizes] = createSignal([1, 1])

	const addEditorPanel = () => {
		const newPanelId = editorPanels().length + 1
		setEditorPanels([
			...editorPanels(),
			{ id: newPanelId, content: `Editor ${newPanelId}` }
		])
		const newSize = 1 / (editorPanels().length + 1)
		setEditorSizes([...Array(editorPanels().length + 1).fill(newSize)])
	}

	return (
		<Resizable
			class="w-full"
			onSizesChange={newSizes => {
				if (newSizes.length === editorPanels().length) {
					setEditorSizes(newSizes)
					updateEditorPanelSize(0, newSizes)
				}
			}}
			style={{
				'background-color': currentBackground(),
				color: secondaryColor()
			}}
			orientation="horizontal"
			accessKey="horizontal"
		>
			<For each={editorPanels()}>
				{(panel, index) => (
					<>
						<ResizablePanel
							class="overflow-hidden"
							initialSize={editorSizes()[index()]}
							// initialSize={editorSizes()[index()]}
						>
							<div class="flex flex-1 justify-between">
								<EditorTabs index={index()} />
								<div
									class="flex items-center px-1"
									style={{
										background: currentBackground()
									}}
								>
									<button onClick={() => setIsZenMode(!isZenMode())}>
										<Dynamic component={BASE_ICONS.zen} />
									</button>
								</div>
							</div>

							<EditorNav index={index()} />

							<Show when={isBinary()}>
								<BinaryFileViewer fileData={fileBuffer()} />
							</Show>
							<Show when={isImage()}>
								<ImageViewer fileData={fileBuffer()} />
							</Show>

							<div class={cn({ hidden: isBinary() })}>
								<Editor index={index()} />
							</div>
						</ResizablePanel>
						{index() < editorPanels().length - 1 && (
							<ResizableHandle
								style={{ 'background-color': dragHandleColor() }}
							/>
						)}
					</>
				)}
			</For>
		</Resizable>
	)
}
