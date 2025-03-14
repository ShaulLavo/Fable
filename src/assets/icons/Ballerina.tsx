import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 50 50' },
	c: '<g style="fill:#00bfa5"><path style="fill:#00bfa5" d="m23.281 18.589-11.638-4.452V.237h11.638zM11.643 18.489l7.965 3.047-7.965 3.046zM11.643 49.763V28.935l11.638-4.451v6.731l-5.659 18.548zM27.314 18.589l11.639-4.452V.237H27.314zM38.953 18.489l-7.967 3.047 7.967 3.046zM38.953 49.763V28.935l-11.639-4.451v6.731l5.658 18.548z" transform="translate(2.842 3.103) scale(.87588)"/></g>',
}

export const Ballerina = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
