import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19,20H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h6l2,2h7c1.1,0,2,0.9,2,2H4v10l2.1-8h17.1l-2.3,8.5 C20.7,19.4,19.9,20,19,20z" fill="#45403d"/><g transform="translate(-.203 -.102)"><circle cx="17.5" cy="15.6" r="5.7" fill="none" stroke="#B3E5FC"/><path d="M17.6,12.1c-2,0-3.6,1.6-3.6,3.5c0,2,1.6,3.5,3.6,3.5c2,0,3.6-1.6,3.6-3.5C21.2,13.7,19.6,12.1,17.6,12.1L17.6,12.1z M18.6,13.1c0.7,0,1.3,0.6,1.3,1.3c0,0,0,0,0,0c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3C17.4,13.7,17.9,13.1,18.6,13.1C18.6,13.1,18.6,13.1,18.6,13.1L18.6,13.1z" fill-rule="evenodd" clip-rule="evenodd" fill="#B3E5FC"/><ellipse cx="21.7" cy="11.5" rx="1.3" ry="1.3" fill-rule="evenodd" clip-rule="evenodd" fill="#B3E5FC"/></g>',
}

export const FolderLuaOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
