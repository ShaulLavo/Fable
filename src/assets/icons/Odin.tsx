import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 260 260' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" version="1.1" viewBox="0 0 260 260" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"> <g transform="matrix(.23131 0 0 .23131 -26.461 -156.86)" fill="#448aff"> <path d="m430.52 1595.8c-16.576-11.38-29.677-22.4-29.677-22.4l426.29-738.35s17.547 6.508 32.041 13.457c18.27 8.757 33.403 17.294 33.403 17.294 206.63 119.3 277.54 383.92 158.24 590.55-119.3 206.64-383.92 277.54-590.55 158.24 0 0-14.473-8.32-29.74-18.79zm426.03-667.6-360.26 623.99c172.2 99.42 392.71 40.33 492.13-131.86 99.412-172.2 40.332-392.71-131.86-492.13zm-534.88 559.2c-14.487-20.98-19.644-31.04-19.644-31.04-74.475-129.36-79.937-293.86 3e-3 -432.32s225.13-215.98 374.4-216.16c0 0 20.153-0.052 36.933 1.555 25.28 2.422 42.087 5.684 42.087 5.684l-407.66 706.09s-9.671-10.01-26.112-33.81zm311.63-604.83c-108.64 13.203-209.99 75.512-268.87 177.5-58.88 101.98-62.162 220.91-19.278 321.6z" fill="#448aff"/> </g>',
}

export const Odin = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
