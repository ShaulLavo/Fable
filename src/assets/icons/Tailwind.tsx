import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M6.5 9.8c.733-2.934 2.567-4.4 5.5-4.4 4.4 0 4.951 3.3 7.151 3.85 1.467.367 2.75-.184 3.85-1.65-.732 2.933-2.566 4.4-5.5 4.4-4.4 0-4.95-3.3-7.15-3.85-1.468-.368-2.751.183-3.852 1.65zM.998 16.4c.733-2.933 2.567-4.4 5.5-4.4 4.401 0 4.95 3.3 7.152 3.85 1.466.368 2.75-.183 3.85-1.65-.734 2.934-2.567 4.4-5.5 4.4-4.401 0-4.951-3.3-7.152-3.85-1.466-.367-2.75.184-3.85 1.65z" style="fill:#4db6ac"/>',
}

export const Tailwind = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
