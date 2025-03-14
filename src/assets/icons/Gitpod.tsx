import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<g transform="translate(2.135 2.135) scale(.82213)" clip-path="url(#a)" fill="#ffa726"><path d="M14.07 1.195a2.364 2.364 0 0 1-.887 3.236l-7.11 4.04a.6.6 0 0 0-.304.52v6.343a.6.6 0 0 0 .304.52l5.628 3.199a.605.605 0 0 0 .598 0l5.628-3.198a.6.6 0 0 0 .304-.521V11.39l-5.06 2.838a2.392 2.392 0 0 1-3.248-.9 2.364 2.364 0 0 1 .905-3.23l7.239-4.062C20.272 4.8 23 6.383 23 8.901v6.914a4.51 4.51 0 0 1-2.287 3.919l-6.461 3.671a4.56 4.56 0 0 1-4.504 0l-6.461-3.671A4.509 4.509 0 0 1 1 15.815V8.51c0-1.62.873-3.115 2.287-3.918l7.53-4.28a2.392 2.392 0 0 1 3.253.883z" clip-rule="evenodd" fill-rule="evenodd"/></g><defs><clipPath id="a"><path d="M0 0h24v24H0z" fill="#fff"/></clipPath></defs>',
}

export const Gitpod = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
