import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#45403d"/><path d="m23.288 18.015c0 .24721-.13662.4619-.3448.5725l-5.1395 2.8885c-.10408.07807-.2342.1171-.37082.1171s-.26673-.03904-.37082-.1171l-5.1395-2.8885c-.20818-.1106-.3448-.32528-.3448-.5725v-5.8551c0-.24722.13662-.4619.3448-.5725l5.1395-2.8885c.10409-.078064.2342-.1171.37082-.1171s.26673.039038.37082.1171l5.1395 2.8885c.20818.1106.3448.32528.3448.5725v5.8551m-5.8551-8.0345-3.8774 2.1794 3.8774 2.1794 3.8774-2.1794-3.8774-2.1794m-4.554 7.6506 3.9034 2.1989v-4.3653l-3.9034-2.1924v4.3588m9.1079 0v-4.3588l-3.9034 2.1924v4.3653z" style="fill:#7daea3;stroke-width:.65056"/>',
}

export const FolderContainer = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
