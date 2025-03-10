import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '-30 -94 700 700' },
	c: '<path d="M600.53 440.27 344.04 41.29a28.499 28.499 0 0 0-48.092 0L39.458 440.27a28.499 28.499 0 0 0 24.046 43.639h512.98a28.499 28.499 0 0 0 24.046-43.639zM320 108.97l75.7 118.45H320l-56.998 56.998-33.842-33.842z" fill="#eee" style="fill:#cfd8dc;stroke-width:.89059"/>',
}

export const Snowpack = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
