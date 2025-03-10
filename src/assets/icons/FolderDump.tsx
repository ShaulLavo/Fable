import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#616161" fill-rule="nonzero" style="fill:#45403d"/><path d="M20.182 9.703h-7.667c-.71 0-1.278.575-1.278 1.278v8.945c0 .702.569 1.277 1.278 1.277h8.945c.702 0 1.277-.575 1.277-1.277v-7.667zm-3.195 10.223a1.914 1.914 0 0 1-1.916-1.917c0-1.06.856-1.917 1.916-1.917s1.917.856 1.917 1.917c0 1.06-.856 1.917-1.917 1.917zm1.917-6.39h-6.389v-2.555h6.389z" fill="#9E9E9E" style="fill:#ddc7a1"/>',
}

export const FolderDump = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
