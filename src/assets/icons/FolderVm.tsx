import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#455A64" fill-rule="nonzero" style="fill:#45403d"/><path d="m22.636 19.674v-7.8737h-10.498v7.8737h-1.0508v1.0498h12.599v-1.0487zm-4.199 0h-2.0995v-.52434h2.0995zm3.1493-1.5741h-8.3981v-5.2499h8.3981z" style="fill:#7daea3;stroke-width:1.0811"/>',
}

export const FolderVm = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
