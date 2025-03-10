import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 300 300' },
	c: '<defs/><path d="M20.805 280.88h1l2.85-2.85.14-1.21a12.81 12.81 0 0 0-20.84 6.25 1.55 1.55 0 0 1 1-.06l5.7-.94s.29-.48.44-.45a7.11 7.11 0 0 1 9.73-.74z" style="fill:#f44336" transform="translate(22.357 -2083.2) scale(7.7863)"/><path d="M28.715 283.07a12.84 12.84 0 0 0-3.87-6.24l-4 4a7.11 7.11 0 0 1 2.61 5.64v.71a3.56 3.56 0 1 1 0 7.12h-7.12l-.71.72v4.27l.71.71h7.12a9.26 9.26 0 0 0 5.26-16.93z" style="fill:#448aff" transform="translate(22.357 -2083.2) scale(7.7863)"/><path d="M9.205 299.96h7.12v-5.7h-7.12a3.54 3.54 0 0 1-1.47-.32l-1 .31-2.87 2.85-.25 1a9.21 9.21 0 0 0 5.59 1.86z" style="fill:#43a047" transform="translate(22.357 -2083.2) scale(7.7863)"/><path d="M9.205 281.47a9.26 9.26 0 0 0-5.59 16.6l4.13-4.13a3.56 3.56 0 1 1 4.71-4.71l4.13-4.13a9.25 9.25 0 0 0-7.38-3.63z" style="fill:#ffc107" transform="translate(22.357 -2083.2) scale(7.7863)"/>',
}

export const Gcp = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
