import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M16 6h-3v1.9h3a4.1 4.1 0 0 1 4.1 4.1 4.1 4.1 0 0 1-4.1 4.1h-3V18h3a6 6 0 0 0 6-6c0-3.32-2.69-6-6-6M3.9 12A4.1 4.1 0 0 1 8 7.9h3V6H8a6 6 0 0 0-6 6 6 6 0 0 0 6 6h3v-1.9H8c-2.26 0-4.1-1.84-4.1-4.1M8 13h8v-2H8v2z" fill="#42a5f5"/>',
}

export const Url = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
