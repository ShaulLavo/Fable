import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#303F9F" style="fill:#45403d"/><path d="m23.014 10.784-.87741-1.0602a.95251 .95249 0 0 0 -.73315 -.34088h-7.5746c-.29642 0-.5553.1324-.72623.34681l-.87741 1.0542a1.2529 1.2529 0 0 0 -.29049 .80824v7.8906c0 .69461.56222 1.2627 1.2627 1.2627h8.8373c.69462 0 1.2627-.56813 1.2627-1.2627v-7.8906c0-.30926-.1077-.5869-.28358-.80824zm-5.3978 2.7013 3.4721 3.472h-2.2093v1.2627h-2.5256v-1.2627h-2.2093zm-4.3416-2.8407.51676-.63038h7.5755l.58692.63038z" style="fill:#7daea3;stroke-width:.98808"/>',
}

export const FolderPackageOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
