import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 500 500' },
	c: '<g style="fill:#e53935"><path d="m162.78 164.72-.278-.277-61.667 61.667 149.72 149.44 61.668-61.388 88.055-88.056-61.668-61.667v-.278H162.5z" style="fill:#e53935" transform="translate(21.476 21.476) scale(.9141)"/><path d="M250 0 31.94 125v250L250 500l218.06-125V125zm176.39 351.11L250 452.78 73.61 351.11V148.33L250 46.66l176.39 101.67z" style="fill:#e53935" transform="translate(21.476 21.476) scale(.9141)"/></g>',
}

export const Gemfile = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
