import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#616161" style="fill:#45403d"/><path d="M20.182 9.703h-7.667c-.71 0-1.278.575-1.278 1.278v8.945c0 .702.569 1.277 1.278 1.277h8.945c.702 0 1.277-.575 1.277-1.277v-7.667zm-3.195 10.223a1.914 1.914 0 0 1-1.916-1.917c0-1.06.856-1.917 1.916-1.917s1.917.856 1.917 1.917c0 1.06-.856 1.917-1.917 1.917zm1.917-6.39h-6.389v-2.555h6.389z" fill="#9E9E9E" style="fill:#ddc7a1"/>',
}

export const FolderDumpOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
