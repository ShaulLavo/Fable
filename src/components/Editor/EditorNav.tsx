import { Component, createEffect, For } from 'solid-js'
import { useFS } from '../../context/FsContext'

interface EditorNavProps {
	index: number
}
export const EditorNav: Component<EditorNavProps> = ({ index }) => {
	const { currentFile } = useFS()
	const buttons = () => currentFile()?.path?.split('/').filter(Boolean)

	return (
		<div class="text-xs overflow-x-auto whitespace-nowrap">
			<For each={buttons()}>
				{(part, index) => (
					<span>
						{' '}
						<button
							class="text-xs"
							onClick={() => {
								/* noop */
							}}
						>
							{part + (index() === buttons?.()!.length - 1 ? '' : ' >')}
						</button>{' '}
					</span>
				)}
			</For>
		</div>
	)
}
