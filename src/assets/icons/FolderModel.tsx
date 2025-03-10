import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m13.814 8.7103a1.3544 1.2753 0 0 0 -1.355 1.2758v10.201a1.3544 1.2753 0 0 0 1.355 1.2777h8.1259a1.3544 1.2753 0 0 0 1.355 -1.2777v-10.201a1.3544 1.2753 0 0 0 -1.355 -1.2758zm0 4.4644h8.1259v3.1887h-8.1259zm0 4.4626h8.126v2.5498h-8.1259v-2.5497z" fill="#ea6962" stroke-width=".65714"/>',
}

export const FolderModel = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
