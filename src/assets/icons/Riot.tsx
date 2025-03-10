import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<g style="fill:#e53935"><path d="M3.712 3.848c0-.088.07-.159.158-.159h11.756c3.117 0 5.643 2.537 5.643 5.667v1.1c0 .088-.07.16-.158.16h-3.446a.159.159 0 0 1-.158-.16v-1.1a1.885 1.885 0 0 0-1.88-1.889H7.632a.159.159 0 0 0-.159.159V20.53c0 .088-.07.16-.158.155a3.771 3.771 0 0 1-3.604-3.774z" style="fill:#e53935;stroke-width:.96103" transform="translate(-.49 -.188)"/><path d="M10.768 11.245a.154.154 0 0 0-.155.159 3.77 3.77 0 0 0 3.76 3.619h2.507c.347 0 .627.282.627.63v4.878c0 .088.071.159.159.155a3.771 3.771 0 0 0 3.604-3.774v-1.26c0-2.434-1.965-4.407-4.39-4.407z" style="fill:#e53935;stroke-width:.96103" transform="translate(-.49 -.188)"/></g>',
}

export const Riot = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
