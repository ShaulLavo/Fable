import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><path d="m13.313 11.766h-1.1222v7.8554c0 .61721.50499 1.1222 1.1222 1.1222h7.8554v-1.1222h-7.8554zm8.9776-2.2444h-6.7332c-.61721 0-1.1222.50499-1.1222 1.1222v6.7332c0 .61721.50499 1.1222 1.1222 1.1222h6.7332c.61721 0 1.1222-.50499 1.1222-1.1222v-6.7332c0-.61721-.50499-1.1222-1.1222-1.1222zm-.5611 5.0499h-5.611v-1.1222h5.611zm-2.2444 2.2444h-3.3666v-1.1222h3.3666zm2.2444-4.4888h-5.611v-1.1222h5.611z" style="fill:#a9b665;stroke-width:1.0202"/>',
}

export const FolderMetaOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
