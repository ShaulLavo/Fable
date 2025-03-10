import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<g style="fill:#0277bd"><path d="M72.426 0H53.865v52.508L76.5 75.143H49.34l-29.65-29.65V.001H-.001v53.866l40.286 40.288h54.319l19.465 19.463H62.012l43.909 45.267-64.279 63.825h25.351l64.276-64.729-24.444-24.444h129.92v8.148l-56.131 33.496-47.076 47.529h26.706l32.138-32.591 63.374-38.023v-38.477h-59.751l-20.37-20.37 23.086-23.086V18.56h-19.24v43.004l-18.784 18.558-16.749-17.54V18.559h-18.107v52.51l42.336 42.548h-25.831L72.429 44.36V0" style="fill:#0277bd" transform="matrix(.08137 0 0 .08137 1.595 2.94)"/><path d="M170.65 145.3h-25.348l12.222 13.126L170.65 145.3" style="fill:#0277bd" transform="matrix(.08137 0 0 .08137 1.595 2.94)"/></g>',
}

export const Buck = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
