import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4C2.89 4 2 4.89 2 6V18C2 19.097 2.903 20 4 20H20C21.097 20 22 19.097 22 18V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6H12L10 4Z" fill="#45403d"/> <path d="M19.1265 21.667C16.2956 21.667 14 18.9974 14 15.7044C14 13.007 16.0337 9.71104 17.6054 7.70297C18.3491 6.75248 19.7543 6 19.7543 6C19.7543 6 19.0341 9.84232 20.9886 11.3678C22.7239 12.7224 24 14.4848 24 16.0345C24 19.1382 21.9582 21.667 19.1265 21.667Z" fill="#9575CD"/>',
}

export const FolderElixir = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
