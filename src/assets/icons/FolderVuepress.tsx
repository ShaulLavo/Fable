import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8z" fill="#45403d" fill-rule="nonzero"/> <g transform="translate(.31059 -.41355)"> <path d="m14.924 9.1855c-0.82833 0-1.4997 0.6715-1.4997 1.5v9c0 0.8285 0.67137 1.5 1.4997 1.5h7.0006c0.82833 0 1.4997-0.6715 1.4997-1.5v-9c0-0.8285-0.67137-1.5-1.4997-1.5z" fill="#d6f0e4" stroke-width="1.2326" style="fill:#ddc7a1"/> <g transform="matrix(.34054 0 0 .34054 14.337 10.928)"> <path d="m1.791 3.6914 10.209 17.619 10.209-17.533v-0.085938h-3.9688l-6.1816 10.615-6.1523-10.615z" fill="#a9b665"/> <path d="m5.9072 3.6914 6.1521 10.617 6.1809-10.617h-3.7228l-2.4337 4.1783-2.4226-4.1783z" fill="#68948a"/> </g> </g>',
}

export const FolderVuepress = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
