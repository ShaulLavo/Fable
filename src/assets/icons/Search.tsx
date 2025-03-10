import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M12.289 1.878H4.717A1.893 1.893 0 0 0 2.824 3.77v15.143a1.893 1.893 0 0 0 1.893 1.892h6.626a5.86 5.86 0 0 1-1.08-.851 5.814 5.814 0 0 1-.813-1.042H4.717V3.77h6.625v4.733h4.733V9.62a5.923 5.923 0 0 1 1.893.776v-2.84l-5.679-5.678m5.972 15.995a4.277 4.277 0 0 0-1.325-5.887c-1.997-1.26-4.647-.644-5.887 1.325-1.268 1.997-.653 4.628 1.325 5.887a4.26 4.26 0 0 0 4.534.019l2.952 2.905 1.316-1.315-2.915-2.934m-3.606.094a2.366 2.366 0 0 1-2.366-2.366 2.366 2.366 0 0 1 2.366-2.366 2.366 2.366 0 0 1 2.366 2.366 2.366 2.366 0 0 1-2.366 2.366z" fill="#42a5f5"/>',
}

export const Search = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
