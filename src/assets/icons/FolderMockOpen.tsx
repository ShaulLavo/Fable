import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#4DD0E1" fill-rule="nonzero" style="fill:#45403d"/><path d="m12.213 18.337v2.4017h2.4018l7.0836-7.0834-2.4017-2.4017zm11.343-6.539c.24978-.24978.24978-.65326 0-.90304l-1.4987-1.4987c-.24978-.24978-.65328-.24978-.90306 0l-1.1721 1.172 2.4018 2.4017z" style="fill:#ddc7a1;stroke-width:.64046"/>',
}

export const FolderMockOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
