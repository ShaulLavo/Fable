import { Component, For, Setter } from 'solid-js'
import {
	baseFontSize,
	bracketColors,
	currentBackground,
	currentColor,
	dragHandleColor,
	secondaryBackground
} from '../stores/themeStore'

import { Spinner, SpinnerType } from 'solid-spinner'
import { HoverCard } from '../components/HoverCard'
import { useFileExtension } from '../hooks/useFileExtension'
import {
	currentColumn,
	currentLine,
	currentSelection,
	isGitLoading,
	isTsLoading
} from '../stores/editorStore'
import { Git, TypeScript } from '../assets/customIcons'

export const DefaultDescription = (props: { description: string }) => {
	return <div>{props.description}</div>
}

interface Status {
	title: string | Component
	description?: string
	isLoading: boolean
}

interface StatusBarProps {
	ref: Setter<HTMLDivElement>
}

export const StatusBar: Component<StatusBarProps> = ({ ref }) => {
	const { isTs } = useFileExtension()
	const selectionLength = () => currentSelection()[1] - currentSelection()[0]
	const selectionText = () =>
		selectionLength() > 0 ? `(${selectionLength()} selected)` : ''

	const statuses = () =>
		[
			{
				title: `Ln ${currentLine()},Col ${currentColumn()} ${selectionText()}`,
				description: 'Go to Line/Column',
				isLoading: false
			},
			{
				title: isTs()
					? () => (
							<TypeScript color={currentColor()} height={baseFontSize() + 2} />
						)
					: '',
				// description: 'Go to Line/Column',
				isLoading: isTs() && isTsLoading()
			},
			{
				title: () => <Git color={currentColor()} height={baseFontSize() + 2} />,
				description: 'File Encoding',
				isLoading: isGitLoading()
			},
			{
				title: () => <></>,
				isLoading: false
			}
		] satisfies Status[]

	return (
		<>
			<div
				ref={ref}
				class="absolute bottom-0 w-full z-100 flex border-t-2 p-1"
				style={{
					'background-color': secondaryBackground(),
					'border-color': dragHandleColor()
				}}
			>
				<ul
					class="flex flex-1 justify-end"
					style={{ 'font-size': baseFontSize() + 'px' }}
				>
					<For each={statuses()}>
						{status => (
							<li
								class="pr-1 flex items-center justify-center text-xs"
								style={{ color: currentColor() }}
							>
								{status.isLoading ? (
									<Spinner
										type={SpinnerType.tailSpin}
										width={baseFontSize()}
										height={baseFontSize()}
										color={currentColor()}
									/>
								) : status.description ? (
									<HoverCard
										trigger={
											typeof status.title === 'function' ? (
												<status.title />
											) : (
												<>{status.title}</>
											)
										}
										caredContent={status.description}
										hasArrow
										gap={4}
										as={'span'}
									/>
								) : typeof status.title === 'function' ? (
									<status.title />
								) : (
									<span>{status.title}</span>
								)}
							</li>
						)}
					</For>
				</ul>{' '}
			</div>
		</>
	)
}
