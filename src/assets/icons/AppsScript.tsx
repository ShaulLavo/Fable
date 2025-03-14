import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<g transform="matrix(.042737 0 0 .042737 1.0764 1.0689)"><rect x="27.53" y="328.9" width="373" height="107" rx="53.5" fill="#f44336"/><rect transform="rotate(216 239.83 304.45)" x="53.33" y="250.94" width="373" height="107" rx="53.5" fill="#ffc107"/><rect transform="rotate(72,307.03,255.4)" x="120.53" y="201.9" width="373" height="107" rx="53.5" fill="#43a047"/><rect transform="rotate(-72,389.03,255.39)" x="202.53" y="201.9" width="373" height="107" rx="53.5" fill="#448aff"/></g>',
}

export const AppsScript = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
