import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m16.275 21.115-2.538 2e-3v-3.807l-1.903 2.441-1.903-2.441v3.807h-2.538v-7.613h2.538l1.903 2.538 1.903-2.538 2.538-3e-3z" fill="#7daea3"/><path d="m20.064 21.749-3.154-4.439h1.903v-3.806h2.538v3.806h1.903z" fill="#7daea3"/></g>',
}

export const FolderMarkdown = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
