import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 16 16' },
	c: '<path d="M8 7.54545H10.8571L8 10.7273V7.54545ZM9.71429 5H6.28571L4 7.54545L8 12L12 7.54545L9.71429 5Z" fill="#EF1362"/> <rect x="2.5" y="2.5" width="11" height="11" rx="1.5" stroke="#EF1362"/>',
}

export const Bundler = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
