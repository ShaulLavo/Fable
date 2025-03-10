import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#45403d"/><path d="m15.119 23.509a.62968 .62968 0 0 1 -.62968 -.62968v-1.889h-2.5187a1.2594 1.2594 0 0 1 -1.2594 -1.2594v-7.5561c0-.69894.56671-1.2594 1.2594-1.2594h10.075a1.2594 1.2594 0 0 1 1.2594 1.2594v7.5561a1.2594 1.2594 0 0 1 -1.2594 1.2594h-3.841l-2.3298 2.3361c-.12594.11964-.28335.1826-.44077.1826h-.31484m-2.5187-10.704v1.2594h8.8155v-1.2594h-8.8155m0 2.5187v1.2594h5.0374v-1.2594h-5.0374m0 2.5187v1.2594h6.2968v-1.2594z" style="fill:#e78a4e;stroke-width:.62968"/>',
}

export const FolderMessages = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
