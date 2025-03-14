import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8a2 2 0 00-2-2h-8l-2-2z" fill="#45403d" /> <path d="M15.81 14.8a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5-6.3a6.3 6.3 0 00-6.11 4.74l-.01.06c0 .17.13.3.3.3h2.54a.3.3 0 00.27-.18 3.3 3.3 0 110 2.75.3.3 0 00-.27-.18h-2.54a.3.3 0 00-.3.3v.06a6.3 6.3 0 106.12-7.85z" fill="#7daea3" />',
}

export const FolderCircleci = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
