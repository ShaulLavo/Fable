import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#039be5" style="fill:#45403d"/><path d="m20.62 15.706h-2.4338v2.4338h-1.2169v-2.4338h-2.4338v-1.217h2.4338v-2.4338h1.2169v2.4338h2.4338m-3.0423-5.4761a6.0845 6.0845 0 0 0 -6.0845 6.0845 6.0845 6.0845 0 0 0 6.0845 6.0845 6.0845 6.0845 0 0 0 6.0845 -6.0845 6.0845 6.0845 0 0 0 -6.0845 -6.0845z" style="fill:#a9b665;stroke-width:.60845"/>',
}

export const FolderImportOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
