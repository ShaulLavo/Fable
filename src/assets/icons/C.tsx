import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m16.45 15.97.42 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.2-2.01.2-2.21-.04-3.87-.7-4.98-1.96-1.14-1.27-1.68-2.88-1.68-4.83C7 9.9 7.68 8.13 9 6.89 10.28 5.64 11.92 5 13.9 5c.75 0 1.4.07 1.94.19s.94.25 1.2.4l-.6 2.49-1.04-.34c-.4-.1-.87-.15-1.4-.15-1.15-.01-2.11.36-2.86 1.1-.76.73-1.14 1.85-1.18 3.34.01 1.36.37 2.42 1.08 3.2.71.77 1.7 1.17 2.99 1.18l1.33-.12c.43-.08.79-.19 1.09-.32z" style="fill:#0277bd"/>',
}

export const C = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
