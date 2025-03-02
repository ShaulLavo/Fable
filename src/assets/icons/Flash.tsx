import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M20.314 2c-2.957 0-5.341 1.104-7.122 3.252-1.427 1.752-2.354 3.93-3.164 6.034-1.663 4.283-2.781 6.741-6.342 6.741V22c2.958 0 5.342-1.03 7.122-3.194 1.133-1.383 1.957-3.135 2.634-4.827h4.665v-3.973h-3.061c1.207-2.575 2.546-3.973 5.268-3.973V2z" fill="#e53935"/>',
}

export const Flash = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
