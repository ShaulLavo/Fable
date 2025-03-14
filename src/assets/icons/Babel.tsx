import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 16 16' },
	c: '<defs><style>.cls-1{fill:#f4ba00;}</style></defs><path class="cls-1" d="M2.33,13.69A48.32,48.32,0,0,0,7.1,3.47C7.47,2.58,9,2.27,9,2.27S5.48,11.54,2.7,15c.84-2,.52-1.68.52-1.68Z"/><path class="cls-1" d="M3.7,4.78,5.48,3.47l-.42-.1A9.69,9.69,0,0,1,9.67,1.64c2.62-.21,3.78.78,3.83,1.57.1,1.94-1.68,3.56-7.39,5.34l.26-1.46s6-1.84,5.66-3.57c-.21-1.15-3-1-7,1,.31-.47,0-.37,0-.37L4,4.94Z"/><path class="cls-1" d="M6.21,8.5s4.35-1.41,4.25-.31-3.67,3.4-6.29,4.29a3.49,3.49,0,0,1-.37.58,14.85,14.85,0,0,0,4.82-2c.21.16,0,.26,0,.26s-3.14,2-5,2.26c-.11.26,0,.15,0,.15A13.66,13.66,0,0,0,11,9.92c3.15-3.3-1.41-3.41-1.41-3.41"/>',
}

export const Babel = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
