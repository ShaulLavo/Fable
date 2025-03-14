import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M12 14.5A2.5 2.5 0 0 1 9.5 12c0-1.387 1.113-2.5 2.5-2.5s2.5 1.113 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" style="fill:#b0bec5;stroke-width:1.25"/>',
}

export const Disc = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
