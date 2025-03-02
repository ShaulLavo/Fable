import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2Z" fill="#45403d" fill-opacity=".8"/><path d="M17.92 16.302c.92 0 2.25-.191 2.25-1.285a1.026 1.026 0 0 0-.022-.252l-.547-2.379c-.127-.524-.238-.761-1.157-1.22-.713-.366-2.269-.969-2.728-.969-.427 0-.552.552-1.062.552-.492 0-.857-.412-1.317-.412-.441 0-.728.302-.95.92 0 0-.618 1.744-.699 1.997a.474.474 0 0 0-.015.143c0 .678 2.67 2.901 6.247 2.901m2.392-.837c.128.603.128.666.128.745 0 1.03-1.158 1.601-2.68 1.601-3.439.003-6.451-2.013-6.451-3.344 0-.185.037-.37.11-.54-1.234.062-2.838.283-2.838 1.696 0 2.316 5.487 5.17 9.83 5.17 3.33 0 4.17-1.507 4.17-2.696 0-.936-.809-1.998-2.267-2.632" fill="#ffcdd2"/>',
}

export const FolderRedHat = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
