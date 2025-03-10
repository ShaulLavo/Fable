import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.01 1.5-1.93 1.5z" fill="#e57373" style="fill:#45403d"/><path d="m16.212 20.766v-3.8625h2.575v3.8625h3.2188v-5.15h1.9312l-6.4375-5.7938-6.4375 5.7938h1.9312v5.15z" style="fill:#ea6962;stroke-width:.64375"/>',
}

export const FolderHomeOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
