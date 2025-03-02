import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M2.25 15.75V7.75H4.25L7.25 10.75L10.25 7.75H12.25V15.75H10.25V10.58L7.25 13.58L4.25 10.58V15.75H2.25ZM16.25 7.75H19.25V11.75H21.75L17.75 16.25L13.75 11.75H16.25V7.75Z" fill="#FF5722" />',
}

export const Mdsvex = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
