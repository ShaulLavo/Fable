import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M21.46 10.086c-.224.59-1.012.848-1.541.269-1.668-1.925-4.936-1.945-5.845.963-.694 2.092 1.035 4.28 4.093 4.003.671-.053 1.145.548.934 1.21l-1.521 4.157c-.386 1.023-1.376 1.574-2.547 1.191L3.384 17.631c-1.049-.37-1.624-1.513-1.28-2.54L6.419 3.298c.465-1.052 1.268-1.528 2.547-1.191l11.649 4.246c1.051.373 1.625 1.515 1.281 2.541zm-2.223 2.074c0-1.571-1.713-2.559-3.075-1.773-1.363.786-1.363 2.76 0 3.546s3.075-.202 3.075-1.773z" fill="#5c6bc0"/>',
}

export const Phpunit = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
