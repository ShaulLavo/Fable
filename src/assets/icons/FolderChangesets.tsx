import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2Z" fill="#45403d" /> <path d="M17.338 16.5c0-2.485-1.892-4.5-4.225-4.5H11c0 2.485 1.892 4.5 4.225 4.5h2.113ZM17.338 16.5c0 2.485-1.892 4.5-4.225 4.5h-.845c0-2.485 1.891-4.5 4.225-4.5h.845Z" fill="#64B5F6" /> <path d="M16.662 16.5c0-2.485 1.892-4.5 4.225-4.5H23c0 2.485-1.892 4.5-4.225 4.5h-2.113ZM16.662 16.5c0 2.485 1.892 4.5 4.225 4.5h.845c0-2.485-1.891-4.5-4.225-4.5h-.845Z" fill="#B3E5FC" /> <path d="M17 14.733c.218.543.338 1.14.338 1.767s-.12 1.224-.338 1.767a4.738 4.738 0 0 1-.338-1.767c0-.627.12-1.224.338-1.767Z" fill="#B3E5FC" />',
}

export const FolderChangesets = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
