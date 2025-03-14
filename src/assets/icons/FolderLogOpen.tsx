import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m19 20h-15c-1.11 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><path d="m19.039 18.616h-4.7062v-1.3446h4.7062m2.0169-1.3446h-6.7232v-1.3446h6.7232m0-1.3446h-6.7232v-1.3446h6.7232m1.3446-2.6893h-9.4124c-0.74627 0-1.3446 0.59836-1.3446 1.3446v9.4124a1.3446 1.3446 0 0 0 1.3446 1.3446h9.4124a1.3446 1.3446 0 0 0 1.3446 -1.3446v-9.4124c0-0.74627-0.60508-1.3446-1.3446-1.3446z" fill="#a9b665" stroke-width=".67232"/>',
}

export const FolderLogOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
