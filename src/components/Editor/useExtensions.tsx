import { closeBrackets } from '@codemirror/autocomplete'
import { history } from '@codemirror/commands'
import { javascript } from '@codemirror/lang-javascript'
import {
	bracketMatching,
	foldGutter,
	indentOnInput
} from '@codemirror/language'
import { highlightSelectionMatches } from '@codemirror/search'
import { EditorState, Extension } from '@codemirror/state'
import {
	EditorView,
	KeyBinding,
	ViewUpdate,
	drawSelection,
	highlightActiveLine,
	highlightActiveLineGutter,
	highlightSpecialChars,
	keymap,
	lineNumbers,
	rectangularSelection
} from '@codemirror/view'
import { indentationMarkers } from '@replit/codemirror-indentation-markers'
import { showMinimap } from '@replit/codemirror-minimap'
import {
	tsFacetWorker,
	tsHoverWorker,
	tsLinterWorker,
	tsSyncWorker
} from '@valtown/codemirror-ts'
import { Accessor, createEffect, on } from 'solid-js'
import { useFS } from '../../context/FsContext'
import { createCompartmentExtension } from '../../hooks/createCompartmentExtension'
import { useFileExtension } from '../../hooks/useFileExtension'
import {
	editorRefs,
	isMiniMap,
	isWorkerReady,
	setEditorHight,
	setIsTsLoading,
	showFoldGutter,
	showLineNumber,
	worker
} from '../../stores/editorStore'
import {
	currentBackground,
	currentColor,
	currentTheme
} from '../../stores/themeStore'
import { extensionMap } from '../../utils/format'

import { css } from '@codemirror/lang-css'
import { html } from '@codemirror/lang-html'
import { json } from '@codemirror/lang-json'
import { python } from '@codemirror/lang-python'

//@ts-ignore no types :(
import rainbowBrackets from 'rainbowbrackets'
import { Dynamic, render } from 'solid-js/web'
import { createInnerZoom } from '../../hooks/createInnerZoom'
import { useCurrentFile } from '../../hooks/useCurrentFile'
import { useOPFS } from '../../hooks/useOPFS'
import { setCurrentEditorIndex } from '../../stores/appStateStore'
import { BASE_ICONS } from '../../stores/icons'
import { createColorCycler } from '../../utils/color'
import { autoHide } from '../../utils/dom'
import { createKeymap } from '../../utils/keymap'
import { viewTransition } from '../../utils/viewTransition'
import { useSetCode } from './useSetCode'

export const useExtensions = (
	index: number,
	editorView: Accessor<EditorView>
) => {
	const { openFiles, currentFile, fs } = useFS()
	const { currentFileContent: code, setCurrentFileContent } = useCurrentFile(
		currentFile,
		openFiles
	)
	const currentFilePath = () => currentFile()?.path ?? ''

	const OPFS = useOPFS()
	const {
		isTs,
		isPython,
		isJSON,
		isHtml,
		isSystemPath,
		isCSS,
		currentExtension
	} = useFileExtension()
	const { fontSize } = createInnerZoom({
		ref: () => editorRefs[index],
		key: 'editor'
	})
	const { setCode, skipSync } = useSetCode(
		code,
		setCurrentFileContent,
		editorView
	)
	const KeyBindings: KeyBinding[] = []
	const defaultKeymap = createKeymap(
		openFiles,
		currentFilePath,
		currentExtension,
		code,
		setCode,
		OPFS.saveFile,
		fs,
		KeyBindings,
		editorView,
		skipSync
	)
	const getBracketColor = createColorCycler()

	const focusExtension = EditorView.focusChangeEffect.of((state, focus) => {
		if (focus) {
			viewTransition(() => setCurrentEditorIndex(index))
			// setCurrentEditorIndex(index)
		}
		return null
	})

	const baseExtensions = [
		EditorView.updateListener.of((update: ViewUpdate) => {
			if (update.docChanged) {
				const { doc } = update.state
				setEditorHight(Math.max(doc.lines * 13, 13))
				setCode(doc.toString())
			}
		}),
		highlightSpecialChars(),
		history(),
		drawSelection(),
		EditorState.allowMultipleSelections.of(true),
		indentOnInput(),
		bracketMatching(),
		closeBrackets(),
		rectangularSelection(),
		highlightActiveLine(),
		highlightSelectionMatches(),
		keymap.of(defaultKeymap),
		highlightActiveLineGutter(),
		indentationMarkers({
			hideFirstIndent: true,
			markerType: 'codeOnly',
			colors: {
				light: getBracketColor(),
				dark: getBracketColor(),
				activeLight: getBracketColor(),
				activeDark: getBracketColor()
			}
		}),
		focusExtension
	] as Extension[]

	const createExtension = (extension: Accessor<Extension>) =>
		createCompartmentExtension(extension, editorView)

	createExtension(() =>
		isTs() ? javascript({ jsx: true, typescript: true }) : []
	)
	createExtension(() => (isCSS() ? css() : []))
	createExtension(() => (isPython() ? python() : []))
	createExtension(() => (isJSON() && !isSystemPath() ? json() : []))
	createExtension(() =>
		isHtml()
			? html({
					autoCloseTags: true,
					matchClosingTags: true,
					selfClosingTags: true
				})
			: []
	)
	createExtension(() => (showLineNumber?.() ? lineNumbers() : []))
	createExtension(() => (isSystemPath() ? [] : rainbowBrackets()))
	createExtension(currentTheme)
	createExtension(() =>
		showFoldGutter()
			? foldGutter({
					markerDOM: isOpen => {
						const fold = document.createElement('span')
						// const color = isDark()
						// 	? getDarkerRgbColor(getBracketColor(), 1, 0.5)
						// 	: getLighterRgbColor(getBracketColor(), 1, 0.3)
						render(
							() => (
								<>
									{isOpen ? (
										<Dynamic
											component={BASE_ICONS.chevronDown}
											color={currentColor()}
										/>
									) : (
										<Dynamic
											component={BASE_ICONS.chevronRight}
											color={currentColor()}
										/>
									)}
								</>
							),
							fold
						)
						return fold
					}
				})
			: []
	)
	createExtension(() =>
		showMinimap.compute([], () => {
			return isMiniMap()
				? {
						create: () => {
							const minimap = document.createElement('div')
							autoHide(minimap)
							return { dom: minimap }
						},
						showOverlay: 'mouse-over',
						displayText: 'blocks'
					}
				: null
		})
	)
	createExtension(() => {
		if (!isTs() || !isWorkerReady() || !worker || !currentFilePath()) return []

		const tsExtensions = [
			tsFacetWorker.of({ worker: worker as any, path: currentFilePath()! }),
			tsSyncWorker(),
			tsLinterWorker(),
			tsHoverWorker()
		]
		return tsExtensions
	})
	createExtension(() =>
		EditorView.theme({
			'.cm-content': {
				fontSize: fontSize() + 'px'
			},
			'.cm-gutters': {
				backgroundColor: currentBackground(),
				userSelect: 'none',
				fontSize: fontSize() + 'px'
			},
			'.cm-gutterElement': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'right'
			},
			'.cm-foldGutter': {}
		})
	)
	createEffect(
		on(showFoldGutter, () => {
			setTimeout(() => {
				const foldGutterRef = document.querySelector('.cm-foldGutter')
				if (!foldGutterRef) return
				autoHide(foldGutterRef as HTMLElement)
			}, 0)
		})
	)
	createEffect(() => {
		//@ts-ignore
		if (extensionMap[currentExtension()] === 'typescript') {
			setIsTsLoading(true)
		}
	})
	return baseExtensions
}
