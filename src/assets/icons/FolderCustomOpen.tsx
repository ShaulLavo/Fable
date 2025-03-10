import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#45403d" fill-rule="nonzero" style="fill:#45403d"/><path d="m18.756 10.609c-.13281 0-.26393.05267-.36809.15683l-7.1665 7.1664v2.5734h2.5734l7.1761-7.1567c.20832-.20832.20832-.53104 0-.73936l-1.8436-1.8436c-.10416-.10416-.23848-.15683-.37129-.15683zm-.76498 7.8129-2.0837 2.0837h7.8131v-2.0837z" style="fill:#e78a4e;stroke-width:1.0416"/>',
}

export const FolderCustomOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
