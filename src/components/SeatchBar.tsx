import { createEffect, createSignal, For, on, Show } from 'solid-js'
import { BsSearch } from 'solid-icons/bs'
import { useFS } from '../context/FsContext'
import { collectItems, getNode } from '../service/FS.service'
import {
	currentBackground,
	currentColor,
	secondaryBackground,
	secondaryColor
} from '../stores/themeStore'
import { Dynamic } from 'solid-js/web'
import { isSearchBar, setIsSearchBar } from '../stores/appStateStore'
import { autofocus } from '@solid-primitives/autofocus'
import { isFolder } from '../types/FS.types'

export default function SearchPalette() {
	const { fs, setCurrentNode } = useFS()

	const [currentFolder, setCurrentFolder] = createSignal(fs)

	const calculateDepth = (path: string) =>
		path.split('/').filter(segment => segment !== '').length

	const fileItems = () =>
		currentFolder()
			.children.flatMap(collectItems)
			.sort((a, b) => {
				const depthA = calculateDepth(a.path)
				const depthB = calculateDepth(b.path)
				if (depthA !== depthB) {
					return depthA - depthB
				}

				if (a.type !== b.type) {
					return a.type === 'folder' ? -1 : 1
				}

				return a.path.localeCompare(b.path)
			})
	const [searchQuery, setSearchQuery] = createSignal('')
	const [selectedIndex, setSelectedIndex] = createSignal(0)
	const [filteredItems, setFilteredItems] = createSignal(fileItems())
	const [isKeyboardNavigating, setIsKeyboardNavigating] = createSignal(false) // New signal
	let list: HTMLDivElement = null!

	createEffect(() => {
		let query = searchQuery().toLowerCase().trim()
		if (!query) {
			setFilteredItems(fileItems())
		} else {
			let filtered = fileItems()
			if (query.startsWith('folder:')) {
				filtered = filtered.filter(item => item.type === 'folder')
				query = query.slice(7).trim()
			}
			filtered = filtered.filter(
				item =>
					item.name.toLowerCase().includes(query) ||
					item.path.toLowerCase().includes(query)
			)
			setFilteredItems(filtered)
		}
		setSelectedIndex(filteredItems().length > 0 ? 0 : -1)
	})

	const handleKeyDown = (e: KeyboardEvent) => {
		const items = filteredItems()

		switch (e.key) {
			case 'ArrowDown':
				e.preventDefault()
				if (items.length > 0) {
					setSelectedIndex(prev => (prev + 1) % items.length)
					setIsKeyboardNavigating(true)
				}
				break
			case 'ArrowUp':
				e.preventDefault()
				if (items.length > 0) {
					setSelectedIndex(prev => (prev - 1 + items.length) % items.length)
					setIsKeyboardNavigating(true)
				}
				break
			case 'Enter':
				e.preventDefault()
				if (items.length > 0) {
					handleSelect(items[selectedIndex()])
				}
				break
			case 'Escape':
				e.preventDefault()
				setIsSearchBar(false)
				break
			case 'Backspace':
				if (!searchQuery() && currentFolder() !== fs) {
					e.preventDefault()
					setCurrentFolder(fs)
				}
				break
		}

		const index = selectedIndex()
		if (items.length > 0 && index >= 0 && index < items.length && list) {
			const itemTop = getItemTop(index)
			const itemHeight = list.children[index].clientHeight
			const itemBottom = itemTop + itemHeight
			const currentScrollTop = list.scrollTop
			const visibleHeight = list.clientHeight

			if (itemTop < currentScrollTop) {
				list.scrollTo({ top: itemTop, behavior: 'instant' })
			} else if (itemBottom > currentScrollTop + visibleHeight) {
				const targetScrollTop = itemBottom - visibleHeight
				list.scrollTo({ top: targetScrollTop, behavior: 'instant' })
			}
		}
	}

	const handleSelect = (item: ReturnType<typeof fileItems>[0]) => {
		console.log('Selected:', item.path)
		const node = getNode(fs, item.path)
		if (isFolder(node)) {
			setCurrentFolder(node)
		} else {
			setCurrentNode(getNode(fs, item.path) ?? fs)
			setIsSearchBar(false)
		}
	}

	const handleMouseEnter = (index: number) => {
		if (!isKeyboardNavigating()) {
			// Only set if not navigating with keyboard
			setSelectedIndex(index)
		}
	}

	const getItemTop = (index: number) => {
		let top = 0
		for (let j = 0; j < index; j++) {
			top += list.children[j].clientHeight
		}
		return top
	}

	return (
		<Show when={isSearchBar()}>
			<div class="fixed inset-0 bg-black/50 z-50"></div>
			<div class="fixed z-[120] inset-0 flex items-start justify-center pt-[10vh]">
				<div
					style={{
						color: secondaryColor(),
						'background-color': secondaryBackground()
					}}
					class="w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden"
				>
					<div class="flex items-center px-4 py-3 border-b border-gray-700">
						<BsSearch class="w-5 h-5 mr-3" />
						<input
							type="text"
							placeholder="Search files (e.g. index.tsx, app.tsx)"
							value={searchQuery()}
							onInput={e => setSearchQuery(e.currentTarget.value)}
							onKeyDown={handleKeyDown}
							class="w-full bg-transparent text-white outline-none placeholder-gray-500"
							ref={autofocus}
							autofocus
						/>
					</div>

					<div
						ref={list}
						class="max-h-[60vh] overflow-y-auto"
						onMouseMove={() => setIsKeyboardNavigating(false)} // Detect mouse movement
					>
						<For each={filteredItems()}>
							{(item, index) => (
								<div
									class="flex items-center px-4 py-2 cursor-pointer"
									style={{
										color:
											selectedIndex() === index()
												? currentColor()
												: secondaryColor(),
										'background-color':
											selectedIndex() === index()
												? currentBackground()
												: secondaryBackground()
									}}
									onClick={() => handleSelect(item)}
									onMouseEnter={() => handleMouseEnter(index())} // Conditional hover
								>
									<Dynamic component={item.Icon} class="w-5 h-5 mr-3" />
									<div class="flex flex-col">
										<span class="font-medium">{item.name}</span>
										<span class="text-xs">{item.path}</span>
									</div>
								</div>
							)}
						</For>

						<Show when={filteredItems().length === 0}>
							<div class="px-4 py-3 text-gray-400 text-center">
								No matching files found
							</div>
						</Show>
					</div>

					<div
						style={{
							color: secondaryColor(),
							'background-color': secondaryBackground()
						}}
						class="px-4 py-2 text-xs flex justify-between"
					>
						<div>
							<kbd
								class="px-1.5 py-0.5 rounded text-xs mr-1"
								style={{
									color: currentColor(),
									'background-color': currentBackground()
								}}
							>
								↑
							</kbd>
							<kbd
								class="px-1.5 py-0.5 rounded text-xs mr-1"
								style={{
									color: currentColor(),
									'background-color': currentBackground()
								}}
							>
								↓
							</kbd>
							<span class="mr-2">to navigate</span>

							<kbd
								class="px-1.5 py-0.5 rounded text-xs mr-1"
								style={{
									color: currentColor(),
									'background-color': currentBackground()
								}}
							>
								Enter
							</kbd>
							<span class="mr-2">to select</span>

							<kbd
								class="px-1.5 py-0.5 rounded text-xs mr-1"
								style={{
									color: currentColor(),
									'background-color': currentBackground()
								}}
							>
								Esc
							</kbd>
							<span>to close</span>
						</div>
						<div>{filteredItems().length} results</div>
					</div>
				</div>
			</div>
		</Show>
	)
}
