import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><path d="m13.589 11.246h-2.0193a.67533 .67533 0 0 0 -.6731 .6731v8.0817c0 .37048.30262.6731.6731.6731h2.0204a.67533 .67533 0 0 0 .6731 -.6731v-8.0817a.67533 .67533 0 0 0 -.6731 -.6731zm9.4279 0h-2.0204a.67533 .67533 0 0 0 -.6731 .6731v8.0817c0 .37048.30262.6731.6731.6731h2.0204a.67533 .67533 0 0 0 .6731 -.6731v-8.0817a.67533 .67533 0 0 0 -.6731 -.6731zm-4.7139 0h-2.0204a.67533 .67533 0 0 0 -.6731 .6731v8.0817c0 .37048.30262.6731.6731.6731h2.0204a.67533 .67533 0 0 0 .6731 -.6731v-8.0817a.67533 .67533 0 0 0 -.6731 -.6731z" style="fill:#7daea3;stroke-width:1.1126"/>',
}

export const FolderConstantOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
