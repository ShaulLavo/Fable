import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#303F9F" fill-rule="nonzero" style="fill:#45403d"/><path d="m23.013 10.784-.87743-1.0602a.95253 .95249 0 0 0 -.73316 -.34088h-7.5747c-.29643 0-.55531.1324-.72625.34681l-.87743 1.0542a1.2529 1.2529 0 0 0 -.2905 .80824v7.8906c0 .69461.56223 1.2627 1.2628 1.2627h8.8375c.69463 0 1.2628-.56813 1.2628-1.2627v-7.8906c0-.30926-.1077-.5869-.28359-.80824zm-5.3979 2.7013 3.4722 3.472h-2.2093v1.2627h-2.5256v-1.2627h-2.2093zm-4.3417-2.8407.51677-.63038h7.5757l.58693.63038z" style="fill:#7daea3;stroke-width:.98809"/>',
}

export const FolderPackage = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
