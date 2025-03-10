import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 500 500' },
	c: '<svg enable-background="new 0 0 500 500" version="1.1" viewBox="0 0 500 500" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"> <path d="M46,46v408h408V46H46z M289.8,277h-48.5v139.3h-35V277h-48.5v-30.7h132V277z M427.5,416.3h-112v-170h35v139.2 h77V416.3z" fill="#c2185b"/>',
}

export const Tobi = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
