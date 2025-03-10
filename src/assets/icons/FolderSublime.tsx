import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m18.32 16.95l-3.791-1.23c-0.105-0.034-0.191-0.152-0.192-0.262l-0.037-2.914c-1e-3 -0.11 0.083-0.227 0.188-0.261l8.935-2.858c0.106-0.034 0.191 0.028 0.191 0.139v2.913c0 0.111-0.085 0.229-0.19 0.264l-3.687 1.229 3.748 1.17c0.106 0.033 0.191 0.149 0.191 0.26v2.872c0 0.11-0.084 0.228-0.189 0.264l-8.958 3.039c-0.105 0.036-0.19-0.025-0.191-0.135l-0.018-2.998c-1e-3 -0.11 0.084-0.227 0.189-0.261l3.811-1.231z" fill="#e78a4e"/>',
}

export const FolderSublime = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
