import Resizable from '@corvu/resizable'
import { createEffect, createSignal, For, Show } from 'solid-js'
import { Editor } from './components/Editor/Editor'
import { FileSystem } from './components/FileSystem/FileSystem'
import {
	horizontalPanelSize,
	verticalPanelSize,
	isStatusBar,
	isZenMode,
	mainSideBarPosition,
	setHorizontalPanelSize,
	setVerticalPanelSize,
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
import { SandboxPreview } from './components/Sandbox/SandboxPreview'
import { Terminal } from './components/Terminal/Terminal'
import assert from 'assert'
import buffer from 'buffer'
import child_process from 'child_process'
import cluster from 'cluster'
import _console from 'console'
import constants from 'constants'
import crypto from 'crypto'
import dgram from 'dgram'
import dns from 'dns'
import domain from 'domain'
import events from 'events'
import fs from 'fs'
import http from 'http'
import https from 'https'
import http2 from 'http2'
import _module from 'module'
import net from 'net'
import os from 'os'
import path from 'path'
import punycode from 'punycode'
import _process from 'process'
import querystring from 'querystring'
import readline from 'readline'
import repl from 'repl'
import stream from 'stream'
// import _stream_duplex from '_stream_duplex'
// import _stream_passthrough from '_stream_passthrough'
// import _stream_readable from '_stream_readable'
// import _stream_transform from '_stream_transform'
// import _stream_writable from '_stream_writable'
import string_decoder from 'string_decoder'
// import sys from 'sys'
import timersPromises from 'timers/promises'
import timers from 'timers'
import tls from 'tls'
import tty from 'tty'
import url from 'url'
import util from 'util'
import vm from 'vm'
import zlib from 'zlib'
import nodeAssert from 'node:assert'

console.log('assert', assert)
console.log('buffer', buffer)
console.log('child_process', child_process)
console.log('cluster', cluster)
console.log('console', _console)
console.log('constants', constants)
console.log('crypto', crypto)
console.log('dgram', dgram)
console.log('dns', dns)
console.log('domain', domain)
console.log('events', events)
console.log('fs', fs)
console.log('http', http)
console.log('https', https)
console.log('http2', http2)
console.log('module', _module)
console.log('net', net)
console.log('os', os)
console.log('path', path)
console.log('punycode', punycode)
console.log('process', _process)
console.log('querystring', querystring)
console.log('readline', readline)
console.log('repl', repl)
console.log('stream', stream)
// console.log('_stream_duplex', _stream_duplex)
// console.log('_stream_passthrough', _stream_passthrough)
// console.log('_stream_readable', _stream_readable)
// console.log('_stream_transform', _stream_transform)
// console.log('_stream_writable', _stream_writable)
// console.log('sys', sys)
console.log('string_decoder', string_decoder)
console.log('timers/promises', timersPromises)
console.log('timers', timers)
console.log('tls', tls)
console.log('tty', tty)
console.log('url', url)
console.log('util', util)
console.log('vm', vm)
console.log('zlib', zlib)
console.log('global Buffer', Buffer)
console.log('global process', process)
console.log('node:assert', nodeAssert)
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

// Right workbench: left = editor layout, right = live preview iframe
const Workbench = () => {
	return (
		<Resizable orientation="horizontal" class="w-full h-full min-h-0">
			{/* <ResizablePanel class="min-h-0"> */}
			<EditorLayout />
			{/* </ResizablePanel> */}
			{/* <ResizableHandle style={{ 'background-color': dragHandleColor() }} /> */}
			{/* <ResizablePanel initialSize={0.35} class="min-h-0">
				<SandboxPreview src={serverUrl()} class="h-full" />
			</ResizablePanel> */}
		</Resizable>
	)
}
