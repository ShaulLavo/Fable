import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#e57373" style="fill:#45403d"/><path d="m10.337 9.7585h10.435a1.2277 1.2277 0 0 1 1.2277 1.2277v1.2277h-2.4554v-1.2277h-7.9801v7.3663h5.5247v1.2277h-6.7524a1.2277 1.2277 0 0 1-1.2277-1.2277v-7.3663a1.2277 1.2277 0 0 1 1.2277-1.2277m8.594 3.6831h3.6831a.61386.61386 0 0 1 .61386.61386v6.1386a.61386.61386 0 0 1-.61386.61386h-3.6831a.61386.61386 0 0 1-.61386-.61386v-6.1386a.61386.61386 0 0 1 .61386-.61386m.61386 1.2277v4.297h2.4554v-4.297z" style="fill:#ea6962;stroke-width:.61386"/>',
}

export const FolderMobileOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
