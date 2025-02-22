import Resizable from '@corvu/resizable'
import hotkeys from 'hotkeys-js'
import { Accessor, createSignal, For } from 'solid-js'
import { Editor } from './components/Editor/Editor'
import { FileSystem } from './components/FileSystem/FileSystem'
import { useOPFS } from './hooks/useOPFS'
import {
	horizontalPanelSize,
	mainSideBarPosition,
	setHorizontalPanelSize,
	toggleSideBar,
	updateEditorPanelSize
} from './stores/appStateStore'
import { setIsTsLoading } from './stores/editorStore'
import {
	currentBackground,
	currentColor,
	dragHandleColor
} from './stores/themeStore'
import { initTsWorker, TypeScriptWorker } from './utils/worker'

import {
	createElementSize,
	NullableSize
} from '@solid-primitives/resize-observer'
import { Portal } from 'solid-js/web'
import { ResizableHandle, ResizablePanel } from './components/ui/Resizable'
import { fontFamilyWithFallback } from './stores/fontStore'

export let worker: TypeScriptWorker = null!

export function Main() {
	const OPFS = useOPFS()
	const [editorContainer, setEditorContainer] = createSignal<HTMLDivElement>(
		null!
	)
	const [rightContainer, setRightContainer] = createSignal<HTMLDivElement>(
		null!
	)
	const [leftContainer, setLeftContainer] = createSignal<HTMLDivElement>(null!)

	const [isWorkerReady, setIsWorkerReady] = createSignal(false)
	initTsWorker(async tsWorker => {
		worker = tsWorker
		setIsWorkerReady(true)
	}, setIsTsLoading)
	const editorSize = createElementSize(editorContainer)

	hotkeys('ctrl+b', toggleSideBar)
	return (
		<div style={{ 'font-family': fontFamilyWithFallback() }}>
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
					color: currentColor()
				}}
				orientation="horizontal"
				accessKey="horizontal"
			>
				<ResizablePanel
					class="overflow-x-hidden border-none"
					initialSize={horizontalPanelSize()?.[0]}
					id="left-sidebar"
					ref={setLeftContainer}
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
						width: '0.5px'
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
						<EditorLayout
							editorSize={editorSize}
							isWorkerReady={isWorkerReady}
						/>
					</Portal>
				</ResizablePanel>
			</Resizable>
		</div>
	)
}
interface EditorLayoutProps {
	editorSize: Readonly<NullableSize>
	isWorkerReady: Accessor<boolean>
	extraKeyBindings?: Record<string, () => boolean>
}
const EditorLayout = (props: EditorLayoutProps) => {
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
				color: currentColor()
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
							{/* <EditorTabs index={index()} /> */}

							<Editor
								extraKeyBindings={props.extraKeyBindings}
								size={props.editorSize}
								isWorkerReady={props.isWorkerReady}
								index={index()}
							/>
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
