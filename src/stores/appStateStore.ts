import { makePersisted } from '@solid-primitives/storage'
import { batch, createEffect, createMemo, createSignal, on } from 'solid-js'
import { dualStorage } from '../utils/DualStorage'
import { runOncePerTick } from '../utils/utils'
import { setShowFoldGutter, setShowLineNumber } from './editorStore'
import { useLoading } from '../hooks/useLoading'

export const [rootName] = createSignal('root')

export const { isLoading: isGlobalLoading, setIsLoading: setIsGlobalLoading } =
	useLoading()
export const { isLoading: isFsLoading, setIsLoading: setIsFsLoading } =
	useLoading()

export const [mainSideBarPosition, setMainSideBarPosition] = makePersisted(
	createSignal<'left' | 'right'>('left'),
	{ name: 'mainSideBarPosition', storage: dualStorage }
)
if (mainSideBarPosition() !== 'left' && mainSideBarPosition() !== 'right') {
	setMainSideBarPosition('left')
}
export const [horizontalPanelSize, setHorizontalPanelSize] = makePersisted(
	createSignal<number[]>([0.25, 0.75]),
	{ name: 'horizontalPanelSize', storage: dualStorage }
)
export const [verticalPanelSize, setVerticalPanelSize] = makePersisted(
	createSignal<number[]>([0.7, 0.3]),
	{ name: 'verticalPanelSize', storage: dualStorage }
)
export const [editorPanelSizes, setEditorPanelSizes] = makePersisted(
	createSignal<number[][]>([]),
	{ name: 'editorPanelSizes', storage: dualStorage }
)
export const [ChatPanelSize, setChatPanelSize] = makePersisted(
	createSignal<number[]>([0.3, 0.7]),
	{ name: 'ChatPanelSize', storage: dualStorage }
)

export const updateEditorPanelSize = (index: number, newSize: number[]) => {
	setEditorPanelSizes(sizes => {
		const updatedSizes = [...sizes]
		updatedSizes[index] = newSize
		return updatedSizes
	})
}

export const [lastKnownLeftSideBarSize, setLastKnownLeftSideBarSize] =
	makePersisted(createSignal<[number, number]>([0.3, 0.7]), {
		name: 'lastKnownLeftSideBarSize',
		storage: dualStorage
	})

export const [lastKnownRightSideBarSize, setLastKnownRightSideBarSize] =
	makePersisted(createSignal<[number, number]>([0.7, 0.3]), {
		name: 'lastKnownRightSideBarSize',
		storage: dualStorage
	})
export const [currentEditorIndex, setCurrentEditorIndex] = createSignal(0)
export const [currentTerminalIndex, setCurrentTerminalIndex] = createSignal(0)
export const currentEditorId = () => 'editor-' + currentEditorIndex()
export const currentTerminalId = () => 'terminal-' + currentEditorIndex()

export const toggleSideBar = runOncePerTick(() => {
	const position = mainSideBarPosition()
	const currentSize = horizontalPanelSize()
	const isLeft = position === 'left'

	batch(() => {
		if (currentSize[isLeft ? 0 : 1] === 0) {
			const restoredSize = isLeft
				? lastKnownLeftSideBarSize()
				: lastKnownRightSideBarSize()

			if (restoredSize[isLeft ? 0 : 1] !== 0) {
				setHorizontalPanelSize(restoredSize)
			} else {
				setHorizontalPanelSize(isLeft ? [0.3, 0.7] : [0.7, 0.3])
			}
		} else {
			if (isLeft) {
				setLastKnownLeftSideBarSize(currentSize as [number, number])
			} else {
				setLastKnownRightSideBarSize(currentSize as [number, number])
			}

			setHorizontalPanelSize(isLeft ? [0, 1] : [1, 0])
		}
	})

	return true
})
export const setIsSideBar = (b: boolean) => {
	const position = mainSideBarPosition()
	const isLeft = position === 'left'
	const currentSize = horizontalPanelSize()

	batch(() => {
		if (b) {
			// Show the sidebar
			const restoredSize = isLeft
				? lastKnownLeftSideBarSize()
				: lastKnownRightSideBarSize()
			if (restoredSize[isLeft ? 0 : 1] !== 0) {
				setHorizontalPanelSize(restoredSize)
			} else {
				setHorizontalPanelSize(isLeft ? [0.3, 0.7] : [0.7, 0.3])
			}
		} else {
			// Hide the sidebar
			if (currentSize[isLeft ? 0 : 1] !== 0) {
				if (isLeft) {
					setLastKnownLeftSideBarSize(currentSize as [number, number])
				} else {
					setLastKnownRightSideBarSize(currentSize as [number, number])
				}
			}
			setHorizontalPanelSize(isLeft ? [0, 1] : [1, 0])
		}
	})

	return true
}
export const isSideBar = () => {
	const position = mainSideBarPosition()
	const isLeft = position === 'left'
	const currentSize = horizontalPanelSize()
	return currentSize[isLeft ? 0 : 1] !== 0
}

export const [isStatusBar, setIsStatusBar] = makePersisted(createSignal(true), {
	name: 'isStatusBar',
	storage: dualStorage
})
export const [isSearchBar, setIsSearchBar] = createSignal(false)

export const [isZenMode, setIsZenMode] = makePersisted(createSignal(false), {
	name: 'isZenMode',
	storage: dualStorage
})
//TODO: this is uber buggy
createEffect(
	on(
		isZenMode,
		zen => {
			batch(() => {
				setShowLineNumber(!zen)
				setShowFoldGutter(!zen)
				setIsSideBar(!zen)
				setIsStatusBar(!zen)
			})
		},
		{ defer: true }
	)
)
