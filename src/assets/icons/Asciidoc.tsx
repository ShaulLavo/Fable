import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M164.74 23.425a12.2 12.2 0 0 0-4.76.936 12.155 12.155 0 0 0-5.621 4.706c-.538.751-1 1.574-1.37 2.466l-45.966 111.09H62.698c-6.758 0-12.2 5.442-12.2 12.2a12.173 12.173 0 0 0 12.2 12.2h34.23l-.006.013h26.406l.006-.014h26.424c6.758 0 12.199-5.44 12.199-12.199 0-6.758-5.44-12.2-12.2-12.2h-16.33l31.144-75.263 80.655 194.92a12.173 12.173 0 0 0 15.937 6.608 12.173 12.173 0 0 0 6.607-15.937L175.917 30.97a12.174 12.174 0 0 0-11.176-7.544zM43.68 188.635a12.173 12.173 0 0 0-12.199 12.2c0 6.759 5.44 12.2 12.199 12.2h34.21l-16.752 40.487a12.17 12.17 0 0 0 6.609 15.934 12.168 12.168 0 0 0 15.934-6.606l20.614-49.816h26.445a12.173 12.173 0 0 0 12.199-12.2c0-6.759-5.44-12.2-12.199-12.2z" style="fill:#f44336;paint-order:fill markers stroke;stroke-miterlimit:1.5;stroke-width:0" transform="matrix(.07904 0 0 .07904 .137 .389)"/>',
}

export const Asciidoc = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
