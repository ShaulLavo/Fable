import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m19 20h-15c-1.11 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.01 1.5-1.93 1.5z" fill="#45403d" fill-rule="nonzero"/><g transform="matrix(.675 0 0 .675 9.8 6.784)" fill="#45403d"><path d="m13 9h5.5l-5.5-5.5v5.5m-7-7h8l6 6v12c0 1.097-0.903 2-2 2h-12c-1.11 0-2-0.9-2-2v-16c0-1.11 0.89-2 2-2m9 16v-2h-9v2h9m3-4v-2h-12v2h12z" fill="#7daea3" fill-rule="nonzero"/></g>',
}

export const FolderDocsOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
