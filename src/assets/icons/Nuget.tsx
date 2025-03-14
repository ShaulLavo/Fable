import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<g fill="#0288d1"><path class="cls-1" d="M16.693 5.536h-5.34a5.525 5.525 0 0 0-5.55 5.532v5.342a5.525 5.525 0 0 0 5.525 5.524h5.341a5.525 5.525 0 0 0 5.525-5.532v-5.334a5.525 5.525 0 0 0-5.5-5.532zm-5.397 5.972a1.6 1.6 0 1 1 .184-2.015 1.6 1.6 0 0 1-.184 2.015zm5.301 7.748a2.798 2.798 0 1 1 2.799-2.798 2.798 2.798 0 0 1-2.799 2.798z"/><g transform="translate(1.086 1.018) scale(.79956)"><circle class="cls-1" cx="3.65" cy="4.06" r="2"/><circle class="cls-1" cx="3.65" cy="4.06" r="2.75"/></g></g>',
}

export const Nuget = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
