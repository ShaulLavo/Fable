import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2h9m3-4v-2H6v2h12z" fill="#757575" style="fill:#757575"/><path d="M16.93 13c-.79 0-1.43.64-1.43 1.43v.84h2.145c.195 0 .355.285.355.48h-3.57c-.79 0-1.43.64-1.43 1.43v1.89c0 .79.64 1.43 1.43 1.43h.59v-1.34c0-.79.635-1.43 1.425-1.43h2.625c.79 0 1.43-.635 1.43-1.425V14.43c0-.79-.64-1.43-1.43-1.43zm-.36.805c.2 0 .36.06.36.355s-.16.446-.36.446c-.195 0-.355-.15-.355-.446s.16-.355.355-.355z" fill="#3c78aa"/><path d="M20.98 15.5v1.34c0 .79-.635 1.43-1.425 1.43H16.93c-.79 0-1.43.634-1.43 1.424v1.875A1.43 1.43 0 0 0 16.93 23h2.14a1.43 1.43 0 0 0 1.43-1.43v-.84h-2.146c-.195 0-.354-.284-.354-.48h3.57A1.43 1.43 0 0 0 23 18.82v-1.89a1.43 1.43 0 0 0-1.43-1.43zm-4.82 2.257-.002.002c.006-.002.013-.001.019-.002zm3.27 3.637c.195 0 .355.15.355.446a.355.355 0 0 1-.355.354c-.2 0-.36-.06-.36-.354s.16-.446.36-.446z" fill="#fdd835"/>',
}

export const PythonMisc = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
