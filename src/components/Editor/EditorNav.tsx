import { Component, For } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { useFS } from '../../context/FsContext'
import { getNodeIcon } from '../../stores/icons'
import { currentColor, secondaryColor } from '../../stores/themeStore'

interface EditorNavProps {
	index: number
}
export const EditorNav: Component<EditorNavProps> = ({ index }) => {
	const { currentFile, fs } = useFS()
	const buttons = () => currentFile()?.path?.split('/').filter(Boolean)

	return (
		<div class="flex px-1 gap-1 text-xs overflow-x-auto whitespace-nowrap">
			<Dynamic component={getNodeIcon(currentFile() ?? fs)} />
			<For each={buttons()}>
				{(part, index) => (
					<span>
						{' '}
						<button
							class="text-xs"
							style={{
								color:
									index() === buttons?.()!.length - 1
										? secondaryColor()
										: currentColor()
							}}
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
