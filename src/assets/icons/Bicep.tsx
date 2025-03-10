import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M3.45 18.021s.95-10.685 3.8-14.57l4.748.95-.95 2.935h-1.9v6.8h.95c1.9-2.915 5.833-3.98 8.207-2.915 3.134 1.453 2.85 5.831 0 7.769-2.28 1.558-9.156 2.916-14.855-.969z" style="fill:#fbc02d;stroke-width:.94982"/>',
}

export const Bicep = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
