import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><g id="prisma" transform="translate(-1.4437)" style="fill:#a7ffeb"><path d="m23.036 18.979-6.134 1.768c-.187.054-.367-.104-.328-.288l2.191-10.225c.041-.191.312-.222.398-.045l4.058 8.395c.076.158-.011.344-.185.395zm1.051-.417-4.698-9.72c-.118-.243-.364-.403-.642-.418-.286-.016-.542.118-.687.347l-5.095 8.041c-.158.251-.155.56.009.807l2.491 3.759c.148.224.406.354.673.354.076 0 .152-.01.227-.032l7.23-2.083c.221-.064.403-.216.497-.419.095-.203.093-.435-.005-.636z" style="clip-rule:evenodd;fill-rule:evenodd;fill:#89b482"/></g>',
}

export const FolderPrismaOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
