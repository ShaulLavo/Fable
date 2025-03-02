import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<g fill="#90a4ae"><path d="M1.123 4.881v8.456l3.643-3.643a.825.825 0 0 0 0-1.17zM5.573 18.947v-8.456L1.93 14.134a.825.825 0 0 0 0 1.17zM22.952 8.25 12.848 9.316l-.033.034 4.518 4.518zM6.595 4.64s.044 6.245-.006 8.414c-.037 1.619.703 2.106 1.41 2.848 1.018 1.067 3.022 2.968 3.022 2.968.396.39 1.025.393 1.418 0l3.485-3.485a1 1 0 0 0 0-1.417z"/></g>',
}

export const Kivy = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
