import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M13.48 4.425v-.477l.543-.575h6.722l.46.592v1.48L6.543 20.628H4.637l-.856-.476V6h-.493l-.492-.476V3.98l.526-.608h6.642l.523.594.032.048v1.464l-.444.69h-.543v4.603L14.3 6.167h-.262l-.56-.674" style="fill:#43a047;stroke-width:.8523"/>',
}

export const Vim = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
