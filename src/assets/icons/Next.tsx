import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M17.094 3.387C10.479-.503 2.074 4.248 2 11.917c-.07 7.49 7.854 12.326 14.454 9.03l-7.7-10.914-.05 8.016c0 .727-1.72.727-1.72 0l.015-11.065c0-.578 1.451-.625 1.755-.123l8.693 13.52c6.17-3.973 6.086-13.208-.353-16.994zm-.078 13.138l-1.672-2.41V6.984c0-.545 1.672-.545 1.672 0v9.54z" fill="#cfd8dc"/>',
}

export const Next = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
