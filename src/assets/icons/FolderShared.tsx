import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m21.355 19.603c.61 0 1.103-.498 1.103-1.108l.006-5.542c0-.615-.499-1.108-1.109-1.108h-8.867c-.615 0-1.108.493-1.108 1.108v5.542c0 .61.493 1.108 1.108 1.108h-2.216v1.109h13.3v-1.109zm-3.88-1.956v-1.213c-1.54 0-2.554.47-3.325 1.507.31-1.48 1.17-2.954 3.326-3.253v-1.18l2.216 2.067z" fill="#d3869b"/>',
}

export const FolderShared = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
