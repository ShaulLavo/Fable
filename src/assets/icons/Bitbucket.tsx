import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 681.571 842.229' },
	c: '<defs><linearGradient id="logo-gradient" x1="64.01" x2="32.99" y1="65.26" y2="89.48" gradientUnits="userSpaceOnUse"><stop stop-color="#0052cc" style="stop-color:#1565c0" offset=".18"/><stop stop-color="#2684ff" style="stop-color:#1e88e5" offset="1"/></linearGradient></defs><g class="header__svg-logo__icon"><path d="M2 41.25a2 2 0 0 0-2 2.32l8.49 51.54a2.72 2.72 0 0 0 2.66 2.27h40.73a2 2 0 0 0 2-1.68l8.51-52.11a2 2 0 0 0-2-2.32zM37.75 78.5h-13l-3.52-18.38H40.9z" style="fill:#1e88e5" transform="matrix(10.83818 0 0 10.83818 83.006 -330.211)"/><path d="M59.67 60.12H40.9L37.75 78.5h-13L9.4 96.73a2.71 2.71 0 0 0 1.75.66h40.74a2 2 0 0 0 2-1.68z" style="fill:url(#logo-gradient)" transform="matrix(10.83818 0 0 10.83818 83.006 -330.211)"/></g>',
}

export const Bitbucket = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
