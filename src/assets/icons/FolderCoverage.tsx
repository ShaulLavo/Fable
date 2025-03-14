import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#45403d"/><path d="m16.955 17.786-2.367-2.367.83438-.83438 1.5327 1.5267 3.8997-3.8997.83438.8403m-3.5506-4.7341-5.3259 2.367v3.5506c0 3.2843 2.2724 6.3555 5.3259 7.1011 3.0535-.74562 5.3259-3.8169 5.3259-7.1011v-3.5506z" style="fill:#89b482;stroke-width:.59176"/>',
}

export const FolderCoverage = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
