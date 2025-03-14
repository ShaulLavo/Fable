import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 300 300' },
	c: '<path style="fill:#295892" d="M481.54 410.67-17.453 511.76v124.72L481.54 535.39zM481.54 212.46l-498.993 101.1v124.71L481.54 337.18z" transform="matrix(.47403 0 0 .47403 39.998 -27.888)"/><path style="fill:#a1e0ff" d="m481.54 336.56-498.993-97.81V114.03l498.993 97.81zM481.54 534.77l-498.993-97.81V312.24l498.993 97.81z" transform="matrix(.47403 0 0 .47403 39.998 -27.888)"/>',
}

export const San = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
