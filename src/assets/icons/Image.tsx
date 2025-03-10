import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M12.976 9.072h5.368l-5.368-5.367v5.367M6.144 2.241h7.808l5.856 5.855v11.711a1.952 1.952 0 0 1-1.952 1.952H6.145a1.951 1.951 0 0 1-1.952-1.952V4.192c0-1.083.868-1.951 1.952-1.951m0 17.567h11.71V12l-3.903 3.904L12 13.952l-5.856 5.856M8.096 9.073a1.952 1.952 0 0 0-1.952 1.952 1.952 1.952 0 0 0 1.952 1.951 1.952 1.952 0 0 0 1.952-1.951 1.952 1.952 0 0 0-1.952-1.952z" fill="#26a69a"/>',
}

export const Image = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
