import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 200 200' },
	c: '<path transform="translate(9.416 9.416) scale(.90584)" style="fill:#fbc02d" d="M100 56.1V1L72.4 41.8z"/><path transform="translate(9.416 9.416) scale(.90584)" style="fill:#b71c1c" d="m100 127.6 63.3-33-27.6-40.8L100 72.4z"/><path transform="translate(9.416 9.416) scale(.90584)" style="fill:#f9a825" d="M100 1v55.1l27.6-14.3z"/><path transform="translate(9.416 9.416) scale(.90584)" style="fill:#b71c1c" d="M100 143.9V199l99-51.5-27.6-40.8z"/><path transform="translate(9.416 9.416) scale(.90584)" style="fill:#e53935" d="m100 143.9-71.4-37.2L1 147.5l99 51.5zM100 127.6V72.4L64.3 53.8 36.7 94.6z"/>',
}

export const Red = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
