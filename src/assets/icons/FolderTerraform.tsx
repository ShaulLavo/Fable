import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><g transform="matrix(.23307 0 0 .23307 11.419 8.7057)" fill="#7daea3"><path class="rect-dark" d="m36.4 39.13 16.4-9.46v-18.95l-16.4 9.48"/><path class="rect-light" d="m18.2 10.72 16.4 9.48v18.93l-16.4-9.47"/><path class="rect-light" d="m0 19.09 16.4 9.47v-18.94l-16.4-9.47m18.2 50.53 16.4 9.47v-18.94l-16.4-9.47"/></g>',
}

export const FolderTerraform = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
