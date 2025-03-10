import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 16 16' },
	c: '<defs><style>.cls-1{fill:#c63d14;}</style></defs><path class="cls-1" d="M10.28,7.92a1.55,1.55,0,0,0,2.41,1.24,3.24,3.24,0,0,1,.2.75c-1.21,3-5.95,4.1-8.48,4s-2.7-3.72-.83-4.51c-.37,3.26,3,2.05,4,0A1.63,1.63,0,0,0,9.34,7.91C9.66,7.91,10,7.93,10.28,7.92Z"/><path class="cls-1" d="M13,2s0,0,0,0L11.47,6.37a.07.07,0,0,1-.06.06l-.11,0s0,0-.05,0,0,0,0,0L9.82,3.52s0,0,0,0,0,0,0,0L8.69,5.68l-.36.72v0h0l-.16,0s0,0,0,0S8,6.13,8,6l-1.33-4,0,0Z"/><path class="cls-1" d="M12.74,7.91A.93.93,0,1,1,11.81,7,.93.93,0,0,1,12.74,7.91Z"/><path class="cls-1" d="M4.72,7.92a.93.93,0,0,1-.91.92.92.92,0,0,1-1-.92A.93.93,0,0,1,3.77,7,1,1,0,0,1,4.72,7.92Z"/><path class="cls-1" d="M8.74,7.91A.93.93,0,1,1,7.8,7,.94.94,0,0,1,8.74,7.91Z"/>',
}

export const Jest = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
