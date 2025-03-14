import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#DCE775" fill-rule="nonzero" style="fill:#45403d"/><path d="m21.589 10.926v8.2791h-8.28v-8.2791h8.28m.65088-1.1832h-9.5808a.53024 .53024 0 0 0 -.53226 .53227v9.5808c0 .23622.23622.53226.53226.53226h9.5808c.23622 0 .53226-.29604.53226-.53226v-9.5808c0-.29604-.29604-.53227-.53226-.53227zm-5.3825 2.3653h3.5484v1.1832h-3.5484zm0 2.3663h3.5484v1.1821h-3.5484zm0 2.3653h3.5484v1.1832h-3.5484zm-2.3653-4.7316h1.1832v1.1832h-1.1832zm0 2.3663h1.1832v1.1821h-1.1832zm0 2.3653h1.1832v1.1832h-1.1832z" style="fill:#a9b665;stroke-width:1.0138"/>',
}

export const FolderMappings = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
