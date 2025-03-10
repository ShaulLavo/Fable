import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#039be5" fill-rule="nonzero" style="fill:#45403d"/><path d="m20.62 15.706h-2.4338v2.4338h-1.2169v-2.4338h-2.4338v-1.217h2.4338v-2.4338h1.2169v2.4338h2.4338m-3.0423-5.4761a6.0845 6.0845 0 0 0 -6.0845 6.0845 6.0845 6.0845 0 0 0 6.0845 6.0845 6.0845 6.0845 0 0 0 6.0845 -6.0845 6.0845 6.0845 0 0 0 -6.0845 -6.0845z" style="fill:#a9b665;stroke-width:.60845"/>',
}

export const FolderImport = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
