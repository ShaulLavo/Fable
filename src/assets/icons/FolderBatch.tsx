import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero" style="fill:#45403d"/><path d="m11.83 14.525h8.4v1.4h-8.4zm0-2.8h8.4v1.4h-8.4zm0 5.6h5.6v1.4h-5.6zm7 0v4.2l3.5-2.1z" fill="#9E9E9E" style="fill:#ddc7a1"/>',
}

export const FolderBatch = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
