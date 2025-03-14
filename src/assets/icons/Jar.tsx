import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M4.25 1.52a2.58 2.6 0 0 0-2.58 2.6v15.66a2.58 2.6 0 0 0 2.58 2.61h15.48a2.58 2.6 0 0 0 2.58-2.6V4.12a2.6 2.6 0 0 0-2.58-2.61H4.25zm.24 4.3h13.83c.95 0 1.73.8 1.73 1.78v2.66a1.73 1.77 0 0 1-1.73 1.77H16.6v2.5a3.46 3.48 0 0 1-3.46 3.5h-5.2a3.46 3.48 0 0 1-3.45-3.5v-8.7zm12.1 1.78v2.66h1.73V7.6H16.6z" fill="#f44336"/>',
}

export const Jar = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
