import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#0097a7" style="fill:#45403d"/><path d="m17.651 19.894a4.7612 4.7612 0 0 0 4.7612 -4.7612 4.7612 4.7612 0 0 0 -4.7612 -4.7612 4.7612 4.7612 0 0 0 -4.7612 4.7612 4.7612 4.7612 0 0 0 4.7612 4.7612m0-10.713a5.9515 5.9515 0 0 1 5.9515 5.9515 5.9515 5.9515 0 0 1 -5.9515 5.9515c-3.2912 0-5.9515-2.6782-5.9515-5.9515a5.9515 5.9515 0 0 1 5.9515 -5.9515m.29758 2.9758v3.1245l2.6782 1.5891-.44636.73204-3.1245-1.8747v-3.5709z" stroke-miterlimit="4" style="fill:#ddc7a1;stroke-miterlimit:4;stroke-width:.271;stroke:#ddc7a1"/>',
}

export const FolderArchiveOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
