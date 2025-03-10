import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#45403d"/><path d="m21.985 18.967h-2.4661v-4.3157h2.4661m.61652-1.233h-3.6992a.61653 .61653 0 0 0 -.61652 .61653v6.1653a.61653 .61653 0 0 0 .61652 .61653h3.6992a.61653 .61653 0 0 0 .61653 -.61653v-6.1653a.61653 .61653 0 0 0 -.61653 -.61653m-11.714-1.2331h11.097v-1.2331h-11.097a1.2331 1.2331 0 0 0 -1.2331 1.2331v6.7818h-1.233v1.8496h8.6314v-1.8496h-6.1653z" style="fill:#7daea3;stroke-width:.61653"/>',
}

export const FolderClient = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
