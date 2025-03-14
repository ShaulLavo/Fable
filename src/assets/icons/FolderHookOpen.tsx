import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#d3869b" style="fill:#45403d"/><path d="m17.263 13.219c-3.5367 0-6.407 1.4352-6.407 3.2035 0 1.4352 1.8837 2.6461 4.4849 3.0561v2.0694l2.5628-2.5628-2.5628-2.5628v1.7491c-2.0182-.35879-3.2035-1.2173-3.2035-1.7491 0-.67913 1.9477-1.9221 5.1256-1.9221s5.1256 1.2429 5.1256 1.9221c0 .4677-.93542 1.2109-2.5628 1.621v1.3134c2.2617-.49333 3.8442-1.621 3.8442-2.9344 0-1.7683-2.8703-3.2035-6.407-3.2035z" style="fill:#d3869b;stroke-width:1.0678"/>',
}

export const FolderHookOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
