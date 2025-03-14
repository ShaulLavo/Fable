import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m19 20h-15c-1.11 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><path d="m17.293 17.786-1.5303-1.5122 0.01807-0.01807c1.0483-1.1688 1.7953-2.5123 2.2351-3.9341h1.7652v-1.2049h-4.2173v-1.2049h-1.2049v1.2049h-4.2173v1.2049h6.7295c-0.40365 1.1567-1.0423 2.2592-1.9098 3.2232-0.56029-0.62054-1.0242-1.3013-1.3917-2.0183h-1.2049c0.4398 0.98202 1.0423 1.9098 1.7953 2.7472l-3.0665 3.0244 0.8555 0.8555 3.0123-3.0123 1.8737 1.8737 0.45788-1.229m3.3919-3.0545h-1.2049l-2.7111 7.2296h1.2049l0.67476-1.8074h2.8617l0.68079 1.8074h1.2049l-2.7111-7.2296m-1.5785 4.2173 0.97599-2.6087 0.97599 2.6087z" fill="#d3869b" stroke-width=".60247"/>',
}

export const FolderI18nOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
