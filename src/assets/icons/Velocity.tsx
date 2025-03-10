import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 300 300' },
	c: '<path d="M150 58.553A88.446 88.446 0 0 0 61.553 147 88.446 88.446 0 0 0 150 235.446 88.446 88.446 0 0 0 238.446 147 88.446 88.446 0 0 0 150 58.553zm.011 25.082a63.353 63.353 0 0 1 63.353 63.353 63.353 63.353 0 0 1-63.353 63.353 63.353 63.353 0 0 1-63.353-63.353 63.353 63.353 0 0 1 63.353-63.353z" style="fill:#0288d1;paint-order:fill markers stroke" transform="translate(0 3)"/><path transform="scale(.26458)" d="M170.11 729.82 46.16 853.77l123.95 123.95v-76.521h396.82V806.34H170.11zM280.02 46.154l-123.95 123.95h76.521v396.82h94.861v-396.82h76.52zM963.75 156.11v76.521H566.93v94.859h396.82v76.521l123.95-123.95zM806.26 566.93v396.82h-76.52l123.95 123.95 123.95-123.95h-76.521V566.93z" style="fill:#0288d1;stroke-width:15.81"/>',
}

export const Velocity = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
