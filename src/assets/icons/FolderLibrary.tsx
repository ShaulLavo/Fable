import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m17.39 12.544a2.0508 2.0508 0 0 0 2.0508 -2.0508 2.0508 2.0508 0 0 0 -2.0508 -2.0508 2.0508 2.0508 0 0 0 -2.0508 2.0508 2.0508 2.0508 0 0 0 2.0508 2.0508m0 2.42c-1.6133-1.4971-3.7599-2.42-6.1525-2.42v7.5198c2.3927 0 4.5392 0.92288 6.1525 2.42 1.6133-1.4971 3.7599-2.42 6.1525-2.42v-7.5198c-2.3927 0-4.5392 0.92288-6.1525 2.42z" fill="#a9b665" stroke-width=".68362"/>',
}

export const FolderLibrary = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
