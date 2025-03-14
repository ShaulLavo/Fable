import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 16 16' },
	c: '<defs><style>.cls-1{fill:#db4b33;}</style></defs><path class="cls-1" d="M8,1.74a1.13,1.13,0,0,0-.78.32L5.94,3.35,7.57,5A1.22,1.22,0,0,1,8,4.89a1,1,0,0,1,1,1,1,1,0,0,1-.09.42l1.22,1.22a1,1,0,0,1,.42-.09,1,1,0,0,1,1,1v0a1,1,0,0,1-1,1,1,1,0,0,1-.94-1.46L8.42,6.87l-.06,0v3.23a1,1,0,1,1-.73,0V6.89a1,1,0,0,1-.66-1,1,1,0,0,1,.09-.43L5.43,3.87l-3.6,3.6A1.1,1.1,0,0,0,1.83,9l5.4,5.41a1.11,1.11,0,0,0,1.56,0L14.2,9a1.12,1.12,0,0,0,0-1.56L8.79,2.06A1.13,1.13,0,0,0,8,1.74"/>',
}

export const Git = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
