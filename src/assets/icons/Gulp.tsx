import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M8.562 16.042a595.106 595.106 0 0 1-.48-4.983c.001-.042-.226-.076-.506-.076h-.508V9.05h3.966V5.3l1.871-1.125c1.14-.685 1.978-1.125 2.144-1.125.4 0 .866.506.866.94 0 .189-.057.421-.127.517-.07.095-.722.53-1.45.965l-1.321.793-.028 1.392-.029 1.393h3.972v1.933h-.98l-.494 4.983-.495 4.983H9.047l-.485-4.907z" fill="#e53935"/>',
}

export const Gulp = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
