import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m19 20h-15c-1.11 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.01 1.5-1.93 1.5z" fill="#45403d" fill-rule="nonzero"/><path d="m20.81 8.5203-5.9881 5.5056-3.3464-2.5223-1.383 0.80494 3.2986 3.0311-3.2986 3.0311 1.383 0.80733 3.3464-2.5223 5.9881 5.5032 2.9212-1.4188v-10.801zm0 3.6211v6.3966l-4.2445-3.1983z" fill="#7daea3" stroke-width=".97421"/>',
}

export const FolderVscodeOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
