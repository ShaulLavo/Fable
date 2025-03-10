import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#E53935" fill-rule="nonzero" style="fill:#45403d"/><path d="m17.726 17.072h1.1836l-2.8937-7.3604h-1.0529l-2.8937 7.3604h1.1836l.63383-1.6983h3.1937zm-3.4085-2.8316 1.1719-3.1246 1.1719 3.1246zm8.5842.33499-4.5804 4.5801-2.0778-2.0835-.79959.79837l2.8832 2.8818 5.373-5.3785z" style="fill:#ea6962;stroke-width:1.1672"/>',
}

export const FolderSyntaxOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
