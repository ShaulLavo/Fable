import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M17.353 2.069H6.475a4.406 4.406 0 0 0-4.406 4.406v10.878a4.406 4.406 0 0 0 4.406 4.406h10.878a4.406 4.406 0 0 0 4.406-4.406V6.475a4.406 4.406 0 0 0-4.406-4.406Z" fill="#FF4081" /> <path d="M18.66 16.114h-4.68v1.377h4.68v-1.377Z" fill="#FFF176" /> <path d="M16.182 18.179H13.98v1.377h2.203v-1.377Z" fill="#C6FF00" /> <path d="M17.422 18.179h-.826v1.377h.826v-1.377Z" fill="#fff" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.406 2H17.56a4.406 4.406 0 0 1 4.407 4.406v5.577l-9.983 9.983H6.406A4.406 4.406 0 0 1 2 17.559V6.406A4.406 4.406 0 0 1 6.406 2Z" fill="#BDBDBD" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.12 22v-5.473a4.406 4.406 0 0 1 4.407-4.407H22L12.12 22Z" fill="#fff" /> <path d="M13.842 5.442H7.095V6.82h6.747V5.442ZM16.94 5.442h-2.41V6.82h2.41V5.442ZM6.406 5.442H5.167V6.82h1.24V5.442ZM11.914 16.114h-4.82v1.377h4.82v-1.377ZM6.406 16.114H5.167v1.377h1.24v-1.377ZM11.914 18.179H9.16v1.377h2.754v-1.377ZM8.472 18.179H5.167v1.377h3.305v-1.377ZM12.74 7.714H8.954v1.377h3.786V7.714ZM8.196 7.714H5.167v1.377h3.03V7.714ZM9.78 10.055H5.167v1.377H9.78v-1.377Z" fill="#E0E0E0" />',
}

export const Hygen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
