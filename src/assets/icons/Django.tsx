import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 300 300' },
	c: '<g style="fill:#43a047"><path d="M88.273-104.42h40.946V85.11c-21.005 3.988-36.426 5.583-53.176 5.583C26.056 90.691 0 68.095 0 24.754c0-41.744 27.653-68.86 70.458-68.86 6.646 0 11.698.53 17.814 2.124zm0 95.401c-4.785-1.594-8.773-2.125-13.825-2.125-20.739 0-32.704 12.763-32.704 35.095 0 21.804 11.434 33.768 32.438 33.768 4.518 0 8.242-.266 14.091-1.062z" style="fill:#43a047;stroke-width:1.7152" transform="translate(52.981 129.25) scale(.99836)"/><path d="M194.36-41.187v94.918c0 32.704-2.393 48.39-9.571 61.951-6.648 13.031-15.423 21.271-33.502 30.312l-38.022-18.08c18.08-8.508 26.854-15.95 32.437-27.387 5.85-11.698 7.713-25.258 7.713-60.886v-80.827zm-40.944-63.014h40.944v42.009h-40.944z" style="fill:#43a047;stroke-width:1.7152" transform="translate(52.981 129.25) scale(.99836)"/></g>',
}

export const Django = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
