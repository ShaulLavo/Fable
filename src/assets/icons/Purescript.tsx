import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 100 100' },
	c: '<g fill="#42a5f5"><path d="M98.079 38.548 79.221 19.68l-5.086 5.088L90.448 41.09 74.135 57.41l5.086 5.087 18.858-18.861a3.59 3.59 0 0 0 1.055-2.55 3.577 3.577 0 0 0-1.055-2.539M25.483 42.794l-5.089-5.089L1.53 56.568a3.565 3.565 0 0 0-1.048 2.545c0 .961.371 1.864 1.048 2.542L20.394 80.52l5.089-5.087-16.321-16.32z" clip-path="url(#SVGID_2_)" transform="translate(.193 -.1)"/><path transform="translate(-306.647 -629.15) scale(1.1917)" clip-path="url(#SVGID_2_)" d="m316.68 557.77-6.46-6.03h-28.38l6.46 6.03zM310.22 572.9l6.46-6.04H288.3l-6.46 6.04zM316.68 588.02l-6.46-6.04h-28.38l6.46 6.04z"/></g>',
}

export const Purescript = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
