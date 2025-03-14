import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#455A64" fill-rule="nonzero" style="fill:#45403d"/><path d="m22.636 19.674v-7.8737h-10.498v7.8737h-1.0508v1.0498h12.599v-1.0487zm-4.199 0h-2.0995v-.52434h2.0995zm3.1493-1.5741h-8.3981v-5.2499h8.3981z" style="fill:#7daea3;stroke-width:1.0811"/>',
}

export const FolderVmOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
