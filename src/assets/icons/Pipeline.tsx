import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 32 32' },
	c: '<path fill="#f57f17" d="M20 23h-8.14a4.17 4.17 0 0 0-.43-1L22 11.43a3.86 3.86 0 0 0 2 .57 4 4 0 1 0-3.86-5h-8.28a4 4 0 1 0 0 2h8.28c.099.35.244.687.43 1L10 20.57A3.86 3.86 0 0 0 8 20a4 4 0 1 0 3.86 5H20v3h8v-8h-8v3zM8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm16-4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM8 26a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm14-4h4v4h-4v-4z"/>',
}

export const Pipeline = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
