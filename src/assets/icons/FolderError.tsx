import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<style type="text/css"> .st0{fill:#FF5252;} .st1{fill:#FFCDD2;} </style> <path class="st0" d="m10 4h-6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2h-8l-2-2z" style="fill:#45403d"/> <path d="m17.79 15.89h-1.18v-3.54h1.18m0 5.9h-1.18v-1.18h1.18m-.59-7.67a5.9 5.9 0 0 0-5.9 5.9 5.9 5.9 0 0 0 5.9 5.9 5.9 5.9 0 0 0 5.9-5.9 5.9 5.9 0 0 0-5.9-5.9z" style="fill:#ea6962;stroke-width:.59"/>',
}

export const FolderError = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
