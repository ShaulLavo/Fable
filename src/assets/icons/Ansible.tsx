import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<defs/> <g> <path d="M12.2984 6.32454L16.8542 17.1161L9.992 11.9339L12.2984 6.32454ZM20.3849 19.6217L13.3804 3.42025C12.9825 2.47147 11.6 2.4575 11.1879 3.42025L3.5 21.1593L6.11958 21.1593L9.16628 13.8416L18.2493 20.903C19.2789 21.8742 20.9544 20.8955 20.3849 19.6217Z" fill="#43adaf" fill-rule="nonzero" opacity="1" stroke="none"/> </g>',
}

export const Ansible = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
