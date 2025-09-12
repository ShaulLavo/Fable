import Resizable from '@corvu/resizable'
import { createEffect, createSignal, For, Show } from 'solid-js'
import { FileSystem } from './components/FileSystem/FileSystem'
import {
	horizontalPanelSize,
	verticalPanelSize,
	isStatusBar,
	mainSideBarPosition,
	setHorizontalPanelSize,
	setVerticalPanelSize,
	isTerminal
} from './stores/appStateStore'
import {
	currentBackground,
	dragHandleColor,
	secondaryColor
} from './stores/themeStore'

import { Dynamic } from 'solid-js/web'
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
import EditorArea from './components/Editor/EditorArea'
export interface MainProps {
    sidebarSide?: 'left' | 'right'
}

export function Main(props: MainProps) {
    const [editorContainer, setEditorContainer] = createSignal<HTMLDivElement>(
        null!
    )
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
            {/* Left/Right: sidebar vs workbench; terminal sits only under workbench */}
            <Resizable
                sizes={horizontalPanelSize()}
                onSizesChange={size => {
                    if (size.length !== 2) return
                    setHorizontalPanelSize(size)
                }}
                class="w-full flex min-h-0"
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
                {/* Left panel */}
                <ResizablePanel
                    class="overflow-x-hidden border-none h-full"
                    initialSize={horizontalPanelSize()?.[0]}
                    id="left-panel"
                >
                    {props.sidebarSide === 'left' ? (
                        <Tabs tabs={tabs} />
                    ) : (
                        <RightWorkbench />
                    )}
                </ResizablePanel>

                <ResizableHandle
                    style={{ 'background-color': currentBackground(), width: '2px' }}
                />

                {/* Right panel */}
                <ResizablePanel
                    class="overflow-hidden min-h-0"
                    initialSize={horizontalPanelSize()?.[1]}
                    id="right-panel"
                >
                    {props.sidebarSide === 'left' ? (
                        <RightWorkbench />
                    ) : (
                        <Tabs tabs={tabs} />
                    )}
                </ResizablePanel>
            </Resizable>
        </div>
    )
}
// Editor layout moved to components/Editor/EditorArea for code-splitting

const Workbench = () => {
	const [mountEditor, setMountEditor] = createSignal(false)
	;(() => {
		if ('requestIdleCallback' in window) {
			window.requestIdleCallback(() => setMountEditor(true))
		} else {
			setTimeout(() => setMountEditor(true), 0)
		}
	})()
	return (
		<Show
			when={mountEditor()}
			fallback={<div class="p-2 text-sm opacity-80">Loading editor…</div>}
		>
			<EditorArea />
		</Show>
	)
}

const RightWorkbench = () => {
    const showTerminal = () => isTerminal()
    return (
        <Show when={showTerminal()} fallback={<Workbench />}>
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
                height: '100%',
                overflow: 'hidden'
            }}
            orientation="vertical"
            accessKey="vertical"
        >
            <ResizablePanel class="min-h-0">
                <Workbench />
            </ResizablePanel>
            <ResizableHandle
                style={{ 'background-color': currentBackground(), height: '2px' }}
            />
            <ResizablePanel class="min-h-[140px]">
                <Terminal class="h-full" />
            </ResizablePanel>
        </Resizable>
        </Show>
    )
}
