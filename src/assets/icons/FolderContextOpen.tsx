import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><path d="M10.26 18.997c-.008-.97-.016-1.79-.008-1.83l.008-.071.604-.012c.33-.008.607-.016.61-.02 0 0 .005-.45.005-.99 0-.78.008-1.018.035-1.116.11-.414.43-.746.852-.884.075-.023.533-.031 2.047-.043l1.953-.012.008-.903.004-.907h-1.23V8.54h3.667v3.669h-1.207v1.818l1.95.008c2.153.012 2.038 0 2.318.166.154.09.21.138.34.307.134.178.217.36.244.56.012.087.024.58.024 1.1v.94h1.23v3.644h-3.656l-.016-3.668h.564c.312 0 .588-.008.62-.016l.05-.012v-1.794H17.61v1.822h1.207v3.668h-3.669v-3.668h.564c.308 0 .584-.008.616-.016l.05-.012v-1.794H12.71v1.822h1.207v3.668h-3.641z" fill="#b2dfdb"/>',
}

export const FolderContextOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
