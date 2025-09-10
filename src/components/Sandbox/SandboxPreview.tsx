type Props = {
	src?: string
	class?: string
}

export function SandboxPreview(props: Props) {
	return (
		<iframe
			src={props.src || ''}
			class={`w-full h-[60vh] min-h-[300px] rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm ${props.class ?? ''}`}
		/>
	)
}
