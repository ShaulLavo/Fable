import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#45403d"/><path d="m12.276 14.245h.92216v-2.4591c0-.6824.5533-1.2295 1.2295-1.2295h2.4591v-.92216a1.5369 1.5369 0 0 1 1.5369 -1.5369 1.5369 1.5369 0 0 1 1.5369 1.5369v.92216h2.4591a1.2295 1.2295 0 0 1 1.2295 1.2295v2.3361h-.92216c-.92216 0-1.6599.73773-1.6599 1.6599 0 .92216.73773 1.6599 1.6599 1.6599h.92216v2.3361a1.2295 1.2295 0 0 1 -1.2295 1.2295h-2.3361v-.92216c0-.92216-.73773-1.6599-1.6599-1.6599-.92216 0-1.6599.73773-1.6599 1.6599v.92216h-2.3361a1.2295 1.2295 0 0 1 -1.2295 -1.2295v-2.4591h-.92216a1.5369 1.5369 0 0 1 -1.5369 -1.5369 1.5369 1.5369 0 0 1 1.5369 -1.5369z" style="fill:#7daea3;stroke-width:.61477"/>',
}

export const FolderPlugin = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
