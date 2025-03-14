import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#7daea3" style="fill:#45403d"/><g transform="translate(-40.252 111.06)" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" style="fill:#bbdefb"><path class="st0" d="m58.827-101.24c-.489-.74516-.60543-.84412-1.6009-.84412h-.02329c-.99548 0-1.1061.099-1.6009.84412-.4599.69857-5.0239 9.0582-5.0239 9.2911 0 .33765.08732.65783.40168 1.1119.32018.4599.87322.71604 1.2749.30854.27361-.27361 3.2018-5.3208 4.6164-7.2303.16882-.23868.51811-.23868.69276 0 1.4146 1.9094 4.3428 6.9567 4.6164 7.2303.40168.4075.95473.15136 1.2749-.30854.31436-.45408.40168-.77426.40168-1.1119-.0059-.23286-4.5699-8.5983-5.0298-9.2911z" clip-rule="evenodd" fill="#1173b6" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" stroke-width=".058215" style="fill:#7daea3"/></g>',
}

export const FolderExpoOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
