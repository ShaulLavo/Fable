import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#45403d"/><path d="m23.284 16.949h-1.2881v1.2881h-3.8642v-1.9321h1.2881v-1.2881h-1.2881v-3.2202a1.2881 1.2881 0 0 0-1.2881-1.2881h-5.1523v-1.2881h-1.2881v5.1523h1.2881v-1.2881h3.8642v1.9321h-1.2881v1.2881h1.2881v3.2202a1.2881 1.2881 0 0 0 1.2881 1.2881h5.1523v1.2881h1.2881" style="fill:#89b482;stroke-width:.64403"/>',
}

export const FolderPipe = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
