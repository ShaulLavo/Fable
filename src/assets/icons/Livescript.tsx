import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 40 40' },
	c: '<g fill="#317eac"><path d="M5.419 3.18h3.685v34.207H5.419z"/><path d="M37.074 31.2v3.685H2.867V31.2z"/><path d="m29.614 8.66 2.004 2.005L7.43 34.853l-2.004-2.005z"/><path d="M10.73 5.47h2.835v22.08H10.73zM15.36 5.52h2.835v17.382H15.36zM19.99 5.47h2.835v12.802H19.99zM24.526 5.49h2.835v8.254h-2.835zM28.783 5.46h2.835v5.197h-2.835z"/><path d="M34.801 29.54v-2.835h-22.08v2.835zM34.753 24.91v-2.835H17.371v2.835zM34.801 20.28v-2.835H21.999v2.835zM34.781 15.75v-2.835h-8.254v2.835zM34.809 11.49V8.655h-5.197v2.835z"/></g>',
}

export const Livescript = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
