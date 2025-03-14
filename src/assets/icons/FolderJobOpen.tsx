import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#7B1FA2" style="fill:#45403d"/><path d="m22.408 11.145h-2.543v-1.2715c0-.35049-.14042-.66781-.37592-.89668a1.2428 1.2428 0 0 0 -.89557 -.37592h-2.543c-.69987 0-1.2715.57273-1.2715 1.2715v1.2715h-2.543c-.69988 0-1.2715.57272-1.2715 1.2715v6.9943c0 .69877.57161 1.2715 1.2715 1.2715h10.172c.69876 0 1.2715-.57273 1.2715-1.2715v-6.9932c0-.69988-.57273-1.2715-1.2715-1.2715zm-6.3574-1.2715h2.543v1.2715h-2.543zm.63464 8.582-.63574-.63574 1.9073-1.9073-1.9073-1.9073.63574-.63574 2.543 2.543z" style="fill:#e78a4e;stroke-width:1.1056"/>',
}

export const FolderJobOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
