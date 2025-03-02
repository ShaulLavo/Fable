import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M8.852 10.182V8.364h.851V4.727h-.851v-.909L12.258 2l3.407 1.818v.91h-.852v3.636h.852v1.818h-1.073L9.226 13.49l.477-3.31h-.851zm4.258-1.818V4.727h-1.703v3.637h1.703zM8 22l.034-.218L15.792 17l.443 3.073L13.11 22H8zm.894-6.21L15.077 12l.443 3.064-7.154 4.409.528-3.682z" fill="#F4511E"/>',
}

export const Lighthouse = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
