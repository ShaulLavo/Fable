import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 140.625 140.625' },
	c: '<g style="fill:none"><g style="fill:#1565c0"><path style="fill:#1565c0" d="m117.35 191.93 36.17-20.86 56.65-138.715V14.777l-42.19 24.545v14.827l-33.77 72.821-16.86 11.65zM100.46 130.17l16.89-8.34v-21.19L92.033 41.579V24.868l-.173-.099-25.141 14.553v14.827z" transform="translate(-5.18 8.577) scale(.64333)"/></g><path d="M142.66 24.694v16.884l-25.314 59.058v19.736l-16.884 9.793-33.744-76.017v-14.85l25.314-14.58L49.834 0 24.52 14.776v18.1l56.975 138.37 35.851 20.677v-51.967l16.86-9.793-.198-.124 33.967-75.893V39.295l42.198-24.521L184.859-.003l-42.174 24.694z" style="fill:#2979ff" transform="translate(-5.18 8.577) scale(.64333)"/></g>',
}

export const Vagrant = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
