import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg width="24" height="24" style="isolation:isolate" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <defs> <clipPath id="_clipPath_ilmo2j9kcfsVlnyBvyj7X2ZVo9G9mI1W"> <rect width="24" height="24"/> </clipPath> </defs> <g clip-path="url(#_clipPath_ilmo2j9kcfsVlnyBvyj7X2ZVo9G9mI1W)"> <g id="Group" fill="#c5b18d"> <path d="m3.508 5.5q5.031 0.62 8.625 0.616 3.537-4e-3 8.462-0.616v2.259q-4.925 0.612-8.462 0.616-3.594 4e-3 -8.625-0.616v-2.259z"/> <path d="m7.41 7.318l-1.15 11.182 2.505-0.01 0.37-10.515-1.725-0.657z"/> <path d="m16.405 7.307l1.119 11.172h-2.474l-0.37-10.515 1.725-0.657z"/> <rect x="3.405" y="10.162" width="17.087" height="1.314"/> <rect x="11.291" y="7.307" width="1.314" height="3.122"/> </g> </g>',
}

export const Jinja = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
