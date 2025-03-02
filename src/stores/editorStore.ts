import { EditorState } from '@codemirror/state'
import { makePersisted } from '@solid-primitives/storage'
import { createSignal } from 'solid-js'
import { initTsWorker, TypeScriptWorker } from '../utils/worker'

export const [start, setStart] = createSignal(0)

export function getPaintTimes(): {
	firstPaint?: number
	firstContentfulPaint?: number
} {
	const entries = performance.getEntriesByType('paint')
	const firstPaint = entries.find(
		(entry: PerformanceEntry) => entry.name === 'first-paint'
	)?.startTime
	const firstContentfulPaint = entries.find(
		(entry: PerformanceEntry) => entry.name === 'first-contentful-paint'
	)?.startTime
	return { firstPaint, firstContentfulPaint }
}

export const editorRefs: HTMLDivElement[] = []
export const removeEditorRef = (ref: HTMLDivElement) => {
	const index = editorRefs.indexOf(ref)
	if (index > -1) {
		editorRefs.splice(index, 1)
	}
}

export const editorStates: Record<string, EditorState> = {}

export const [editorMounted, setEditorMounted] = createSignal(false)

export const [showLineNumber, setShowLineNumber] = makePersisted(
	createSignal(true),
	{
		name: 'showLineNumber'
	}
)
export const [showFoldGutter, setShowFoldGutter] = makePersisted(
	createSignal(true),
	{
		name: 'showFoldGutter'
	}
)

export const [currentLine, setCurrentLine] = createSignal(0)
export const [currentColumn, setCurrentColumn] = createSignal(0)
export const [currentSelection, setCurrentSelection] = createSignal([0, 0])
export const [editorHight, setEditorHight] = createSignal(window.innerHeight)
export const [isTsLoading, setIsTsLoading] = createSignal(false)
export const [isGitLoading, setIsGitLoading] = createSignal(false)
export const [isMiniMap, setIsMiniMap] = createSignal(true)

export let worker: TypeScriptWorker = null!
export const isWorkerReady = () => workerState()

const [workerState, setWorkerState] = createSignal(false)
initTsWorker(async tsWorker => {
	worker = tsWorker
	setWorkerState(true)
}, setIsTsLoading)
