import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#01579b" fill-rule="nonzero" style="fill:#45403d"/><style type="text/css"> .st0{fill:#1173B6;} .st1{fill:#585D67;} </style><g transform="translate(-40.252 111.06)" style="fill:#bbdefb"><path class="st0" d="m58.827-101.24c-.489-.74516-.60543-.84412-1.6009-.84412h-.02329c-.99548 0-1.1061.099-1.6009.84412-.4599.69857-5.0239 9.0582-5.0239 9.2911 0 .33765.08732.65783.40168 1.1119.32018.4599.87322.71604 1.2749.30854.27361-.27361 3.2018-5.3208 4.6164-7.2303.16882-.23868.51811-.23868.69276 0 1.4146 1.9094 4.3428 6.9567 4.6164 7.2303.40168.4075.95473.15136 1.2749-.30854.31436-.45408.40168-.77426.40168-1.1119-.0059-.23286-4.5699-8.5983-5.0298-9.2911z" clip-rule="evenodd" fill="#1173b6" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" stroke-width=".058215" style="fill:#7daea3"/></g>',
}

export const FolderExpo = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
