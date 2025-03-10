import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19.389 18.237-6.742 3.74c-.462.24-.924.24-1.386 0l-6.65-3.74L16.664 6.092 16.988 6c.277 0 .434.12.461.37l1.94 11.867M9.553 6.277 5.35 13.248 7.105 2.212c.028-.25.185-.37.462-.37.185 0 .305.056.37.232l1.985 3.648-.37.554M13.71 7.44l-8.82 8.857 6.696-11.36c.092-.185.23-.268.415-.268s.305.083.37.268z" style="fill:#fbc02d;stroke-width:.9236"/>',
}

export const Firebase = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
