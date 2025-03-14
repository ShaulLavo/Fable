import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#45403d"/><path d="m20.671 9.434c-.32465 0-.63704.11638-.87594.35527l-3.5589 3.565 3.4609 3.4609 3.565-3.5589c.47166-.47778.47166-1.2496 0-1.7335l-1.7396-1.7335c-.23889-.23889-.54516-.35527-.85143-.35527m-5.0228 4.5022-3.6508 3.6507c-.47778.47778-.47778 1.2496.01225 1.7457-.7473.75343-1.5069 1.5069-2.2603 2.2603h3.467l.52679-.52679c.47778.46553 1.2435.45941 1.7212-.01225l3.6446-3.6507" style="fill:#a9b665;stroke-width:.61254"/>',
}

export const FolderHelper = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
