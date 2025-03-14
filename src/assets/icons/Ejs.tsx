import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M8.046 4.862.908 12l7.138 7.138 2.71-2.691L6.308 12l4.446-4.447z" fill="#ffca28"/><ellipse cx="14.543" cy="7.812" rx="2.101" ry="2.798" fill="none" stroke="#ffca28" stroke-width="1.455"/><path fill="#ffca28" d="m20.616 4.152 1.47.69-7.783 15.005-1.47-.69z"/><ellipse cx="20.35" cy="16.198" rx="2.101" ry="2.798" fill="none" stroke="#ffca28" stroke-width="1.455"/>',
}

export const Ejs = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
