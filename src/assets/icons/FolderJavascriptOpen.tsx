import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m19 20h-15c-1.11 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><g transform="matrix(.66602 0 0 .66602 2.6081 .73833)" fill="#ffecb3"><path d="m23.013 26.479c0.555 1.123 1.708 1.833 2.961 1.821 1.244 0 2.033-0.622 2.033-1.481 0-1.025-0.815-1.393-2.181-1.989l-0.753-0.324c-2.155-0.92-3.61-2.068-3.61-4.512 0-2.252 1.752-3.96 4.38-3.96 1.772-0.129 3.457 0.819 4.267 2.4l-2.33 1.5c-0.313-0.789-1.087-1.304-1.936-1.288-0.044-4e-3 -0.088-7e-3 -0.132-7e-3 -0.666 0-1.231 0.511-1.298 1.174-4e-3 0.04-6e-3 0.08-7e-3 0.121 0 0.876 0.561 1.262 1.84 1.822l0.753 0.324c2.549 1.1 3.986 2.208 3.986 4.713 0 2.7-2.12 4.179-4.967 4.179-2.253 0.132-4.384-1.073-5.433-3.072zm-10.583 0.263c0.473 0.876 0.876 1.542 1.927 1.542s1.6-0.385 1.6-1.884v-10.171h3v10.215c0 3.1-1.822 4.521-4.477 4.521-1.917 0.103-3.709-0.991-4.494-2.742z" fill="#d8a657"/></g>',
}

export const FolderJavascriptOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
