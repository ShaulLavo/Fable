import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 300 300' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" version="1.1" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"> <g transform="matrix(.98233 0 0 .98233 2.648 2.6505)" fill-rule="nonzero"> <g transform="matrix(.94312 0 0 .94312 8.5246 8.532)"> <path d="m195.02 30h75v75h-75zm-82.515 0h75v75h-75zm-82.5 0h75v75h-75zm165.02 82.5h75v75h-75z" fill="#ffb300"/> <path d="m112.5 112.5h75v75h-75zm0 82.5h75v75h-75zm82.515 0h75v75h-75zm-165.02 0h75v75h-75z" fill="#e0e0e0"/> </g> </g>',
}

export const Pnpm = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
