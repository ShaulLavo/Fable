import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 100 100' },
	c: '<path d="M86.847 16.258a14.201 14.201 0 0 0-3.12-3.106c-3.694-2.69-8.97-2.69-19.524-2.69H35.78c-10.552 0-15.828 0-19.524 2.69a13.867 13.867 0 0 0-3.105 3.106c-2.691 3.695-2.691 8.971-2.691 19.538v28.408c0 10.552 0 15.825 2.69 19.524a14.201 14.201 0 0 0 3.106 3.12c3.695 2.691 8.971 2.691 19.524 2.691h28.423c10.552 0 15.825 0 19.524-2.691a14.578 14.578 0 0 0 3.12-3.12c2.692-3.694 2.692-8.971 2.692-19.524V35.796c-.004-10.567-.004-15.843-2.692-19.538zm-39.765 47.99c0 2.473 0 3.724-.402 4.7a5.318 5.318 0 0 1-2.876 2.876c-.977.402-2.213.402-4.701.402-2.473 0-3.724 0-4.7-.402a5.318 5.318 0 0 1-2.876-2.875c-.403-.977-.403-2.228-.403-4.701V38.169c0-2.99 0-4.485.576-5.62a5.365 5.365 0 0 1 2.329-2.33c1.133-.575 2.631-.575 5.607-.575h7.447zm16.966-15.515a9.388 9.388 0 1 1 9.388-9.388 9.381 9.381 0 0 1-9.375 9.388z" fill="#fff" style="fill:#ef5350;stroke-width:.67058"/>',
}

export const Rescript = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
