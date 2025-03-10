import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m19 20h-15c-1.111 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.011 1.5-1.93 1.5z" fill="#45403d"/><g fill="#ddc7a1"><path d="m9.875 11.625q3.828 0.472 6.563 0.469 2.69-3e-3 6.437-0.469v1.719q-3.747 0.466-6.437 0.469-2.735 2e-3 -6.563-0.469v-1.719z"/><path d="m12.844 13.008l-0.875 8.508 1.906-8e-3 0.281-8-1.312-0.5z"/><path d="m19.688 13l0.851 8.5h-1.883l-0.281-8 1.313-0.5z"/><rect x="9.797" y="15.172" width="13" height="1"/><rect x="15.797" y="13" width="1" height="2.375"/></g>',
}

export const FolderJinjaOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
