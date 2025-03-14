import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m19 20h-15c-1.11 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.01 1.5-1.93 1.5z" fill="#45403d" fill-rule="nonzero"/><g transform="matrix(.62922 0 0 .62922 9.657 7.657)" fill="#cfd8dc"><path d="m14 20c1.097 0 2-0.903 2-2v-13h-7c-0.549 0-1 0.451-1 1v10h-3v-11c0-1.646 1.354-3 3-3h11c1.646 0 3 1.354 3 3v1h-4v13c0 1.646-1.354 3-3 3h-10c-1.646 0-3-1.354-3-3v-1h10c0 1.097 0.903 2 2 2z" fill="#68948a" fill-rule="nonzero"/></g>',
}

export const FolderScriptOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
