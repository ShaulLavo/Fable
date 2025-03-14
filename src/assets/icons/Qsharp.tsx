import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<g style="fill:#fbc02d" aria-label="Q"><path d="M12.201 15.549c.9-1.101 1.468-2.936 1.468-4.735 0-1.963-.697-3.854-1.872-5.12-1.156-1.248-2.66-1.853-4.57-1.853s-3.413.605-4.569 1.853C1.483 6.96.786 8.851.786 10.851s.697 3.89 1.872 5.157c1.156 1.248 2.68 1.853 4.57 1.853 1.376 0 2.404-.275 3.468-.917l1.578 1.486 1.395-1.486zm-3.395-3.212L7.41 13.824l1.413 1.34c-.422.22-1.027.348-1.615.348-2.202 0-3.67-1.853-3.67-4.66 0-2.809 1.468-4.662 3.689-4.662 2.239 0 3.689 1.835 3.689 4.68 0 1.1-.202 2.092-.606 2.9z" style="fill:#fbc02d;stroke-width:1.3639" transform="translate(-.263 .865)"/></g><path d="m17.719 3.863-.611 4h-1.5l-.34 2h1.5l-.32 2h-1.5l-.34 2h1.5l-.61 4h2l.61-4h1l-.61 4h2l.61-4h1.5l.34-2h-1.5l.32-2h1.5l.34-2h-1.5l.611-4h-2l-.611 4h-1l.611-4zm1.049 6h1l-.32 2h-1z" style="fill:#fbc02d" transform="translate(-.13 .865)"/>',
}

export const Qsharp = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
