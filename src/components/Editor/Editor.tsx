import { EditorState } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import { Accessor, batch, createEffect, createSignal, onMount } from 'solid-js'
import {
	editorRefs,
	getPaintTimes,
	setCurrentColumn,
	setCurrentLine,
	setCurrentSelection,
	setEditorMounted,
	setStart,
	start
} from '../../stores/editorStore'
import { historyField } from '@codemirror/commands'
import { ThemeKey, setTheme } from '../../stores/themeStore'
import { setFormatter } from '../../utils/format'

import { useFS } from '../../context/FsContext'
import { useCurrentFile } from '../../hooks/useCurrentFile'
import { useFileExtension } from '../../hooks/useFileExtension'
import { useExtensions } from './useExtensions'
import { inlineSuggestion } from 'codemirror-extension-inline-suggestion'
import { llmSuggest } from '../../stores/llmStore'
import { terminalBounds } from '../../stores/terminalStore'
import {
	CURRENT_PATH_BAR_HEIGHT,
	EDITOR_TAB_HEIGHT,
	isStatusBar,
	STATUS_BAR_HEIGHT
} from '../../stores/appStateStore'

export interface EditorProps {
	defaultTheme?: ThemeKey
	formatOnMount?: Accessor<boolean>
	index: number
}

export const Editor = ({
	defaultTheme,
	index
	// size
}: EditorProps) => {
	const { openFiles, currentFile } = useFS()
	const { currentFileContent: code } = useCurrentFile(currentFile, openFiles)

	const { isTs, isPython } = useFileExtension()

	const [editorView, setView] = createSignal<EditorView>(null!)

	const baseExtensions = useExtensions(index, editorView)

	// Inline suggestion fetcher using the global LLM
	const fetchSuggestion = async (state: EditorState) => {
		try {
			const pos = state.selection.main.head
			const before = state.sliceDoc(Math.max(0, pos - 2000), pos)
			const after = state.sliceDoc(pos, Math.min(state.doc.length, pos + 400))
			const prompt =
				'You are a code completion engine. Suggest the next short insertion to help complete the code at the cursor. Respond with only the suggested text, no explanations.' +
				'\n<before>\n' +
				before +
				'\n</before>\n<after>\n' +
				after +
				'\n</after>\nSuggestion:'
			const suggestion = await llmSuggest(prompt)
			return (suggestion || '').trim()
		} catch (e) {
			console.error('inline suggestion error', e)
			return ''
		}
	}

	const setupEditor = () => {
		const view = new EditorView({
			parent: editorRefs[index],
			dispatch: (transaction, view) => {
				view.update([transaction])
				batch(() => {
					const { state } = view
					const { selection, doc } = state
					const { main } = selection

					const line = doc.lineAt(main.head)
					setCurrentSelection([main.from, main.to])
					setCurrentLine(line.number)
					setCurrentColumn(main.head - line.from)
				})
			}
		})
		const editorState = EditorState.create({
			doc: code(),
			extensions: [
				...baseExtensions,
				inlineSuggestion({ fetchFn: fetchSuggestion, delay: 1000 })
			]
		})

		view.setState(editorState)
		batch(() => {
			setView(view)
			defaultTheme && setTheme(defaultTheme)
		})

		requestAnimationFrame(() => {
			setEditorMounted(true)
		})
		console.info(
			`first paint took ${(performance.now() - start()).toFixed(2)} ms`
		)
		setStart(performance.now())
		return view
	}
	onMount(setupEditor)

	createEffect(() => {
		// TODO infer this
		if (isTs()) setFormatter('prettier')
		if (isPython()) setFormatter('python')
	})

	// createEffect(
	// 	on(
	// 		currentFilePath,
	// 		currentFilePath => {
	// 			const state = editorStates[currentFilePath] ?? baseState()
	// 			if (editorStates[currentFilePath]) {
	// 				editorStates[currentFilePath] = state
	// 			}
	// 			if (!state) return
	// 			editorView()?.setState(state)
	// 		},
	// 		{ defer: true }
	// 	)
	// )

	return (
		<>
			<div
				class="border-b-2"
				id="editor"
				style={{
					height:
						window.innerHeight -
						(isStatusBar() ? STATUS_BAR_HEIGHT : 0) -
						EDITOR_TAB_HEIGHT -
						CURRENT_PATH_BAR_HEIGHT -
						(terminalBounds?.height ?? 0) +
						'px'
				}}
				ref={ref => editorRefs.push(ref)}
			/>
		</>
	)
}
