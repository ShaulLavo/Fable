import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 60 60' },
	c: '<path d="M47.5 50H10C8.67392 50 7.40215 49.4732 6.46447 48.5355C5.52678 47.5979 5 46.3261 5 45V15C5 12.225 7.225 10 10 10H25L30 15H47.5C50.2425 15 52.5 17.2575 52.5 20H10V45L15.35 25H58.025L52.325 46.25C51.75 48.425 49.8 50 47.5 50Z" fill="#45403d"/> <path d="M29.3072 31.5327L43.5079 38.2461V56.2699L29.3072 49.5565V31.5327ZM58.5931 31.5601L44.3923 38.2734V56.2973L58.5931 49.584V31.5601ZM43.9501 25.4727L58.0274 30.9568L43.9501 37.5756L29.9672 30.9568L43.9501 25.4727Z" fill="#FFD391"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M39.456 27.191L35.61 28.682L50.375 35.334L50.29 41.888L53.52 40.284L53.494 33.364L39.456 27.191Z" fill="#FF9900"/>',
}

export const FolderStorageOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
