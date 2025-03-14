import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#37474F" fill-rule="nonzero" style="fill:#45403d"/><path d="M12.673 9.352l3.89 3.89h-3.102l3.07 3.071h-3.873l4.693 4.694v-9.97h2.344l1.025 1.024h-2.28v3.843h1.106l1.23 1.229h-2.401l.016.016v3.874h5.48l-1.968-1.969v-.793l.425.425V14.8h-.787v-1.917l1.511 1.51v-3.89h-3.257l-1.152-1.151h-2.205z" fill="#d8a657" fill-opacity=".976"/>',
}

export const FolderFlowOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
