import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m19 20h-15c-1.11 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><path d="m21.598 12.059h-6.0846v-1.2169h6.0846m-2.4339 6.0845h-3.6507v-1.2169h3.6507m2.4339-1.2169h-6.0846v-1.2169h6.0846m0.60846-4.2592h-7.3015a1.2169 1.2169 0 0 0 -1.2169 1.2169v7.3014a1.2169 1.2169 0 0 0 1.2169 1.2169h7.3015a1.2169 1.2169 0 0 0 1.2169 -1.2169v-7.3014a1.2169 1.2169 0 0 0 -1.2169 -1.2169m-9.7352 2.4338h-1.2169v8.5183a1.2169 1.2169 0 0 0 1.2169 1.2169h8.5184v-1.2169h-8.5184z" fill="#d8a657" stroke-width=".60846"/>',
}

export const FolderAssetOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
