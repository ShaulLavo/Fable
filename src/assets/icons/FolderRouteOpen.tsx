import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><path d="m11.373 9.0955v5.9193l2.0892-2.0892 2.0892 2.4373c.69638.69638.69638 1.3928.69638 1.3928v4.1783h2.7855v-4.8747s0-.69638-.36908-1.3928-1.0237-1.3928-1.0237-1.3928l-2.0892-2.3816 1.741-1.7967m4.5265 0-3.1059 3.1128.32034.36908s.64764.69638 1.0237 1.3928c.14624.27855.22981.55014.27855.78691l3.5724-3.5724" fill="#a9b665" stroke-width=".69638"/>',
}

export const FolderRouteOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
