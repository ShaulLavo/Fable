import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#0288d1" fill-rule="nonzero" style="fill:#45403d"/><path d="m17.813 11.575v1.9513l2.6017-2.6017-2.6017-2.6017v1.9513a5.2034 5.2034 0 0 0 -5.2034 5.2034c0 1.0212.2992 1.9708.80653 2.7708l.94962-.94962c-.29269-.53985-.4553-1.1708-.4553-1.8212a3.9026 3.9026 0 0 1 3.9026 -3.9026m4.3969 1.1317-.94962.94962c.28619.54636.4553 1.1708.4553 1.8212a3.9026 3.9026 0 0 1 -3.9026 3.9026l-1e-6-1.9513-2.6017 2.6017 2.6017 2.6017 1e-6-1.9513a5.2034 5.2034 0 0 0 5.2034 -5.2034c0-1.0212-.2992-1.9708-.80653-2.7708z" fill="#b3e5fc" stroke="#b3e5fc" stroke-miterlimit="1.4142" stroke-width=".29" style="fill:#ea6962;stroke:#ea6962"/>',
}

export const FolderGenerator = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
