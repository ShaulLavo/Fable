import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><path d="m17.51 14.937h3.9322v.96535h-3.9322zm0-1.6082h3.9322v.96535h-3.9322zm0 3.2164h3.9322v.96535h-3.9322zm4.4944-6.7542h-10.114c-.6181 0-1.1233.57943-1.1233 1.2868v8.3635c0 .70735.50523 1.2857 1.1233 1.2857h10.115c.61702 0 1.1233-.57835 1.1233-1.2868v-8.3635c0-.70628-.50523-1.2857-1.1244-1.2857zm0 9.6492h-5.0566v-8.3635h5.0566z" style="fill:#7daea3;stroke-width:1.075"/>',
}

export const FolderContentOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
