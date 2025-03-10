import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M3 3v18h18V3zm5.12 8.994h2.797c.382 0 .71.024.985.075s.534.158.775.326c.243.167.435.385.576.653.145.265.218.598.218 1 0 .553-.112 1.001-.335 1.35-.22.348-.535.638-.946.87l2.158 3.204H12.31l-1.763-2.743h-.769v2.743H8.12zm6.593 0h4.676v1.446h-3.017v1.291h2.801v1.446h-2.801v1.848h3.017v1.446h-4.676zm-4.935 1.375v2.014h.513c.266 0 .49-.014.67-.044.18-.03.329-.1.45-.207a.96.96 0 0 0 .253-.34c.055-.128.082-.297.082-.508 0-.187-.034-.35-.1-.483a.698.698 0 0 0-.343-.317 1.086 1.086 0 0 0-.395-.095 6.013 6.013 0 0 0-.526-.02z" fill="#f44336"/>',
}

export const Reason = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
