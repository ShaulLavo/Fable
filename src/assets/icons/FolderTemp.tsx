import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m17.651 19.894a4.7612 4.7612 0 0 0 4.7612 -4.7612 4.7612 4.7612 0 0 0 -4.7612 -4.7612 4.7612 4.7612 0 0 0 -4.7612 4.7612 4.7612 4.7612 0 0 0 4.7612 4.7612m0-10.713a5.9515 5.9515 0 0 1 5.9515 5.9515 5.9515 5.9515 0 0 1 -5.9515 5.9515c-3.2912 0-5.9515-2.6782-5.9515-5.9515a5.9515 5.9515 0 0 1 5.9515 -5.9515m0.29758 2.9758v3.1245l2.6782 1.5891-0.44636 0.73204-3.1245-1.8747v-3.5709z" fill="#89b482" stroke="#89b482" stroke-miterlimit="4" stroke-width=".271"/>',
}

export const FolderTemp = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
