import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#BDBDBD" style="fill:#45403d"/><path d="m16.935 16.425a3.54 3.54 0 0 0 -3.339 -2.363 3.548 3.548 0 0 0 -3.545 3.545 3.548 3.548 0 0 0 3.545 3.546 3.54 3.54 0 0 0 3.339 -2.364h2.57v2.364h2.364v-2.364h1.182v-2.364zm-3.339 2.364c-.65 0-1.182-.532-1.182-1.182s.532-1.182 1.182-1.182 1.182.532 1.182 1.182-.532 1.182-1.182 1.182z" fill="#757575" style="fill:#89b482"/>',
}

export const FolderKeysOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
