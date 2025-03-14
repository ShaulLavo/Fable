import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 300 300' },
	c: '<path d="M257.08-56.4v-160.62H42.93V-56.4H21.515v21.415h256.99V-56.4zm-85.662 0h-42.831v-10.708h42.831zm64.246-32.123H64.344v-107.08h171.32z" style="fill:#039be5;stroke-width:10.708" transform="translate(0 276)"/>',
}

export const Virtual = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
