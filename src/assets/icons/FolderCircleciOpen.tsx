import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 01-2-2V6a2 2 0 012-2h6l2 2h7c1.1 0 2 .9 2 2H4v10l2.14-8h17.07l-2.28 8.5A2 2 0 0119 20z" fill="#45403d" /> <path d="M15.81 14.8a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5-6.3a6.3 6.3 0 00-6.11 4.74l-.01.06c0 .17.13.3.3.3h2.54a.3.3 0 00.27-.18 3.3 3.3 0 110 2.75.3.3 0 00-.27-.18h-2.54a.3.3 0 00-.3.3v.06a6.3 6.3 0 106.12-7.85z" fill="#7daea3" />',
}

export const FolderCircleciOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
