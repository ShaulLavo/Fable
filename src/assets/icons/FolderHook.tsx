import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#5E35B1" fill-rule="nonzero" style="fill:#45403d"/><path d="m17.263 13.219c-3.5367 0-6.407 1.4351-6.407 3.2034 0 1.4351 1.8837 2.646 4.4849 3.056v2.0694l2.5628-2.5627-2.5628-2.5627v1.7491c-2.0182-.35878-3.2035-1.2173-3.2035-1.7491 0-.67912 1.9477-1.922 5.1256-1.922 3.1779 0 5.1256 1.2429 5.1256 1.922 0 .4677-.93542 1.2109-2.5628 1.6209v1.3134c2.2617-.49332 3.8442-1.6209 3.8442-2.9343 0-1.7683-2.8703-3.2034-6.407-3.2034z" style="fill:#d3869b;stroke-width:1.0678"/>',
}

export const FolderHook = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
