import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#37474F" fill-rule="nonzero" style="fill:#45403d"/><path d="M12.673 9.352l3.89 3.89h-3.102l3.07 3.071h-3.873l4.693 4.694v-9.97h2.344l1.025 1.024h-2.28v3.843h1.106l1.23 1.229h-2.401l.016.016v3.874h5.48l-1.968-1.969v-.793l.425.425V14.8h-.787v-1.917l1.511 1.51v-3.89h-3.257l-1.152-1.151h-2.205z" fill="#d8a657" fill-opacity=".976"/>',
}

export const FolderFlow = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
