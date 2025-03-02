import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m13.061 3.722-.707-.707a1 1 0 0 0-1.414 0L2.454 11.5a1 1 0 0 0 0 1.414l2.829 2.829a1 1 0 0 0 1.414 0l8.485-8.486a1 1 0 0 0 0-1.414l-.707-.707.707-.707 2.829 2.828-7.071 7.071 7.778 7.779a1 1 0 0 0 1.414 0l1.414-1.415a1 1 0 0 0 0-1.414l-6.364-6.364 5.657-5.657L15.182 1.6z" fill="#ffb300"/>',
}

export const Renovate = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
