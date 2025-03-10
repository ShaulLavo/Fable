import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<g transform="translate(-28.881 4.3729)" style="clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.4142"><path d="m47.881 15.627h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" style="fill:#45403d"/></g><path d="m20.62 15.706h-6.0845v-1.2169h6.0845m-3.0422-5.4761a6.0845 6.0845 0 0 0 -6.0845 6.0845 6.0845 6.0845 0 0 0 6.0845 6.0845 6.0845 6.0845 0 0 0 6.0845 -6.0845 6.0845 6.0845 0 0 0 -6.0845 -6.0845z" style="clip-rule:evenodd;fill-rule:evenodd;fill:#e78a4e;stroke-linejoin:round;stroke-miterlimit:1.4142;stroke-width:.60845"/>',
}

export const FolderExportOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
