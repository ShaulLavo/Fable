import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M3.242 3.242h1.752v15.764h15.764v1.752H3.243V3.243m4.379 7.006h8.757v2.627H7.622V10.25m3.503 4.379h8.757v2.627h-8.757v-2.627M6.746 4.994h14.012v3.503h-1.751V6.746H8.497v1.751H6.747z" fill="#26a69a"/>',
}

export const Roadmap = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
