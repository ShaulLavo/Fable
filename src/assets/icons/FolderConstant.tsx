import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m13.589 11.247h-2.0193a.67533 .67533 0 0 0 -.6731 .6731v8.0817c0 .37048.30262.6731.6731.6731h2.0204a.67533 .67533 0 0 0 .6731 -.6731v-8.0817a.67533 .67533 0 0 0 -.6731 -.6731zm9.4279 0h-2.0204a.67533 .67533 0 0 0 -.6731 .6731v8.0817c0 .37048.30262.6731.6731.6731h2.0204a.67533 .67533 0 0 0 .6731 -.6731v-8.0817a.67533 .67533 0 0 0 -.6731 -.6731zm-4.7139 0h-2.0204a.67533 .67533 0 0 0 -.6731 .6731v8.0817c0 .37048.30262.6731.6731.6731h2.0204a.67533 .67533 0 0 0 .6731 -.6731v-8.0817a.67533 .67533 0 0 0 -.6731 -.6731z" style="fill:#7daea3;stroke-width:1.1126"/>',
}

export const FolderConstant = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
