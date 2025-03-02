import { file } from 'opfs-tools'
import {
	Component,
	For,
	Show,
	createEffect,
	createMemo,
	createSignal,
	on
} from 'solid-js'
import { useFS } from '../context/FsContext'
import { useCurrentFile } from '../hooks/useCurrentFile'
import {
	bracketColors,
	currentBackground,
	currentColor,
	secondaryColor
} from '../stores/themeStore'
import { VirtualList } from '@solid-primitives/virtual'
import { Spinner, SpinnerType } from 'solid-spinner'
const rowHeight = 24
function byteToHex(byte: number): string {
	return byte.toString(16).padStart(2, '0').toUpperCase()
}
const BinaryFileViewer: Component<{ fileData?: Uint8Array }> = props => {
	const { currentFile } = useFS()

	const [hoveredIndex, setHoveredIndex] = createSignal<number | null>(null)

	const totalRows = createMemo(() =>
		props.fileData ? Math.ceil(props.fileData!.length / 16) : 0
	)
	const rows = createMemo(() =>
		Array.from({ length: totalRows() }, (_, i) => i)
	)

	return (
		<div
			class="container mx-auto p-4"
			style={{ 'background-color': currentBackground() }}
		>
			<Show
				when={props.fileData?.length}
				fallback={<Spinner type={SpinnerType.tailSpin} />}
			>
				<VirtualList
					each={rows()}
					fallback={<Spinner type={SpinnerType.tailSpin} />}
					overscanCount={5}
					rootHeight={(window.innerHeight - 20) / 2}
					rowHeight={rowHeight}
				>
					{rowIndex => {
						const offset = rowIndex * 16
						const rowBytes = props.fileData?.slice(offset, offset + 16) || []
						return (
							<div class="flex h-[24px]">
								<span class="w-20" style={{ color: currentColor() }}>
									{offset.toString(16).padStart(8, '0').toUpperCase()}
								</span>
								<div class="flex space-x-1">
									<For each={Array.from(rowBytes)}>
										{(byte, idx) => {
											const globalIndex = offset + idx()
											return (
												<>
													<span
														class="cursor-pointer px-1"
														style={{
															'background-color':
																hoveredIndex() === globalIndex
																	? bracketColors().orange
																	: '',
															color:
																hoveredIndex() === globalIndex
																	? 'black'
																	: secondaryColor(),
															'font-weight':
																hoveredIndex() === globalIndex ? 'bold' : ''
														}}
														onMouseEnter={() => setHoveredIndex(globalIndex)}
														onMouseLeave={() => setHoveredIndex(null)}
													>
														{byteToHex(byte)}
													</span>
													<Show when={idx() === 7 && rowBytes.length > 8}>
														<span class="w-4"></span>
													</Show>
												</>
											)
										}}
									</For>
								</div>
								<div class="ml-4 flex space-x-1">
									<For each={Array.from(rowBytes)}>
										{(byte, idx) => {
											const globalIndex = offset + idx()
											const char =
												byte >= 32 && byte <= 126
													? String.fromCharCode(byte)
													: '.'
											return (
												<span
													class="cursor-pointer px-1"
													style={{
														'background-color':
															hoveredIndex() === globalIndex
																? bracketColors().orange
																: '',
														color:
															hoveredIndex() === globalIndex
																? 'black'
																: secondaryColor(),
														'font-weight':
															hoveredIndex() === globalIndex ? 'bold' : ''
													}}
													onMouseEnter={() => setHoveredIndex(globalIndex)}
													onMouseLeave={() => setHoveredIndex(null)}
												>
													{char}
												</span>
											)
										}}
									</For>
								</div>
							</div>
						)
					}}
				</VirtualList>
			</Show>
		</div>
	)
}
export default BinaryFileViewer
