import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 82.5 82' },
	c: '<path fill="#4a2ec6" d="M67.18022 24.97022c.66 1.74 1.04 3.62 1.04 5.59 0 8.7-7.05 15.75-15.75 15.75s-15.75-7.05-15.75-15.75 7.04-15.76 15.74-15.76c2.31 0 4.49.51 6.47 1.4-6.16-4.71-13.86-7.51-22.22-7.51-20.24 0-36.65 16.41-36.65 36.65s16.41 36.65 36.65 36.65 36.65-16.41 36.65-36.65c0-7.54-2.28-14.54-6.18-20.37z"/> <circle cx="66.86022" cy="15.76022" r="15.75" fill="#6e58d1"/>',
}

export const Moon = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
