import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero" style="fill:#45403d"/><path d="m15.32 16.342 2.064-5.4897 2.0554 5.4897m-2.9226-7.8052-4.7698 12.141h1.9513l.97131-2.6017h5.4203l.97999 2.6017h1.9513l-4.7698-12.141z" style="fill:#e57373;stroke-width:.86724"/>',
}

export const FolderFonts = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
