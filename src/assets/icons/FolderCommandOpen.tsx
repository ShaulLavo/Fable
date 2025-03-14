import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path fill="#45403d" d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z"/> <path fill="#7daea3" d="M21.706 11.619h-9.2c-.633 0-1.144.517-1.144 1.15l-.006 10.35 2.3-2.3h8.05c.632 0 1.15-.518 1.15-1.15v-6.9c0-.633-.518-1.15-1.15-1.15zm-4.025 6.9h-1.15v-1.15h1.15zm0-2.3h-1.15v-2.3h1.15z"/>',
}

export const FolderCommandOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
