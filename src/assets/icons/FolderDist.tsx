import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m18.575 11.113h-2.5763v-1.2881h2.5763m3.8644 1.2881h-2.5763v-1.2881l-1.2881-1.2881h-2.5763l-1.2881 1.2881v1.2881h-2.5763c-0.71492 0-1.2881 0.57322-1.2881 1.2881v7.0847a1.2881 1.2881 0 0 0 1.2881 1.2881h10.305a1.2881 1.2881 0 0 0 1.2881 -1.2881v-7.0847c0-0.71492-0.57966-1.2881-1.2881-1.2881z" fill="#ea6962" stroke-width=".64407"/>',
}

export const FolderDist = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
