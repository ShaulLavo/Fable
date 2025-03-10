import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 256 256' },
	c: '<path d="M35.853 35.857v184.29h184.29V178.96H77.033V35.84z" style="fill:#f06292;paint-order:fill markers stroke;stroke-width:0"/><path d="M57.279 57.279v31.682h54.561v110.09h31.68V88.961h55.52V57.279z" style="fill:#00e5ff;paint-order:fill markers stroke;stroke-width:0" transform="translate(-38.617 -38.624) scale(1.3001)"/>',
}

export const Textlint = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
