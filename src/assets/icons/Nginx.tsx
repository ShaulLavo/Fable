import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M11.801 1.442a.398.398 0 0 1 .398 0l8.884 5.106a.402.402 0 0 1 .201.347v10.21a.4.4 0 0 1-.201.346l-8.884 5.107a.398.398 0 0 1-.398 0l-8.884-5.107a.4.4 0 0 1-.201-.346V6.895c0-.143.077-.275.201-.347l8.884-5.106zM8.976 10.18l5.531 6.625s.65.571 1.577.514c1.12-.07 1.232-1.009 1.232-1.009l.001-8.694-.001-.008a1.257 1.257 0 0 0-2.461-.005l-.003.013.005 6.107-5.678-6.688s-.454-.512-1.516-.396c-1.044.115-1.156 1.009-1.156 1.009l.01 8.625.002.013a1.244 1.244 0 0 0 2.459-.013z" fill="#43a047"/>',
}

export const Nginx = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
