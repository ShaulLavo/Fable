import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M9.757 19.818H6.751v-5.882q0-2.381-1.737-2.381-.868 0-1.438.663-.56.662-.56 1.718v5.882H0V4.533h3.016v6.508h.037Q4.24 9.239 6.247 9.239q3.51 0 3.51 4.239z" fill="#0277bd" aria-label="h"/><path d="M13.073 11.448v2h-2v2h2v2h2v-2h2v-2h-2v-2zm7 0v2h-2v2h2v2h2v-2h2v-2h-2v-2z" fill="#0277bd"/>',
}

export const Hpp = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
