import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#e57373" style="fill:#45403d"/><path d="m16.955 17.786-2.367-2.367.83438-.83438 1.5327 1.5267 3.8997-3.8997.83438.8403m-3.5506-4.7341-5.3259 2.367v3.5506c0 3.2843 2.2724 6.3555 5.3259 7.1011 3.0535-.74562 5.3259-3.8169 5.3259-7.1011v-3.5506z" style="fill:#89b482;stroke-width:.59176"/>',
}

export const FolderCoverageOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
