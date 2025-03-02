import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M3.5 20c-.4 0-.8-.2-1.1-.5-.3-.3-.4-.7-.4-1v-13c0-.4.1-.7.4-1S3.1 4 3.5 4h7L12 5.5h8.5c.4 0 .7.2 1 .5s.5.6.5 1v11.5c0 .4-.2.7-.5 1-.3.3-.7.5-1 .5h-17z" style="fill:#ab47bc"/><path d="m16.8 20.8-.3-1.7-.6-.3c-.2-.1-.4-.2-.5-.3l-1.6.7-1.3-2.3 1.5-1.1v-1.2l-1.5-1.1 1.3-2.3 1.6.7c.1-.1.3-.2.5-.3s.4-.2.6-.2l.3-1.8h2.6l.3 1.7.6.3c.2.1.4.2.5.4l1.6-.7 1.3 2.3-1.5 1.1v1.2l1.5 1.1-1.3 2.3-1.6-.7c-.1.1-.3.2-.5.4l-.6.3-.3 1.7h-2.6zm1.2-3.7c.5 0 .9-.2 1.3-.5s.5-.8.5-1.3-.2-.9-.5-1.3c-.4-.4-.8-.5-1.3-.5s-.9.2-1.3.5c-.4.4-.5.8-.5 1.3s.2.9.5 1.3c.4.3.8.5 1.3.5z" style="fill:#e1bee7"/>',
}

export const FolderDirectives = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
