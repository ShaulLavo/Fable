import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 120 120' },
	c: '<g transform="matrix(.8026 0 0 .8026 9.943 14.253)"><path class="st0" d="M14.5 0h57.3c8 0 14.5 6.5 14.5 14.5S79.8 29 71.8 29H14.5C6.5 29 0 22.5 0 14.5S6.5 0 14.5 0z" style="fill:#ff5722"/><ellipse class="st0" cx="109.2" cy="14.5" rx="14.8" ry="14.5" style="fill:#ff5722"/><path class="st0" d="M52.6 43.3h56.6c8-.6 14.9 5.5 15.5 13.5s-5.5 14.9-13.5 15.5H52.6c-8 .6-14.9-5.5-15.5-13.5s5.5-14.9 13.5-15.5H52z" style="fill:#ff5722"/><path d="M14.8 43c8.2 0 14.8 6.6 14.8 14.8S23 72.6 14.8 72.6C6.6 72.5 0 65.9 0 57.8 0 49.6 6.6 43 14.8 43z" style="fill:#ff1744"/><path class="st0" d="M14.5 85h57.3c8 0 14.5 6.5 14.5 14.5S79.8 114 71.8 114H14.5C6.5 114 0 107.5 0 99.5S6.5 85 14.5 85z" style="fill:#ff5722"/><ellipse class="st0" cx="109.2" cy="99.5" rx="14.8" ry="14.5" style="fill:#ff5722"/></g>',
}

export const Mjml = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
