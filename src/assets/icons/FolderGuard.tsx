import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#45403d"/><path d="m17.871 8.1989-5.5932 2.4859v3.7288c0 3.4492 2.3864 6.6746 5.5932 7.4576 3.2068-.78305 5.5932-4.0085 5.5932-7.4576v-3.7288l-5.5932-2.4859m0 3.7288c.87006 0 1.7401.68362 1.7401 1.5537v.9322c.37288 0 .74576.37288.74576.80791v2.1751c0 .37288-.37288.74576-.80791.74576h-3.4181c-.37288 0-.74576-.37288-.74576-.80791v-2.1751c0-.37288.37288-.74576.74576-.74576v-.9322c0-.87006.87006-1.5537 1.7401-1.5537m0 .74576c-.49718 0-.9322.31073-.9322.80791v.9322h1.8644v-.9322c0-.49718-.43503-.80791-.9322-.80791z" style="fill:#a9b665;stroke-width:.62147"/>',
}

export const FolderGuard = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
