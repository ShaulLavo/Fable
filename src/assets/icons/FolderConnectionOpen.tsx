import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.01 1.5-1.93 1.5z" fill="#e57373" style="fill:#45403d"/><path d="m23.043 12.103c0.45795 0.45795 0.45795 1.2021 0 1.6028l-1.6028 1.6028-4.465-4.465 1.6028-1.6028c0.45795-0.45795 1.2021-0.45795 1.6028 0l1.0304 1.0304 1.7173-1.7173 0.80142 0.80142-1.7173 1.7173 1.0304 1.0304m-3.3202 3.3202-0.80142-0.80142-1.6028 1.6028-1.2021-1.2021 1.6028-1.6028-0.80142-0.80142-1.6028 1.6028-0.85866-0.80142-1.6028 1.6028c-0.45795 0.45795-0.45795 1.2021 0 1.6028l1.0304 1.0304-2.2898 2.2898 0.80142 0.80142 2.2898-2.2898 1.0304 1.0304c0.45795 0.45795 1.2021 0.45795 1.6028 0l1.6028-1.6028-0.80142-0.80142z" style="fill:#7daea3;stroke-width:.57244"/>',
}

export const FolderConnectionOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
