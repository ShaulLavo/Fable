import { VsClose } from 'solid-icons/vs'
import {
	Accessor,
	For,
	Show,
	batch,
	createEffect,
	createSignal,
	onMount,
	type Component
} from 'solid-js'

import { createEventListener } from '@solid-primitives/event-listener'
import { Dynamic } from 'solid-js/web'
import { useFS } from '../../context/FsContext'
import { getNode } from '../../service/FS.service'
import { getNodeIcon } from '../../stores/icons'
import { currentColor } from '../../stores/themeStore'
import { cn } from '../../utils/cn'
import { Span } from '../ui/Span'

interface EditorTabsProps {
	index: number
}

export const EditorTabs: Component<EditorTabsProps> = ({ index }) => {
	const { tabs } = useFS()
	let tabContainer: HTMLDivElement = null!
	onMount(() => {
		createEventListener(tabContainer, 'wheel', (e: WheelEvent) => {
			const isTrackpad =
				Math.abs(e.deltaY) < 20 &&
				(e.deltaX !== 0 || e.deltaY !== 0) &&
				!e.deltaY.toString().includes('.') // Mouse wheels usually give integer values

			if (isTrackpad) {
				// Do nothing - let default trackpad scrolling work
				return
			}

			// Handle mouse wheel scrolling
			e.preventDefault()
			const scrollSpeed = 2.5
			tabContainer.scrollLeft += e.deltaY * scrollSpeed
		})
	})

	return (
		<div
			ref={tabContainer}
			class="flex overflow-x-auto whitespace-nowrap z-50 relative"
		>
			<For each={tabs()}>
				{(path, tabIndex) => (
					<Show when={path}>
						<Tab file={path} tabIndex={tabIndex} index={index} />
					</Show>
				)}
			</For>
		</div>
	)
}

const Tab = ({
	file,
	index,
	tabIndex
}: {
	file: string
	tabIndex: Accessor<number>
	index: number
}) => {
	const { openFiles, fs, currentPath, setCurrentNode, currentNode, tabs } =
		useFS()
	const [isHovered, setIsHovered] = createSignal(false)
	const isSelected = () => currentNode().path === file

	let tabRef: HTMLDivElement = null!

	createEffect(() => {
		if (isSelected()) {
			tabRef.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'nearest'
			})
		}
	})

	const onFileClose = (e: Event) => {
		e.stopPropagation()
		batch(async () => {
			if (isSelected()) {
				const currentIndex = tabIndex()
				if (openFiles.size === 1) {
					setCurrentNode(fs)
				} else if (currentIndex > 0) {
					const path = tabs()[currentIndex - 1]
					const node = getNode(fs, path) ?? fs
					setCurrentNode(node)
				} else {
					const path = tabs()[1]
					const node = getNode(fs, path) ?? fs
					setCurrentNode(node)
				}
			}
			openFiles.delete(file)
		})
	}

	//  EditorState.toJSON/fromJSON save with tab data

	return (
		<Span
			selected={isSelected()}
			title={file}
			ref={tabRef}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
			onClick={() => {
				batch(() => {
					const node = getNode(fs, file) ?? fs
					setCurrentNode(node)
				})
			}}
			class={cn(
				`px-1.5 py-1.5 focus:outline-none text-xs items-center flex cursor-pointer relative z-50 box-border border-t-1`
			)}
			style={{
				'border-color': isSelected() ? currentColor() : 'transparent'
			}}
			data-value={file}
			role="button"
		>
			<Dynamic component={getNodeIcon(getNode(fs, file)!)} size={14} />
			<span class="px-1" />

			{file.split('/').pop()}

			<button
				onClick={onFileClose}
				class="pl-2 flex items-center justify-center"
				style={{
					visibility: isHovered() || isSelected() ? 'visible' : 'hidden',
					'padding-top': '1.5px'
				}}
			>
				<VsClose size={16} color={currentColor()} />
			</button>
		</Span>
	)
}
