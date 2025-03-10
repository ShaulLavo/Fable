import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M11 7.5v5.11l4.71 2.79.79-1.28-4-2.37V7.5m0-5c-3.53 0-6.59 1.92-8.23 4.77L2 5v6.5h6.5L5.75 8.75C6.96 6.23 9.5 4.5 12.5 4.5A7.5 7.5 0 0 1 20 12a7.5 7.5 0 0 1-7.5 7.5c-3.27 0-6.03-2.09-7.06-5h-2.1c1.1 4.03 4.77 7 9.16 7 5.24 0 9.5-4.25 9.5-9.5a9.5 9.5 0 0 0-9.5-9.5z" style="fill:#8bc34a"/>',
}

export const Changelog = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
