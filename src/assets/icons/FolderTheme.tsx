import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m21.043 15.266a1.0706 1.0706 0 0 1 -1.0706 -1.0706 1.0706 1.0706 0 0 1 1.0706 -1.0706 1.0706 1.0706 0 0 1 1.0706 1.0706 1.0706 1.0706 0 0 1 -1.0706 1.0706m-2.1412-2.855a1.0706 1.0706 0 0 1 -1.0706 -1.0706 1.0706 1.0706 0 0 1 1.0706 -1.0706 1.0706 1.0706 0 0 1 1.0706 1.0706 1.0706 1.0706 0 0 1 -1.0706 1.0706m-3.5687 0a1.0706 1.0706 0 0 1 -1.0706 -1.0706 1.0706 1.0706 0 0 1 1.0706 -1.0706 1.0706 1.0706 0 0 1 1.0706 1.0706 1.0706 1.0706 0 0 1 -1.0706 1.0706m-2.1412 2.855a1.0706 1.0706 0 0 1 -1.0706 -1.0706 1.0706 1.0706 0 0 1 1.0706 -1.0706 1.0706 1.0706 0 0 1 1.0706 1.0706 1.0706 1.0706 0 0 1 -1.0706 1.0706m3.9256-6.4237a6.4237 6.4237 0 0 0 -6.4237 6.4237 6.4237 6.4237 0 0 0 6.4237 6.4237 1.0706 1.0706 0 0 0 1.0706 -1.0706c0-0.27836-0.10706-0.52817-0.27836-0.71374-0.16416-0.19271-0.27122-0.44252-0.27122-0.71374a1.0706 1.0706 0 0 1 1.0706 -1.0706h1.2633a3.5687 3.5687 0 0 0 3.5687 -3.5687c0-3.1548-2.8764-5.71-6.4237-5.71z" fill="#7daea3" stroke-width=".71374"/>',
}

export const FolderTheme = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
