import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#e57373" style="fill:#45403d"/><path d="m17.249 9.2607c-3.2805 0-5.943 2.6625-5.943 5.9431 0 3.2806 2.6625 5.9431 5.943 5.9431 3.2805 0 5.943-2.6626 5.943-5.9431 0-3.2806-2.6625-5.9431-5.943-5.9431zm0 10.697c-2.6268 0-4.7544-2.1276-4.7544-4.7545 0-1.0994.37441-2.1098 1.0044-2.9121l6.6621 6.6623c-.8023.62997-1.8126 1.0044-2.912 1.0044zm3.75-1.8424-6.6621-6.6623c.8023-.62996 1.8126-1.0044 2.912-1.0044 2.6268 0 4.7544 2.1276 4.7544 4.7545 0 1.0994-.37441 2.1098-1.0044 2.9121z" style="fill:#ea6962;stroke-width:.59431"/>',
}

export const FolderPrivateOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
