import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M5 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5zm12 3v2.4c-1.6 0-2.4.9-3.1 2.4h1.8v2.4h-2.8c-.4 1-.9 2.1-1.6 2.9C10.2 17.4 8.8 18 7 18v-2.4c2.2 0 2.8-1.5 3.8-4 .5-1.3 1.1-2.6 1.9-3.6 1.1-1.3 2.5-2 4.3-2z" fill="#e53935"/>',
}

export const Swc = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
