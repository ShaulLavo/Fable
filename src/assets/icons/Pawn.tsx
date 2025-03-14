import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 22.003H5v-2h14v2m-3-4H8l2.18-8H8v-2h2.72l.07-.26a2.97 2.97 0 0 1-1.54-1.54c-.67-1.52.02-3.29 1.54-3.95 1.52-.67 3.29.02 3.95 1.54a2.99 2.99 0 0 1-1.54 3.95l.07.26H16v2h-2.18z" fill="#ef6c00"/>',
}

export const Pawn = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
