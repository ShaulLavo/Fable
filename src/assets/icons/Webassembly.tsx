import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 300 300' },
	c: '<g data-name="Layer 2"><g style="fill:#7c4dff" data-name="Notch - Black"><path style="fill:#7c4dff" d="m177.3 67.39-3.11 13.99h9.68l-3.57-13.99z" transform="translate(-188.25 29.65) scale(2.2365)"/><path transform="translate(-188.72 29.65) scale(2.2365)" d="M163.77 0a5.62 5.62 0 0 1 0 .58 12.34 12.34 0 0 1-12.34 12.34A12.33 12.33 0 0 1 139.11.58a5.62 5.62 0 0 1 0-.58H97.64v107.62h107.62V0zM149 96.1l-5.25-25.93h-.09L138 96.1h-7.22L122.6 58h7.13l4.88 25.94h.09L140.58 58h6.67l5.28 26.26h.1L158.19 58h7l-9.09 38.1zm39.26 0-2.43-8.48H173l-1.87 8.48H164l9.22-38.1h11.25l11.21 38.1z" style="fill:#7c4dff"/></g></g>',
}

export const Webassembly = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
