import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<defs/> <g> <path d="M10 4L4 4C2.89 4 2 4.89 2 6L2 18C2 19.097 2.903 20 4 20L20 20C21.097 20 22 19.097 22 18L22 8C22 6.89543 21.1046 6 20 6L12 6C12 6 10 4 10 4Z" fill="#45403d" fill-rule="nonzero" opacity="1" stroke="none"/> <path d="M17.804 11.82L20.484 18.167L16.447 15.119L17.804 11.819L17.804 11.82ZM22.561 19.641L18.441 10.111C18.206 9.553 17.393 9.545 17.151 10.111L12.628 20.546L14.169 20.546L15.961 16.241L21.304 20.395C21.91 20.966 22.896 20.39 22.561 19.641Z" fill="#ffcdd2" fill-rule="nonzero" opacity="1" stroke="none"/> </g>',
}

export const FolderAnsible = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
