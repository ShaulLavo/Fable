import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m19 20h-15c-1.111 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.011 1.5-1.93 1.5z" fill="#45403d"/><path d="m9.031 21.532v-8.834-1.085l1.719-0.01c2.814 0 4.151 0.603 4.2 3.024-0.09 2.483-1.346 3.187-4.21 3.026v3.879h-1.709zm1.699-5.246l-0.01-3.377q2.814-0.181 2.794 1.709-0.02 1.889-2.784 1.668z" fill="#ddc7a1" fill-rule="evenodd"/><path d="m15.815 21.542l0.02-7.929 3.93 3.612 3.829-3.753 0.04 8.09-7.819-0.02z" fill="#d8a657"/><path d="m15.815 11.603l3.94 3.748 3.819-3.789-7.759 0.041z" fill="#d8a657"/>',
}

export const FolderPhpmailerOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
