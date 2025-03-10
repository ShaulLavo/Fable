import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#E53935" fill-rule="nonzero" style="fill:#45403d"/><path d="m17.726 17.072h1.1836l-2.8937-7.3607h-1.0529l-2.8937 7.3607h1.1836l.63385-1.6983h3.1937zm-3.4085-2.8317 1.172-3.1247 1.172 3.1247zm8.5843.335-4.5805 4.5803-2.0778-2.0835-.7996.7984l2.8832 2.8819 5.3731-5.3787z" style="fill:#ea6962;stroke-width:1.1673"/>',
}

export const FolderSyntax = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
