import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><g transform="matrix(.675 0 0 .675 9.8 6.784)" fill="#b2dfdb"><path d="m13 9h5.5l-5.5-5.5v5.5m-7-7h8l6 6v12c0 1.097-0.903 2-2 2h-12c-1.11 0-2-0.9-2-2v-16c0-1.11 0.89-2 2-2m0 18h12v-8l-4 4-2-2-6 6m2-11c-1.097 0-2 0.903-2 2s0.903 2 2 2 2-0.903 2-2-0.903-2-2-2z" fill="#89b482" fill-rule="nonzero"/></g>',
}

export const FolderImages = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
