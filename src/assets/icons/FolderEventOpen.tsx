import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#e57373" style="fill:#45403d"/><path d="m23.626 20.067v.65496h-11.789v-.65496l1.3099-1.3099v-3.9298c0-2.0304 1.3296-3.8184 3.2748-4.3948v-.18994a1.3099 1.3099 0 0 1 1.3099-1.3099 1.3099 1.3099 0 0 1 1.3099 1.3099v.18994c1.9452.57637 3.2748 2.3644 3.2748 4.3948v3.9298l1.3099 1.3099m-4.5847 1.3099a1.3099 1.3099 0 0 1-1.3099 1.3099 1.3099 1.3099 0 0 1-1.3099-1.3099" style="fill:#d8a657;stroke-width:.65496"/>',
}

export const FolderEventOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
