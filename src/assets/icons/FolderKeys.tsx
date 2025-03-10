import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#BDBDBD" fill-rule="nonzero" style="fill:#45403d"/><path d="m16.935 16.425a3.54 3.54 0 0 0 -3.339 -2.363 3.548 3.548 0 0 0 -3.545 3.545 3.548 3.548 0 0 0 3.545 3.546 3.54 3.54 0 0 0 3.339 -2.364h2.57v2.364h2.364v-2.364h1.182v-2.364zm-3.339 2.364c-.65 0-1.182-.532-1.182-1.182s.532-1.182 1.182-1.182 1.182.532 1.182 1.182-.532 1.182-1.182 1.182z" fill="#757575" style="fill:#89b482"/>',
}

export const FolderKeys = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
