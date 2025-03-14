import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<defs/><path d="M12.002 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10zm.139 4.419c.428 0 .784.099 1.07.294.288.196.531.44.731.731l5.71 8.262H9.026l1.707-2.35h3.15c.295 0 .552.01.77.028a11.19 11.19 0 0 1-.443-.62c-.169-.251-.33-.485-.485-.704l-1.64-2.417-4.29 6.063H4.45l5.86-8.262c.19-.264.431-.5.723-.71.291-.21.661-.315 1.108-.315z" fill="#1976d2" stroke-width=".439"/>',
}

export const Autoit = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
