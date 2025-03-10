import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<g fill="#26a69a"><path d="m14.552 11.422-1.666 1.642 2.5 2.46-2.5 2.462 1.666 1.64 2.502-2.461 2.5 2.46 1.665-1.64-2.5-2.46 2.5-2.461-1.666-1.642-2.5 2.461zM5.77 4.374c-1.644 0-2.989 1.36-2.989 3.023v9.065c0 1.678 1.345 3.023 2.988 3.023h2.989c1.658 0 2.988-1.345 2.988-3.023V7.397c0-1.663-1.33-3.023-2.988-3.023zm0 3.023h2.988v9.065H5.769z"/></g>',
}

export const Hex = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
