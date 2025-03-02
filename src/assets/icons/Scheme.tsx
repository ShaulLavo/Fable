import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M5.11 21.186 9.887 7.303 8.945 5.11H7.407V2.813h2.296c.483 0 .896.299 1.068.724l6.58 15.353h1.539v2.296h-2.297a1.14 1.14 0 0 1-1.068-.735L11.231 10.45 7.544 21.186z" style="fill:#f44336;stroke-width:1.1483"/>',
}

export const Scheme = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
