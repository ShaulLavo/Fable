import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" style="fill-rule:nonzero;fill:#45403d"/><g transform="matrix(.69978 0 0 .69978 8.6102 6.7292)" style="fill:#45403d"><path d="m2.6 10.59l5.78-5.79 1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73 0 1.097.903 2 2 2s2-.903 2-2c0-.74-.4-1.39-1-1.73v-4.86l2.07 2.09c-.07.15-.07.32-.07.5 0 1.097.903 2 2 2s2-.903 2-2-.903-2-2-2c-.18 0-.35 0-.5.07l-2.57-2.57c.26-.93-.22-1.95-1.15-2.34-.43-.16-.88-.2-1.28-.09l-1.7-1.69.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0l-7.99-7.99c-.79-.78-.79-2.04 0-2.82z" style="fill-rule:nonzero;fill:#ea6962"/></g>',
}

export const FolderGit = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
