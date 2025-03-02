import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 281.25 281.25' },
	c: '<path d="M57.857 40.232h37.088l46.022 140.044 46.7-140.044h36.546l33.57 200.781h-36.547l-21.387-126.796-42.367 126.796h-33.435L82.222 114.217 60.428 241.013H23.476z" fill="#42a5f5" stroke-width=".756" aria-label="M"/>',
}

export const Merlin = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
