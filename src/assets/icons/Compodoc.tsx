import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 16 16' },
	c: '<rect x="9.06239" y="3" width="1.80954" height="10.6445" transform="rotate(19.4307 9.06239 3)" fill="#E73440"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.39681 5.9243L4.37623 4.90372L1.27389 8.00605L1.27533 8.00749L1 8.28283L4.37623 11.6591L5.39682 10.6385L3.03973 8.28139L5.39681 5.9243Z" fill="#F1C40F"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0476 8.55528L15.3229 8.27995L11.9467 4.90372L10.9261 5.9243L13.2832 8.28139L10.9261 10.6385L11.9467 11.6591L15.049 8.55673L15.0476 8.55528Z" fill="#3498DB"/>',
}

export const Compodoc = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
