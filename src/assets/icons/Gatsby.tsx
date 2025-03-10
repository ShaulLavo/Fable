import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 28 28' },
	c: '<g fill="#fff"><path class="st0" d="M23.835 14h-6.259v1.788h4.292c-.626 2.682-2.593 4.918-5.186 5.812L6.4 11.318c1.073-3.13 4.113-5.365 7.6-5.365 2.682 0 5.096 1.342 6.616 3.398l1.341-1.162C20.17 5.775 17.308 4.165 14 4.165c-4.65 0-8.583 3.308-9.566 7.69l11.801 11.801c4.292-1.073 7.6-5.007 7.6-9.656zM4.165 14.09c0 2.503.984 4.917 2.861 6.794s4.381 2.861 6.795 2.861z"/></g><path d="M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zM6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z" fill="#639" style="fill:#639" transform="translate(1.483 1.483) scale(.89407)"/>',
}

export const Gatsby = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
