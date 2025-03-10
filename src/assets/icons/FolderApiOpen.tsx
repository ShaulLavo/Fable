import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path fill="#45403d" d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z"/> <path fill="#d8a657" d="M11.915 19.79h2.465v2.464h1.642v-4.107h-4.107zm2.465-6.571h-2.465v1.642h4.107v-4.107H14.38zm4.928 9.035h1.643V19.79h2.464v-1.643h-4.107zm1.643-9.035v-2.465h-1.643v4.107h4.107V13.22z"/>',
}

export const FolderApiOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
