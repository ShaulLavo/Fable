import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><path d="m13.313 11.766h-1.1222v7.8556c0 .61776.50447 1.1222 1.1222 1.1222h7.8556v-1.1222h-7.8556zm8.9778-2.2444h-6.7333c-.61669 0-1.1222.50447-1.1222 1.1222v6.7334c0 .61776.50554 1.1222 1.1222 1.1222h6.7333c.61776 0 1.1222-.50447 1.1222-1.1222v-6.7334c0-.61776-.50446-1.1222-1.1222-1.1222zm-.56111 5.05h-2.2445v2.2445h-1.1222v-2.2445h-2.2445v-1.1222h2.2445v-2.2444h1.1222v2.2444h2.2445z" style="fill:#a9b665;stroke-width:1.0688"/>',
}

export const FolderUtilsOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
