import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<defs><clipPath id="a"><path d="m239.03 226.6-42.13 24.317c-1.578.91-2.546 2.59-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336c1.575.907 3.517.907 5.09 0l42.126-24.336c1.57-.91 2.54-2.59 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317c-.79-.453-1.67-.68-2.55-.68s-1.76.227-2.55.68"/></clipPath></defs><path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#45403d" fill-rule="nonzero"/><g transform="matrix(.071919 0 0 .071919 8.2615 7.25)" style="fill:#dcedc8"><g transform="matrix(1.8117 0 0 1.8117 -312.71 -393.32)" clip-path="url(#a)" style="fill:#dcedc8"><path d="m331.36 246.79-118.72-58.19-60.87 124.17 118.71 58.193z" style="fill:#a9b665"/></g></g>',
}

export const FolderNodeOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
