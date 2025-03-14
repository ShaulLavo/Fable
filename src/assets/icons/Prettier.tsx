import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 210 210' },
	c: '<g transform="matrix(.9 0 0 .9 10.5 10.5)" fill="none" fill-rule="evenodd"><rect x="165" y="40" width="20" height="10" rx="5" fill="#56B3B4"/><rect x="15" y="200" width="60" height="10" rx="5" fill="#EA5E5E"/><rect x="135" y="120" width="40" height="10" rx="5" fill="#BF85BF"/><rect x="75" y="120" width="50" height="10" rx="5" fill="#EA5E5E"/><rect x="15" y="120" width="50" height="10" rx="5" fill="#56B3B4"/><rect x="15" y="160" width="60" height="10" rx="5" fill="#BF85BF"/><rect x="15" y="80" width="60" height="10" rx="5" fill="#BF85BF"/><rect x="65" y="20" width="110" height="10" rx="5" fill="#F7BA3E"/><rect x="15" y="20" width="40" height="10" rx="5" fill="#EA5E5E"/><rect x="55" y="180" width="20" height="10" rx="5" fill="#F7BA3E"/><rect x="55" y="60" width="20" height="10" rx="5" fill="#56B3B4"/><rect x="15" y="180" width="30" height="10" rx="5" fill="#56B3B4"/><rect x="15" y="60" width="30" height="10" rx="5" fill="#F7BA3E"/><rect x="95" y="100" width="90" height="10" rx="5" fill="#56B3B4"/><rect x="45" y="100" width="40" height="10" rx="5" fill="#F7BA3E"/><rect x="15" y="100" width="20" height="10" rx="5" fill="#EA5E5E"/><rect x="105" y="40" width="50" height="10" rx="5" fill="#BF85BF"/><rect x="15" y="40" width="80" height="10" rx="5" fill="#56B3B4"/><rect x="45" y="140" width="100" height="10" rx="5" fill="#F7BA3E"/><rect x="15" y="140" width="20" height="10" rx="5" fill="#BF85BF"/><rect x="135" y="60" width="60" height="10" rx="5" fill="#EA5E5E"/><rect x="135" y="80" width="60" height="10" rx="5" fill="#F7BA3E"/><rect x="15" width="130" height="10" rx="5" fill="#56B3B4"/></g>',
}

export const Prettier = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
