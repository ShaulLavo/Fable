import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path transform="matrix(1.00003 0 0 1.00003 0 0)" d="M2.469 2.922v5.447h1.814V2.922zm12.709 1.816a7.273 7.273 0 0 0-6.946 5.127L6.1 12l2.133 2.133c.916 2.968 3.677 5.129 6.945 5.129 4.012 0 7.261-3.25 7.261-7.262s-3.249-7.262-7.261-7.262zm2.941 3.703 1.342 1.63-5.49 5.488-3.178-3.467 1.34-1.34 1.838 1.838 4.148-4.149zM3.377 10.184c-.998 0-1.816.817-1.816 1.816a1.817 1.817 0 1 0 1.816-1.816zM2.47 15.63v5.447h1.814v-5.447z" style="fill:#009688;stroke-width:.90777"/>',
}

export const Commitlint = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
