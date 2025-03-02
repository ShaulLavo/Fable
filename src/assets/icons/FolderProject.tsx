import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#45403d"/><path d="m20.283 15.319 3.4496 3.4251-2.0342 2.0097-3.4251-3.4251v-0.56369l1.446-1.446h0.56369m0.55757-1.5502-0.59433-0.5882-2.9349 2.941v1.207l-3.4496 3.4496-2.0097-2.0342 3.4251-3.4251h1.207l0.47792-0.47791-2.3528-2.3589h-0.79652l-1.7217-1.7401 1.6053-1.6053 1.7156 1.7156v0.80265l2.3834 2.3528 1.6298-1.6298-0.5882-0.61884 0.79652-0.80265h-1.6298l-0.39826-0.39826 2.0281-2.0342 0.40439 0.40439v1.6298l0.80265-0.80878 2.0097 2.0097c0.66786 0.67398 0.66786 1.7707 0 2.4386l-1.207-1.2315z" style="fill:#7daea3;stroke-width:.61271"/>',
}

export const FolderProject = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
