import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 253.6 253.6' },
	c: '<path fill="#607d8b" d="M56.244 166.749v64.673l63.681-64.673zM122.682 21.563 56.246 86.457v67.758l66.436-66.436z"/><path fill="#eceff1" d="M130.699 88.16v63.352L194.82 88.16z"/><path fill="#607d8b" d="m198.898 95.792-68.2 67.869v67.758l68.2-67.979z"/><path fill="#ffa000" d="m60.638 160.268 62.03.11V98.57z"/>',
}

export const Hack = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
