import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 56 56' },
	c: '<g transform="translate(1.76 1.76) scale(.93714)"><path d="M52.5 16.917c0-4.667-8.75-15.167-9.333-15.75 2.098 9.444 1.837 8.034 2.188 11.05.093.795.132 1.62-.186 2.355-1.457 3.365-6.67 5.26-6.67 5.26l8.166 7S52.5 21 52.5 16.918zm-49 0c0-4.667 8.75-15.167 9.333-15.75-2.098 9.444-1.838 8.034-2.188 11.05-.093.795-.132 1.62.186 2.355 1.457 3.365 6.67 5.26 6.67 5.26l-8.166 7S3.5 21 3.5 16.918z" fill="#BFBFBF" style="fill:#bdbdbd"/><path d="M28 12.25c9.144 0 15.784 6.427 18.667 14.583v14s-5.834 2.334-9.334 4.667-8.75 9.333-8.75 9.333H28z" fill="#566366" style="fill:#546e7a"/><path d="M28 12.25c-9.144 0-15.784 6.427-18.667 14.583v14s5.834 2.334 9.334 4.667 8.75 9.333 8.75 9.333H28z" fill="#7D9199" style="fill:#78909c"/><circle cx="28" cy="26.833" r="2.333" fill="#fff"/></g>',
}

export const Opa = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
