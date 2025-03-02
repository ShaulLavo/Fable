import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><g transform="matrix(.66328 0 0 .66328 9.1921 7.4804)"><path d="m19.376 15.988-7.7084 4.4505-7.7084-4.4505v-8.9009l7.7084-4.4505 7.7084 4.4505z" fill="#ddc7a1" /><path d="m12.286 1.9792c-0.21 0-0.41031 0.059687-0.57031 0.17969l-7.9004 4.4395c-0.32 0.17-0.5293 0.50086-0.5293 0.88086v9c0 0.38 0.2093 0.71086 0.5293 0.88086l7.9004 4.4395c0.16 0.12 0.36031 0.17969 0.57031 0.17969s0.41031-0.05969 0.57031-0.17969l7.9004-4.4395c0.32-0.17 0.5293-0.50086 0.5293-0.88086v-9c0-0.38-0.2093-0.71086-0.5293-0.88086l-7.9004-4.4395c-0.16-0.12-0.36031-0.17969-0.57031-0.17969zm0 2.1504 7 3.9395v2.1035h-0.01563v5.1777h0.01563v0.53906l-7 3.9395-7-3.9395v-7.8203zm0 2.0801l-4.9004 2.8301 4.9004 2.8301 4.9004-2.8301zm-5 5.0801v3.5801l4 2.3086v-3.5801zm10 0-4 2.3086v3.5801l4-2.3086z" fill="#68948a"/><path d="m12.286 6.2097-4.9004 2.8301 4.9004 2.8301 4.9004-2.8301zm-5 5.0801v3.5801l4 2.3086v-3.5801zm10 0-4 2.3086v3.5801l4-2.3086z" fill="#68948a"/></g>',
}

export const FolderWebpack = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
