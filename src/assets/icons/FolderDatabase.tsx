import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m17.761 8.8588c-3.1558 0-5.7119 1.278-5.7119 2.8559 0 1.5779 2.5561 2.8559 5.7119 2.8559 3.1558 0 5.7119-1.278 5.7119-2.8559 0-1.5779-2.5561-2.8559-5.7119-2.8559m-5.7119 4.2839v2.1419c0 1.5779 2.5561 2.8559 5.7119 2.8559 3.1558 0 5.7119-1.278 5.7119-2.8559v-2.1419c0 1.5779-2.5561 2.8559-5.7119 2.8559-3.1558 0-5.7119-1.278-5.7119-2.8559m0 3.5699v2.1419c0 1.5779 2.5561 2.8559 5.7119 2.8559 3.1558 0 5.7119-1.278 5.7119-2.8559v-2.1419c0 1.5779-2.5561 2.8559-5.7119 2.8559-3.1558 0-5.7119-1.278-5.7119-2.8559z" fill="#d8a657" stroke-width=".71398"/>',
}

export const FolderDatabase = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
