import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m12.839 14.958-2.447-2.418.029-.03a16.879 16.879 0 0 0 3.574-6.29h2.823V4.291h-6.744V2.365H8.147v1.927H1.402V6.22h10.762a15.193 15.193 0 0 1-3.054 5.155 15.076 15.076 0 0 1-2.226-3.228H4.958a16.923 16.923 0 0 0 2.87 4.393l-4.903 4.837 1.368 1.368 4.817-4.817 2.997 2.996.732-1.965m5.424-4.885h-1.927l-4.335 11.562h1.927l1.079-2.89h4.576l1.089 2.89h1.927l-4.336-11.562m-2.524 6.744 1.56-4.172 1.561 4.172z" style="fill:#7986cb;stroke-width:.96349"/>',
}

export const I18n = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
