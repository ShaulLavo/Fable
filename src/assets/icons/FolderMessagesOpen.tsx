import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#e57373" style="fill:#45403d"/><path d="m15.12 23.509a.6297 .62968 0 0 1 -.6297 -.62968v-1.889h-2.5188a1.2594 1.2594 0 0 1 -1.2594 -1.2594v-7.5561c0-.69894.56673-1.2594 1.2594-1.2594h10.075a1.2594 1.2594 0 0 1 1.2594 1.2594v7.5561a1.2594 1.2594 0 0 1 -1.2594 1.2594h-3.8412l-2.3299 2.3361c-.12594.11964-.28336.1826-.44079.1826h-.31485m-2.5188-10.704v1.2594h8.8158v-1.2594h-8.8158m0 2.5187v1.2594h5.0376v-1.2594h-5.0376m0 2.5187v1.2594h6.297v-1.2594z" style="fill:#e78a4e;stroke-width:.62969"/>',
}

export const FolderMessagesOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
