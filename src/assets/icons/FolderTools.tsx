import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#45403d"/><path d="m18.648 14.536-7.2169 7.2105-.89492-.89492 7.2105-7.2169.90131.90131m2.8637-1.8474.37714-.37714-.50499-.50499.40911-.40911-.9077-.9077-.40911.40911-.50499-.50499-.37714.37714c-1.1123-.9077-2.3651-1.6364-3.7075-2.1478l-.53056 1.1442c1.1186.58809 2.1478 1.2976 3.1066 2.135l-.31961.31961 1.9177 1.9177.31961-.31961c.83739.95884 1.5469 1.988 2.135 3.1066l1.1442-.53056c-.51138-1.3424-1.2401-2.5953-2.1478-3.7075z" style="fill:#7daea3;stroke-width:.63923"/>',
}

export const FolderTools = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
