import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M11.94 2.984 2.928 21.017l9.875-8.47z" fill="#1e88e5"/><path d="m11.958 2.982.002.29 1.312 14.499-.002.006.023.26 7.363 2.978h.415l-.158-.31-.114-.228h-.001l-8.84-17.494z" fill="#e53935"/><path d="m8.558 16.13-5.627 4.884h17.743v-.016L8.559 16.13z" fill="#7cb342"/>',
}

export const Cmake = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
