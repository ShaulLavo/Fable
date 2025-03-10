import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><g transform="matrix(.61203 0 0 .61203 10.266 7.3085)" fill="#cfd8dc"><path d="m17.094 3.387c-6.615-3.89-15.02 0.861-15.094 8.53-0.07 7.49 7.854 12.326 14.454 9.03l-7.7-10.914-0.05 8.016c0 0.727-1.72 0.727-1.72 0l0.015-11.065c0-0.578 1.451-0.625 1.755-0.123l8.693 13.52c6.17-3.973 6.086-13.208-0.353-16.994zm-0.078 13.138-1.672-2.41v-7.131c0-0.545 1.672-0.545 1.672 0v9.54z" fill="#cfd8dc"/></g>',
}

export const FolderNext = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
