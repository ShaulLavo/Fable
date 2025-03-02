import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><g transform="matrix(.6008 0 0 .6008 10.944 7.99)" fill="#a7ffeb"><path d="m7.4174 2.7218c-2.5933 0-4.6956 2.1023-4.6956 4.6956v9.1652c0 2.5933 2.1023 4.6956 4.6956 4.6956h9.1652c2.5933 0 4.6956-2.1023 4.6956-4.6956v-9.1652c0-2.5933-2.1023-4.6956-4.6956-4.6956zm9.4051 4.1565h0.0012c0.12015 4.2e-6 0.23924 0.023593 0.35021 0.069481 0.11144 0.046043 0.21246 0.11363 0.29775 0.19884 0.12846 0.1283 0.21602 0.29191 0.2515 0.46996 0.03537 0.17805 0.01725 0.36254-0.05226 0.53023-0.06951 0.16774-0.18718 0.31112-0.3382 0.41189-0.15101 0.10077-0.32864 0.15443-0.51021 0.15418-1.9399 0-2.6926 1.1806-3.7012 3.1243l-0.62173 1.1714c-0.95119 1.8327-2.131 4.1131-5.3297 4.1131-0.12053 2.05e-4 -0.23983-0.02345-0.35122-0.06948-0.11142-0.04603-0.21268-0.11344-0.29795-0.19864-0.085277-0.08519-0.15291-0.18631-0.19904-0.29775-0.069541-0.16762-0.087904-0.35225-0.052462-0.53023 0.035442-0.17808 0.12305-0.3416 0.2515-0.46996 0.085257-0.08519 0.18655-0.1528 0.29795-0.19883s0.23067-0.06968 0.35122-0.06948c1.9399 0 2.6927-1.1808 3.7012-3.1245l0.62552-1.1714c0.9508-1.832 2.1302-4.1112 5.3259-4.1131z" fill="#a7ffeb" stroke-width=".10252"/></g>',
}

export const FolderLottie = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
