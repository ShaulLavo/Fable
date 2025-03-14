import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><path d="M21.524 10.3h-8.556c-.672 0-1.222.55-1.222 1.222v8.556c0 .672.55 1.222 1.222 1.222h8.556c.672 0 1.222-.55 1.222-1.222v-8.556c0-.672-.55-1.222-1.222-1.222zm-8.556 1.216h1.834c0 1.015-.82 1.84-1.834 1.84zm0 4.284v-1.222a3.062 3.062 0 0 0 3.056-3.062h1.222a4.28 4.28 0 0 1-4.278 4.284zm0 3.667l2.14-2.75 1.527 1.84 2.139-2.757 2.75 3.667z" fill="#80CBC4" style="fill:#89b482"/>',
}

export const FolderExamplesOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
