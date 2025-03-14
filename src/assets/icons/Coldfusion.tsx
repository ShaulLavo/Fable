import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<rect transform="rotate(90)" x="2.256" y="-21.744" width="19.487" height="19.487" ry="0" fill="#0d3858" stroke="#4dd0e1" stroke-width=".7"/><g fill="#4dd0e1" stroke-width=".725" aria-label="Cf"><path d="M12.565 16.073q-.826.437-2.057.437-1.589 0-2.544-1.023-.955-1.023-.955-2.685 0-1.786 1.074-2.887 1.075-1.1 2.726-1.1 1.06 0 1.755.306v.93q-.8-.447-1.765-.447-1.282 0-2.082.856-.794.857-.794 2.29 0 1.36.742 2.17.748.805 1.958.805 1.121 0 1.942-.498zM16.99 8.45q-.277-.156-.63-.156-.994 0-.994 1.255v.914h1.388v.81h-1.388v5.112h-.943v-5.112H13.41v-.81h1.012v-.96q0-.931.538-1.469.538-.544 1.341-.544.434 0 .689.105z"/></g>',
}

export const Coldfusion = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
