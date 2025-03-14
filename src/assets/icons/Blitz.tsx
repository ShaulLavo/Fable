import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg fill="none" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="m8.613 11.997c1.333 0 2.588 0.621 3.389 1.677l3.454 4.552a0.279 0.279 0 0 1 0.025 0.297l-1.991 3.825a0.284 0.284 0 0 1-0.477 0.04l-7.901-10.39h3.501zm2.375-10.385 7.9 10.39h-3.5a4.253 4.253 0 0 1-3.39-1.676l-3.452-4.552a0.278 0.278 0 0 1-0.025-0.297l1.99-3.825a0.284 0.284 0 0 1 0.478-0.04z" fill="#7c4dff"/>',
}

export const Blitz = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
