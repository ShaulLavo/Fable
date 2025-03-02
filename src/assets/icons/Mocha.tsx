import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 192 192' },
	c: '<g fill="#a1887f"><path d="M146.156 74.096c0-2.418-1.934-4.835-4.835-4.835H50.423c-2.418 0-4.835 1.934-4.835 4.835 0 16.439 2.417 73.008 26.592 100.568.967.967 1.934 1.45 3.385 1.45h40.614c1.45 0 2.417-.483 3.384-1.45 24.175-27.076 26.593-83.646 26.593-100.568zm-35.779 87.997H81.85c-1.45 0-2.417-.484-3.384-1.45-16.439-19.34-18.373-58.02-18.857-71.559 0-2.417 1.934-4.835 4.835-4.835h63.822c2.418 0 4.835 1.934 4.835 4.835 0 13.538-2.417 51.735-18.856 71.558-1.45.967-2.418 1.451-3.868 1.451zM105.058 59.591s17.406-10.154 6.77-28.527c-6.286-9.67-9.187-17.889-6.77-21.274-6.285 7.736-16.922 15.956-5.318 33.362 3.868 4.351 5.802 13.538 5.318 16.439zM85.718 61.041s11.604-6.769 4.352-19.34c-4.352-6.285-6.286-12.087-4.352-14.021-4.351 5.318-11.12 10.637-3.384 22.724 2.417 2.418 3.384 8.703 3.384 10.637z"/><path d="M125.365 117.127c-1.933 13.055-5.801 28.044-14.021 37.714-.967.966-1.934 1.45-2.901 1.45H84.268c-.967 0-2.417-.484-2.901-1.45-5.802-7.253-9.67-16.923-12.088-27.077 0 0 28.044 3.869 43.999-1.933 11.604-4.352 12.087-8.704 12.087-8.704z"/></g>',
}

export const Mocha = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
