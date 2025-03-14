import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero" style="fill:#45403d"/><path d="m17.249 9.2605c-3.2806 0-5.9431 2.6625-5.9431 5.9431 0 3.2806 2.6626 5.9431 5.9431 5.9431 3.2806 0 5.9431-2.6626 5.9431-5.9431 0-3.2806-2.6626-5.9431-5.9431-5.9431zm0 10.697c-2.6268 0-4.7545-2.1276-4.7545-4.7545 0-1.0994.37441-2.1098 1.0044-2.9121l6.6623 6.6623c-.80232.62997-1.8127 1.0044-2.9121 1.0044zm3.7501-1.8424-6.6623-6.6623c.80232-.62996 1.8127-1.0044 2.9121-1.0044 2.6268 0 4.7545 2.1276 4.7545 4.7545 0 1.0994-.37441 2.1098-1.0044 2.9121z" style="fill:#e57373;stroke-width:.59431"/>',
}

export const FolderPrivate = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
