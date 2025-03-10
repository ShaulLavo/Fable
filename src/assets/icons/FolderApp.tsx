import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#FFB300" fill-rule="nonzero" style="fill:#45403d"/><path d="m11.375 11.618h3.0812v-3.0812h-3.0812zm4.6219 9.2438h3.0812v-3.0812h-3.0812zm-4.6219 0h3.0812v-3.0812h-3.0812zm0-4.6219h3.0812v-3.0812h-3.0812zm4.6219 0h3.0812v-3.0812h-3.0812zm4.6219-7.7031v3.0812h3.0812v-3.0812zm-4.6219 3.0812h3.0812v-3.0812h-3.0812zm4.6219 4.6219h3.0812v-3.0812h-3.0812zm0 4.6219h3.0812v-3.0812h-3.0812z" style="fill:#ea6962;stroke-width:.94808"/>',
}

export const FolderApp = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
