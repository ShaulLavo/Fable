import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 60 60' },
	c: '<path d="M25 10H10C7.225 10 5 12.225 5 15V45C5 47.7425 7.2575 50 10 50H50C52.7425 50 55 47.7425 55 45V20C55 18.6739 54.4732 17.4021 53.5355 16.4645C52.5979 15.5268 51.3261 15 50 15H30L25 10Z" fill="#45403d"/> <path d="M29.3072 31.5327L43.5079 38.2461V56.2699L29.3072 49.5565V31.5327ZM58.5931 31.5601L44.3923 38.2734V56.2973L58.5931 49.584V31.5601ZM43.9501 25.4727L58.0274 30.9568L43.9501 37.5756L29.9672 30.9568L43.9501 25.4727Z" fill="#FFD391"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M39.456 27.191L35.61 28.682L50.375 35.334L50.29 41.888L53.52 40.284L53.494 33.364L39.456 27.191Z" fill="#FF9900"/>',
}

export const FolderStorage = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
