import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 300 300' },
	c: '<g transform="translate(0 -822.52)" fill-rule="evenodd" color="#000"><rect transform="matrix(-.98339 .18149 .60192 .79856 0 0)" x="405.55" y="967.22" width="107.25" height="156.59" rx="12.306" ry="12.31" fill="#2d9bbd"/><rect transform="matrix(-.98528 .17093 -.59175 .80612 0 0)" x="-1156.5" y="1461.9" width="108.34" height="123.15" rx="10.69" ry="12.31" fill="#4a4bcd"/><path d="M52.112 965.158c-1.343 3.515-26.292 23.248-25.744 27.277.548 4.03 29.812 16.023 32.04 19.027s10.545 41.668 13.603 42.5 18.828-31.274 21.548-32.932c2.72-1.658 32.808 2.503 34.15-1.01 1.343-3.515-18.174-35.352-18.721-39.381-.548-4.03 9.732-40.12 7.502-43.125-2.229-3.005-30.06 9.427-33.118 8.594-3.059-.833-26.793-27.3-29.514-25.643-2.72 1.657-.405 41.177-1.747 44.693z" fill="#2e5bc1"/></g>',
}

export const Cabal = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
