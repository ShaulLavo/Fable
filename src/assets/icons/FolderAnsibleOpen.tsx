import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<defs/> <g> <path d="M19 20L4 20C2.89543 20 2 19.1046 2 18L2 6C2 4.89 2.89 4 4 4L10 4L12 6L19 6C20.097 6 21 6.903 21 8L4 8L4 18L6.14 10L23.21 10L20.93 18.5C20.7 19.37 19.92 20 19 20Z" fill="#45403d" fill-rule="nonzero" opacity="1" stroke="none"/> <path d="M17.804 11.82L20.484 18.167L16.447 15.119L17.804 11.819L17.804 11.82ZM22.561 19.641L18.441 10.111C18.206 9.553 17.393 9.545 17.151 10.111L12.628 20.546L14.169 20.546L15.961 16.241L21.304 20.395C21.91 20.966 22.896 20.39 22.561 19.641Z" fill="#ffcdd2" fill-rule="nonzero" opacity="1" stroke="none"/> </g>',
}

export const FolderAnsibleOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
