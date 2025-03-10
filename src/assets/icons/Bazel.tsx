import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 512 512' },
	c: '<path class="light" d="m144 32 112 112-112 112L32 144z" style="fill:#81c784" transform="translate(21.695 21.695) scale(.91525)"/><path class="regular" d="M32 144v112l112 112V256z" style="fill:#43a047" transform="translate(21.695 21.695) scale(.91525)"/><path class="light" d="m368 32 112 112-112 112-112-112z" style="fill:#81c784" transform="translate(21.695 21.695) scale(.91525)"/><path class="regular" d="M480 144v112L368 368V256zM256 144l112 112-112 112-112-112z" style="fill:#43a047" transform="translate(21.695 21.695) scale(.91525)"/><path d="M256 368v112L144 368V256z" style="fill:#2e7d32" transform="translate(21.695 21.695) scale(.91525)"/><path d="m256 368 112-112v112L256 480z" style="fill:#1b5e20" transform="translate(21.695 21.695) scale(.91525)"/>',
}

export const Bazel = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
