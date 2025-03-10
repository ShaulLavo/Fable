import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#45403d" style="fill:#45403d"/><path d="M10.6 17.829h5.333v-1.286H10.6zm0 2.571h5.333v-1.286H10.6zm0-5.143h5.333v-1.286H10.6zm0-3.857v1.286h5.333V11.4zm6.667 0H22.6v9h-5.333z" fill="#ddc7a1"/>',
}

export const FolderTemplateOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
