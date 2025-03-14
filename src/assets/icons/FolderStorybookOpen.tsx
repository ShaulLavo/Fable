import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 01-2-2V6a2 2 0 012-2h6l2 2h7c1.1 0 2 .9 2 2H4v10l2.14-8h17.07l-2.28 8.5A2 2 0 0119 20z" fill="#45403d" /> <path d="M17.9 12.47c0 .38 2.59.2 2.94-.07 0-2.62-1.41-4-3.99-4-2.57 0-4.01 1.4-4.01 3.5 0 3.65 4.93 3.72 4.93 5.71 0 .56-.28.9-.88.9-.79 0-1.1-.4-1.06-1.77 0-.3-3-.39-3.09 0-.23 3.3 1.83 4.26 4.19 4.26C19.2 21 21 19.78 21 17.58c0-3.92-5-3.81-5-5.75 0-.79.58-.9.93-.9.36 0 1.02.07.96 1.54zM5.5 6.35l.1-2.43h1.9l.08 2.35a.15.15 0 01-.24.12l-.73-.58-.87.66a.15.15 0 01-.24-.12z" fill="#d3869b" />',
}

export const FolderStorybookOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
