import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 400 400' },
	c: '<g transform="translate(-6.66 100.49)" fill="#2196f3" fill-opacity=".604"><ellipse transform="matrix(-.3005 .95378 -.96071 -.27755 0 0)" cx="37.18" cy="-256.97" rx="110.14" ry="139.47"/><ellipse transform="matrix(-.3005 .95378 -.96071 -.27755 0 0)" cx="38.835" cy="-197.03" rx="110.14" ry="139.47"/><ellipse transform="matrix(-.95378 -.3005 .27755 -.96071 0 0)" cx="-224.78" cy="-5.066" rx="110.14" ry="139.47"/><ellipse transform="matrix(-.95378 -.3005 .27755 -.96071 0 0)" cx="-228.55" cy="-60.291" rx="110.14" ry="139.47"/></g>',
}

export const Dotjs = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
