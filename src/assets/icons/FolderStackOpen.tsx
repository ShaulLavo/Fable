import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><path d="m23.651 13.415v-1.223h-1.2v-1.222c0-.672-.54-1.222-1.2-1.222h-8.4c-.66 0-1.2.55-1.2 1.222v8.556c0 .672.54 1.222 1.2 1.222h8.4c.66 0 1.2-.55 1.2-1.222v-1.222h1.2v-1.223h-1.2v-1.222h1.2v-1.221h-1.2v-1.222zm-2.4 6.11h-8.4v-8.555h8.4zm-7.2-3.666h3v2.445h-3zm3.6-3.667h2.4v1.834h-2.4zm-3.6 0h3v3.056h-3zm3.6 2.445h2.4v3.667h-2.4z" style="fill:#e78a4e"/>',
}

export const FolderStackOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
