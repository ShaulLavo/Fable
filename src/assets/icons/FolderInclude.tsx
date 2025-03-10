import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m20.788 15.981h-2.4338v2.4338h-1.2169v-2.4338h-2.4338v-1.217h2.4338v-2.4338h1.2169v2.4338h2.4338m-3.0423-5.4761a6.0845 6.0845 0 0 0 -6.0845 6.0845 6.0845 6.0845 0 0 0 6.0845 6.0845 6.0845 6.0845 0 0 0 6.0845 -6.0845 6.0845 6.0845 0 0 0 -6.0845 -6.0845z" fill="#7daea3" stroke-width=".60845"/>',
}

export const FolderInclude = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
