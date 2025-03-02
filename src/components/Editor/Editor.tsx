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
import { ThemeKey, setTheme } from '../../stores/themeStore'
import { setFormatter } from '../../utils/format'

import { useFS } from '../../context/FsContext'
import { useCurrentFile } from '../../hooks/useCurrentFile'
import { useFileExtension } from '../../hooks/useFileExtension'
import { useExtensions } from './useExtensions'

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
			extensions: baseExtensions
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
					height: window.innerHeight - 20 + 'px'
				}}
				ref={ref => editorRefs.push(ref)}
			/>
		</>
	)
}
