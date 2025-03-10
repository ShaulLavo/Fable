import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg fill="none" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <g transform="matrix(1.0116 0 0 1.0116 -.43277 -.64469)"> <path d="m9.145 22c1.737 0 3.146-1.419 3.146-3.167v-3.166h-3.146c-1.735 0-3.145 1.418-3.145 3.166s1.41 3.167 3.145 3.167z" fill="#00e676"/> <path d="m6 12.5c0-1.748 1.41-3.167 3.145-3.167h3.146v6.334h-3.146c-1.735 0-3.145-1.419-3.145-3.167z" fill="#7c4dff"/> <path d="M 6,6.167 C 6,4.419 7.41,3 9.145,3 h 3.146 V 9.333 H 9.145 C 7.41,9.333 6,7.915 6,6.167 Z" fill="#f4511e"/> <path d="m12.29 3h3.146c1.736 0 3.145 1.419 3.145 3.167s-1.409 3.166-3.145 3.166h-3.146z" fill="#ff8a65"/> <path d="m18.581 12.5c0 1.748-1.409 3.167-3.145 3.167s-3.146-1.419-3.146-3.167 1.41-3.167 3.146-3.167 3.145 1.419 3.145 3.167z" fill="#29b6f6"/> </g>',
}

export const Figma = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
