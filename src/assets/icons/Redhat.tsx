import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <!-- Created with Vectornator (http://vectornator.io/) --> <svg height="100%" stroke-miterlimit="10" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1" viewBox="0 0 24 24" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:vectornator="http://vectornator.io" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs/> <g id="Untitled" vectornator:layerName="Untitled"> <g opacity="1"> <path d="M15.1737 13.098C16.4214 13.098 18.228 12.8385 18.228 11.3542C18.2321 11.2396 18.222 11.1249 18.1981 11.0128L17.4545 7.78377C17.2828 7.07308 17.132 6.75067 15.8843 6.12682C14.9171 5.63173 12.806 4.81324 12.1822 4.81324C11.6032 4.81324 11.4335 5.56186 10.7408 5.56186C10.074 5.56186 9.57896 5.00289 8.95411 5.00289C8.35521 5.00289 7.96593 5.41214 7.66449 6.25059C7.66449 6.25059 6.82603 8.61823 6.71623 8.9616C6.69977 9.02475 6.69304 9.09005 6.69627 9.15524C6.69627 10.0755 10.3196 13.093 15.1737 13.093M18.4207 11.9571C18.5934 12.7756 18.5934 12.8604 18.5934 12.9682C18.5934 14.3656 17.0222 15.1412 14.9571 15.1412C10.2897 15.1442 6.20118 12.4092 6.20118 10.6026C6.20046 10.3507 6.25142 10.1013 6.35091 9.86992C4.67599 9.95377 2.5 10.2532 2.5 12.1717C2.5 15.3139 9.94628 19.1868 15.8404 19.1868C20.3601 19.1868 21.5 17.1425 21.5 15.5285C21.5 14.2588 20.402 12.8175 18.4227 11.9571" fill="#dd2c00" fill-rule="nonzero" opacity="1" stroke="none"/> <path d="M18.4207 11.9571C18.5934 12.7756 18.5934 12.8604 18.5934 12.9682C18.5934 14.3656 17.0222 15.1412 14.9571 15.1412C10.2897 15.1442 6.20118 12.4092 6.20118 10.6026C6.20046 10.3507 6.25142 10.1013 6.35091 9.86992L6.71723 8.96559C6.7005 9.02736 6.6931 9.09128 6.69527 9.15524C6.69527 10.0755 10.3186 13.093 15.1737 13.093C16.4214 13.093 18.228 12.8355 18.228 11.3502C18.2322 11.2353 18.2221 11.1203 18.1981 11.0078L18.4207 11.9571Z" fill="#000000" fill-rule="nonzero" opacity="1" stroke="none"/> </g> </g>',
}

export const Redhat = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
