import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m11.373 9.0951v5.9193l2.0892-2.0892 2.0892 2.4373c.69638.69638.69638 1.3928.69638 1.3928v4.1783h2.7855v-4.8747s0-.69638-.36908-1.3928-1.0237-1.3928-1.0237-1.3928l-2.0892-2.3816 1.741-1.7967m4.5265 0-3.1059 3.1128.32034.36908s.64764.69638 1.0237 1.3928c.14624.27855.22981.55014.27855.78691l3.5724-3.5724" fill="#a9b665" stroke-width=".69638"/>',
}

export const FolderRoute = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
