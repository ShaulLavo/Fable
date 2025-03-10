import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m13.314 11.766h-1.1222v7.8554c0 .61774.50446 1.1222 1.1222 1.1222h7.8554v-1.1222h-7.8554zm8.9776-2.2444h-6.7332c-.61668 0-1.1222.50446-1.1222 1.1222v6.7332c0 .61774.50552 1.1222 1.1222 1.1222h6.7332c.61774 0 1.1222-.50446 1.1222-1.1222v-6.7332c0-.61774-.50446-1.1222-1.1222-1.1222zm-.5611 5.0499h-2.2444v2.2444h-1.1222v-2.2444h-2.2444v-1.1222h2.2444v-2.2444h1.1222v2.2444h2.2444z" style="fill:#a9b665;stroke-width:1.0688"/>',
}

export const FolderUtils = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
