import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m15.508 21.639c-4.6916 0-8.4915-1.9247-8.4915-4.3024s3.8-4.3024 8.4915-4.3024 8.4915 1.9247 8.4915 4.3024-3.8 4.3024-8.4915 4.3024m-3.6726-5.6256c0.38212 0 0.64394 0.07076 0.77131 0.21936 0.12737 0.14152 0.15568 0.39627 0.09199 0.72886-0.07076 0.37504-0.20521 0.61564-0.41042 0.77131-0.19814 0.15568-0.50242 0.23352-0.91284 0.23352h-0.61564l0.37504-1.953h0.70055m-2.4767 3.9273h1.019l0.24059-1.2383h0.87038c0.38212 0 0.69347-0.04246 0.94114-0.1203 0.24767-0.08491 0.47411-0.21936 0.67932-0.41042 0.16983-0.15568 0.30428-0.32551 0.41042-0.51657 0.10614-0.18398 0.18398-0.39627 0.21936-0.62271 0.11322-0.55195 0.03538-0.9836-0.23352-1.2879-0.27597-0.31136-0.70055-0.45996-1.2879-0.45996h-1.9531l-0.90576 4.6562m5.1303-5.8945-0.90576 4.6562h1.0048l0.52364-2.6678h0.8067c0.25475 0 0.42458 0.04246 0.50242 0.12737 0.07783 0.08491 0.092 0.24059 0.04953 0.46703l-0.40335 2.0733h1.0261l0.4175-2.1724c0.092-0.43873 0.02123-0.75716-0.19106-0.96237-0.21229-0.19106-0.60148-0.28305-1.1676-0.28305h-0.89868l0.25474-1.2383h-1.019m5.2647 1.9672c0.38919 0 0.64394 0.07076 0.77131 0.21936 0.12737 0.14152 0.15568 0.39627 0.09199 0.72886-0.07076 0.37504-0.20521 0.61564-0.40335 0.77131-0.20521 0.15568-0.50949 0.23352-0.91992 0.23352h-0.60149l0.35381-1.953h0.70763m-2.4767 3.9273h1.019l0.24059-1.2383h0.86331c0.38919 0 0.70763-0.04246 0.9553-0.1203 0.24767-0.08491 0.45996-0.21936 0.67225-0.41042 0.16983-0.15568 0.31136-0.32551 0.41042-0.51657 0.10615-0.18398 0.18398-0.39627 0.22644-0.62271 0.10614-0.55195 0.0283-0.9836-0.24059-1.2879-0.25475-0.31136-0.70055-0.45996-1.2879-0.45996h-1.946z" fill="#7daea3" stroke-width=".70763"/>',
}

export const FolderPhp = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
