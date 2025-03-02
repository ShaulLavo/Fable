import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M21.492 2.51S14.24 2.157 8.526 9.988c-4.385 6.008-6.018 11.504-6.018 11.504l1.842-.95c1.366-2.372 2.078-3.35 3.417-4.745 2.401.702 4.907.617 7.08-1.899-1.898-.53-3.416-.408-5.657-.18C11.706 12 13.424 11.62 15.797 12l.949-1.898c-1.709-.323-2.848-.352-4.537.038 1.87-1.32 3.17-2.06 5.486-1.937l1.148-1.832c-1.48-.104-2.372.057-4.072.475C16.3 5.46 17.695 4.834 19.726 4.71c0 0 .997-1.793 1.766-2.202z" fill="#ef5350"/>',
}

export const Tcl = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
