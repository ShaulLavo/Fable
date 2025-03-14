import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#45403d"/><path d="m19.017 17.774a1.1955 1.1955 0 0 0 1.1955 -1.1955c0-.66351-.53798-1.1955-1.1955-1.1955a1.1955 1.1955 0 0 0 -1.1955 1.1955 1.1955 1.1955 0 0 0 1.1955 1.1955m3.5865-5.3798a1.1955 1.1955 0 0 1 1.1955 1.1955v5.9776a1.1955 1.1955 0 0 1 -1.1955 1.1955h-7.1731a1.1955 1.1955 0 0 1 -1.1955 -1.1955v-5.9776c0-.66351.53798-1.1955 1.1955-1.1955h.59776v-1.1955a2.9888 2.9888 0 0 1 2.9888 -2.9888 2.9888 2.9888 0 0 1 2.9888 2.9888v1.1955h.59776m-3.5865-2.9888a1.7933 1.7933 0 0 0 -1.7933 1.7933v1.1955h3.5865v-1.1955a1.7933 1.7933 0 0 0 -1.7933 -1.7933z" style="fill:#e78a4e;stroke-width:.59776"/>',
}

export const FolderSecure = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
