import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#B71C1C" style="fill:#45403d"/><path d="m21.995 11.083h-9.6881c-.66553 0-1.2047.54443-1.2047 1.211l-.0063 7.2661c0 .66553.54548 1.211 1.211 1.211h9.6881c.66659 0 1.211-.54548 1.211-1.211v-7.2661c0-.66658-.54443-1.211-1.211-1.211zm0 2.422-4.8441 3.0275-4.8441-3.0275v-1.211l4.8441 3.0275 4.8441-3.0275z" style="fill:#ea6962;stroke-width:1.0531"/>',
}

export const FolderMailOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
