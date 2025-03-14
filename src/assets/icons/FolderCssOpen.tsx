import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m19 20h-15c-1.11 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.01 1.5-1.93 1.5z" fill="#45403d" fill-rule="nonzero"/><g transform="matrix(.67606 0 0 .67606 9.1073 7.3873)" fill="#bbdefb"><path d="m5 3l-0.65 3.34h13.59l-0.44 2.16h-13.58l-0.66 3.33h13.59l-0.76 3.81-5.48 1.81-4.75-1.81 0.33-1.64h-3.34l-0.79 4 7.85 3 9.05-3 1.2-6.03 0.24-1.21 1.54-7.76h-16.94z" fill="#7daea3" fill-rule="nonzero"/></g>',
}

export const FolderCssOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
