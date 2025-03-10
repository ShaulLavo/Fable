import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#D4E157" fill-rule="nonzero" style="fill:#45403d"/><path d="m20.759 19.209c1.0993-1.3148 1.229-2.6726.3775-5.1939-.53837-1.5947-1.4328-2.8227-.77538-3.8136.70031-1.0564 2.1878-.03217.94805 1.3792l.24666.17159c1.4875.17266 2.22-1.8639 1.1111-2.4452-2.931-1.5304-5.4953 1.4114-4.3649 4.8153.48582 1.4446 1.1647 2.975.61452 4.1922-.47402 1.0446-1.3899 1.6591-2.0033 1.6805-1.2827.06435-.43113-2.8763 1.0446-3.6088.12869-.06435.31316-.15122.13942-.36678-1.82-.20377-2.887.63597-3.5005 1.8103-1.7889 3.4158 3.3932 4.6759 6.1623 1.3792z" style="fill:#a9b665;stroke-width:1.0725"/>',
}

export const FolderStylus = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
