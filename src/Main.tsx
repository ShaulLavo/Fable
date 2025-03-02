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
import SearchPalette from './components/SeatchBar'
import { StatusBar } from './components/StatusBar'
import { ResizableHandle, ResizablePanel } from './components/ui/Resizable'
import { useFS } from './context/FsContext'
import { useFileExtension } from './hooks/useFileExtension'
import { fontFamilyWithFallback } from './stores/fontStore'
import { BASE_ICONS } from './stores/icons'
import { cn } from './utils/cn'

export function Main() {
	const [editorContainer, setEditorContainer] = createSignal<HTMLDivElement>(
		null!
	)
	const [rightContainer, setRightContainer] = createSignal<HTMLDivElement>(
		null!
	)
	const [leftContainer, setLeftContainer] = createSignal<HTMLDivElement>(null!)
	const [statusBarRef, setStatusBarRef] = createSignal<HTMLDivElement>(null!)

	return (
		<div style={{ 'font-family': fontFamilyWithFallback() }}>
			<SearchPalette />
			<Resizable
				sizes={horizontalPanelSize()}
				onSizesChange={size => {
					if (size.length !== 2) return
					if (size[0] === 0.5 && size[1] === 0.5) return
					setHorizontalPanelSize(size)
				}}
				class="w-full flex"
				style={{
					'background-color': currentBackground(),
					color: secondaryColor()
				}}
				orientation="horizontal"
				accessKey="horizontal"
			>
				<ResizablePanel
					class="overflow-x-hidden border-none h-full"
					initialSize={horizontalPanelSize()?.[0]}
					id="left-sidebar"
					ref={setLeftContainer}
					collapsible
				>
					<Portal
						mount={
							mainSideBarPosition() === 'left'
								? leftContainer()
								: rightContainer()
						}
					>
						<FileSystem />
					</Portal>
				</ResizablePanel>
				<ResizableHandle
					style={{
						'background-color': dragHandleColor(),
						width: '2px'
					}}
				/>
				<ResizablePanel
					class="overflow-hidden h-lvh"
					initialSize={horizontalPanelSize()?.[1]}
					id="right-sidebar"
					style={{ height: '100vh' }}
					ref={setRightContainer}
				>
					<Portal
						mount={
							mainSideBarPosition() === 'left'
								? rightContainer()
								: leftContainer()
						}
					>
						<EditorLayout />
					</Portal>
				</ResizablePanel>
			</Resizable>

			<Show when={isStatusBar()}>
				<StatusBar ref={setStatusBarRef} />
			</Show>
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
								<div class="flex items-center pr-1">
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
