import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="m13 9h1v2h-3v-4h2v2m5.5 0-2.12-2.12 1.25-1.25 2.37 2.37v2h-2v1h-3v-2h3.5m-5.5-5.5v-1.5h-1v2h1v2h-2v-2h-2v-2h-1v2h-2v1h-2v-1c0-1.11 0.89-2 2-2h8l2.36 2.36-1.25 1.25-2.11-2.11m7 16.5a2 2 0 0 1-2 2h-2v-2h2v-1h2v1m-2-5h2v3h-2v-3m-6 7v-2h3v2h-3m-4 0v-2h3v2h-3m-2 0c-1.11 0-2-0.9-2-2v-2h2v2h1v2h-1m-2-8h2v3h-2v-3m0-4h2v3h-2v-3m14 1h2v3h-2v-3m-14-5h2v3h-2v-3z" fill="#90a4ae"/>',
}

export const Template = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
