import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 720 720' },
	c: '<defs><symbol id="a" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-opacity="100%" stroke-width="60" stroke="#00979c" d="M174 30a10.5 10.1 0 0 0 0 280C364 320 344 30 544 30a10.5 10.1 0 0 1 0 280C354 320 374 30 174 30"/><path d="M528 205v-32.8h-32.5v-13.7H528V126h13.9v32.5h32.5v13.7h-32.5V205H528z" text-anchor="middle" fill="#00979c" stroke-width="20" stroke="#00979c" font-family="sans-serif" font-size="167"/><path fill="#00979c" stroke="#00979c" stroke-width="23.6" transform="matrix(1.56 0 0 .64 -366 .528)" d="M321 266v-17.4h53.3V266H321z"/></symbol></defs><use x="20.063" y="360.85" transform="matrix(.997 0 0 .997 -18.596 -159.19)" xlink:href="#a"/>',
}

export const Arduino = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
