import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m19 20h-15c-1.11 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><path d="m20.911 14.422c-0.44835-2.2681-2.4461-3.9758-4.8461-3.9758-1.9055 0-3.5604 1.0813-4.3846 2.6571-1.9846 0.21758-3.5274 1.8923-3.5274 3.9362a3.956 3.956 0 0 0 3.956 3.956h8.5714a3.2967 3.2967 0 0 0 3.2967 -3.2967c0-1.7406-1.3516-3.1516-3.0659-3.2769z" fill="#d8a657" stroke-width=".65934"/>',
}

export const FolderAwsOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
