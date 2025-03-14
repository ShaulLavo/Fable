import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg enable-background="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"> <style type="text/css"> .st0{fill:#757575;} .st1{fill:#c2185b;} .st2{fill:#FFFFFF;} </style> <path class="st0" d="M13,9h5.5L13,3.5V9 M6,2h8l6,6v12c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2V4C4,2.9,4.9,2,6,2 M15,18v-2H6v2H15 M18,14v-2H6v2H18z"/> <path class="st1" d="m10.1 10.1h13v13h-13v-13z"/> <g transform="translate(-.55 .05)"> <path class="st2" d="m14 14.6h-1.7v-1.1h4.7v1.1h-1.7v5h-1.3z"/> <path class="st2" d="m17.9 13.5h1.3v5h2.8v1.1h-4v-6.1z"/> </g>',
}

export const Tobimake = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
