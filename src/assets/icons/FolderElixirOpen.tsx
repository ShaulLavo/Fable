import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6C2 4.89 2.89 4 4 4H10L12 6H19C20.097 6 21 6.903 21 8H4V18L6.14 10H23.21L20.93 18.5C20.7 19.37 19.92 20 19 20Z" fill="#45403d"/> <path d="M19.1265 21.667C16.2956 21.667 14 18.9974 14 15.7044C14 13.007 16.0337 9.71104 17.6054 7.70297C18.3491 6.75248 19.7543 6 19.7543 6C19.7543 6 19.0341 9.84232 20.9886 11.3678C22.7239 12.7224 24 14.4848 24 16.0345C24 19.1382 21.9582 21.667 19.1265 21.667Z" fill="#9575CD"/>',
}

export const FolderElixirOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
