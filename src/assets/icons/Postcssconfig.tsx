import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 79 78' },
	c: '<g style="stroke:#e53935"><path d="M71.285 39A31.785 31.785 0 0 1 39.5 70.785 31.785 31.785 0 0 1 7.715 39 31.785 31.785 0 0 1 39.5 7.215 31.785 31.785 0 0 1 71.285 39" style="fill-opacity:0;paint-order:fill markers stroke;stroke-linecap:square;stroke-width:4.172;stroke:#e53935" transform="translate(1.944 1.919) scale(.9508)"/><path d="M70.177 53.23H8.822L39.499 8.945z" style="fill-opacity:0;paint-order:fill markers stroke;stroke-linecap:square;stroke-width:4.2421;stroke:#e53935" transform="translate(1.944 1.919) scale(.9508)"/><path d="M27.636 27.007h25.962v25.962H27.636z" style="fill-opacity:0;paint-order:fill markers stroke;stroke-linecap:square;stroke-width:3.5945;stroke:#e53935" transform="translate(1.944 1.919) scale(.9508)"/><path d="M51.61 39.43a10.993 10.993 0 0 1-10.993 10.993A10.993 10.993 0 0 1 29.624 39.43a10.993 10.993 0 0 1 10.993-10.993A10.993 10.993 0 0 1 51.61 39.43" style="fill-opacity:0;paint-order:fill markers stroke;stroke-linecap:square;stroke-width:3.3719;stroke:#e53935" transform="translate(1.944 1.919) scale(.9508)"/></g>',
}

export const Postcssconfig = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
