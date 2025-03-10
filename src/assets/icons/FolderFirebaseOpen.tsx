import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#e57373" style="fill:#45403d"/><path d="m23.724 18.322-4.2044 2.3326c-.28797.14975-.57594.14975-.86392 0l-4.1468-2.3326 7.5161-7.5737.20158-.05759c.17278 0 .27069.07487.28797.23038l1.2095 7.4009m-6.1338-7.4585-2.6205 4.3484 1.0943-6.8825c.01728-.1555.11519-.23038.28797-.23038.11519 0 .19006.03456.23038.14399l1.2383 2.275-.23038.34557m2.5918.72569-5.5003 5.5233 4.1756-7.0841c.05759-.11519.14399-.16702.25918-.16702s.19006.05183.23038.16702z" style="fill:#d8a657;stroke-width:.57594"/>',
}

export const FolderFirebaseOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
