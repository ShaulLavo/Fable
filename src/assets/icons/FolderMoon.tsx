import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path fill="#45403d" fill-rule="nonzero" d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"/> <path fill="#9282dd" d="M21.49919 13.28413c.09734.25662.15338.53388.15338.82442 0 1.28309-1.03974 2.32283-2.32283 2.32283s-2.32283-1.03974-2.32283-2.32283 1.03827-2.32431 2.32136-2.32431c.34068 0 .66219.07522.9542.20647-.90849-.69464-2.04409-1.10759-3.27704-1.10759-2.98502 0-5.40519 2.42017-5.40519 5.40519s2.42017 5.40519 5.40519 5.40519 5.40519-2.42017 5.40519-5.40519c0-1.11201-.33626-2.14438-.91144-3.0042z"/> <circle cx="21.45199" cy="11.92582" r="2.32283" fill="#9282dd"/>',
}

export const FolderMoon = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
