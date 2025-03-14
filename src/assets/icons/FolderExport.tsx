import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#039be5" fill-rule="nonzero" style="fill:#45403d"/><path d="m20.62 15.706h-6.0845v-1.2169h6.0845m-3.0422-5.4761a6.0845 6.0845 0 0 0 -6.0845 6.0845 6.0845 6.0845 0 0 0 6.0845 6.0845 6.0845 6.0845 0 0 0 6.0845 -6.0845 6.0845 6.0845 0 0 0 -6.0845 -6.0845z" style="clip-rule:evenodd;fill-rule:evenodd;fill:#e78a4e;stroke-linejoin:round;stroke-miterlimit:1.4142;stroke-width:.60845"/><style type="text/css"> .st0{fill:#326DE6;} .st1{fill:#FFFFFF;} .st2{fill:#326DE5;} </style>',
}

export const FolderExport = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
