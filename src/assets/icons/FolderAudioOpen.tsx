import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m19 20h-15c-1.11 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><path d="m19.946 13.16v-1.3288h-2.6576v3.6542c-0.27905-0.20597-0.6179-0.3322-0.99661-0.3322a1.661 1.661 0 0 0 -1.661 1.661 1.661 1.661 0 0 0 1.661 1.661 1.661 1.661 0 0 0 1.661 -1.661v-3.6542h1.9932m-2.6576-4.6508a6.6441 6.6441 0 0 1 6.6441 6.6441 6.6441 6.6441 0 0 1 -6.6441 6.6441 6.6441 6.6441 0 0 1 -6.6441 -6.6441 6.6441 6.6441 0 0 1 6.6441 -6.6441z" fill="#ea6962" stroke-width=".66441"/>',
}

export const FolderAudioOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
