import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m21.159 10.275 1.3031 2.6062h-1.9547l-1.3031-2.6062h-1.3031l1.3031 2.6062h-1.9547l-1.3031-2.6062h-1.3031l1.3031 2.6062h-1.9547l-1.3031-2.6062h-0.65156a1.3031 1.3031 0 0 0 -1.3031 1.3031v7.8188a1.3031 1.3031 0 0 0 1.3031 1.3031h10.425a1.3031 1.3031 0 0 0 1.3031 -1.3031v-9.1219z" fill="#e78a4e" stroke-width=".65156"/>',
}

export const FolderVideo = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
