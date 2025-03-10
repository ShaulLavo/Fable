import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><path d="M13.814 8.71a1.354 1.275 0 0 0-1.355 1.276v10.2a1.354 1.275 0 0 0 1.355 1.279h8.126a1.354 1.275 0 0 0 1.355-1.278V9.986A1.354 1.275 0 0 0 21.94 8.71zm0 4.465h8.126v3.188h-8.126zm0 4.462h8.126v2.55h-8.126v-2.55z" fill="#bbdefb"/>',
}

export const FolderInterfaceOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
