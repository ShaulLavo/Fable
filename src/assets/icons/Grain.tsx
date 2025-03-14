import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 64 68' },
	c: '<path d="m32.109 7.025-9.122 18.849 9.262 8.07 8.989-8.07z" fill="#faa520" style="fill:#ffa726;stroke-width:.79339" transform="translate(-.517 -.55) scale(1.0162)"/><path d="M7.32 16.366 6.612 39.09l25.631 21.886 12.865-11.261z" fill="#f78f28" style="fill:#f57f17;stroke-width:.79339" transform="translate(-.517 -.55) scale(1.0162)"/><path d="M57.388 39.096V16.1L34.419 36.38l13.209 11.191z" fill="#e18026" style="fill:#f57c00;stroke-width:.79339" transform="translate(-.517 -.55) scale(1.0162)"/>',
}

export const Grain = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
