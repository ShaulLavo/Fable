import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 32 32' },
	c: '<svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <g transform="matrix(.83286 0 0 .83286 3.4387 2.5558)" stroke-miterlimit="2"> <path d="m-0.99733 11.538 9.1511-9.1262v18.295l-9.1511 9.165z" fill="#e53935" stroke-width="12.955"/> <path d="m31.161 11.538-9.1511-9.1262v18.295l9.1511 9.165z" fill="#455a64" stroke-width="12.955"/> <path d="m8.1537 2.4122 6.9283 6.9385v18.162l-6.9283-6.8059z" fill="#455a64" stroke-width="8.7143"/> <path d="m22.01 2.4122-6.9283 6.9385v18.162l6.9283-6.8059z" fill="#e53935" stroke-width="8.7143"/> </g>',
}

export const Siyuan = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
