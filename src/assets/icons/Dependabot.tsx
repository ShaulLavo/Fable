import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M13.11 6.44v1.12H4.22c-.61 0-1.1.5-1.1 1.1v4.45h-.75c-.2 0-.37.17-.37.37v3.7c0 .21.17.38.37.38h.74v2.22c0 .61.5 1.1 1.11 1.1h15.56c.61 0 1.1-.49 1.1-1.1v-2.22h.75c.2 0 .37-.17.37-.37v-3.7c0-.21-.17-.38-.37-.38h-.74V8.67c0-.62-.5-1.11-1.11-1.11h-5.56V3.48c0-.2-.16-.37-.37-.37h-2.6c-.2 0-.36.17-.36.37v2.6c0 .2.16.36.37.36zm4.87 7.54-2.33 2.33a.45.45 0 0 1-.63 0l-1.4-1.4a.45.45 0 0 1 0-.63l.47-.48a.45.45 0 0 1 .63 0l.61.6 1.54-1.53a.45.45 0 0 1 .63 0l.48.48c.17.17.17.46 0 .63zm-9.74 2.33a.45.45 0 0 1-.63 0l-1.4-1.4a.45.45 0 0 1 0-.63l.47-.48a.45.45 0 0 1 .64 0l.6.6 1.54-1.53a.45.45 0 0 1 .63 0l.48.48c.18.17.18.46 0 .63z" fill="#448aff" stroke-width="1.4814"/>',
}

export const Dependabot = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
