import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#e57373" style="fill:#45403d"/><path d="m23.395 13.464v-1.8011h-3.6023a1.8011 1.8011 0 0 0 -1.8011 1.8011v1.8011a1.8011 1.8011 0 0 0 1.8011 1.8011h1.8011v1.8011h-3.6023v1.8011h3.6023a1.8011 1.8011 0 0 0 1.8011 -1.8011v-1.8011a1.8011 1.8011 0 0 0 -1.8011 -1.8011h-1.8011v-1.8011m-4.5028 5.4034h-1.8011v-5.4034h1.8011m0-1.8011h-1.8011a1.8011 1.8011 0 0 0 -1.8011 1.8011v5.4034a1.8011 1.8011 0 0 0 1.8011 1.8011h1.8011a1.8011 1.8011 0 0 0 1.8011 -1.8011v-5.4034a1.8011 1.8011 0 0 0 -1.8011 -1.8011m-6.3039 9.0056h1.8011v-5.4034h-1.8011m0-1.8011h1.8011v-1.8011h-1.8011z" style="fill:#68948a;stroke-width:.90056"/>',
}

export const FolderIosOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
