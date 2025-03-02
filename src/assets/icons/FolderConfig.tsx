import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m17.293 17.786a2.3076 2.3076 0 0 1 -2.3076 -2.3076 2.3076 2.3076 0 0 1 2.3076 -2.3076 2.3076 2.3076 0 0 1 2.3076 2.3076 2.3076 2.3076 0 0 1 -2.3076 2.3076m4.8988-1.6681c0.02637-0.21098 0.04615-0.42197 0.04615-0.63954 0-0.21758-0.01978-0.43515-0.04615-0.65932l1.3912-1.0747c0.12527-0.0989 0.15824-0.27692 0.07912-0.42197l-1.3186-2.2813c-0.07912-0.14505-0.25714-0.20439-0.40219-0.14505l-1.6417 0.65932c-0.34285-0.25714-0.69888-0.4813-1.1143-0.64614l-0.24395-1.7472c-0.02637-0.15824-0.16483-0.27692-0.32966-0.27692h-2.6373c-0.16483 0-0.30329 0.11868-0.32966 0.27692l-0.24395 1.7472c-0.41537 0.16483-0.77141 0.389-1.1143 0.64614l-1.6417-0.65932c-0.14505-0.05934-0.32307 0-0.40219 0.14505l-1.3186 2.2813c-0.08571 0.14505-0.04615 0.32307 0.07912 0.42197l1.3912 1.0747c-0.02637 0.22417-0.04615 0.44174-0.04615 0.65932s0.01978 0.42856 0.04615 0.63954l-1.3912 1.0945c-0.12527 0.0989-0.16483 0.27692-0.07912 0.42197l1.3186 2.2813c0.07912 0.14505 0.25714 0.1978 0.40219 0.14505l1.6417-0.66592c0.34285 0.26373 0.69888 0.4879 1.1143 0.65273l0.24395 1.7472c0.02637 0.15824 0.16483 0.27692 0.32966 0.27692h2.6373c0.16483 0 0.30329-0.11868 0.32966-0.27692l0.24395-1.7472c0.41537-0.17142 0.77141-0.389 1.1143-0.65273l1.6417 0.66592c0.14505 0.05275 0.32307 0 0.40219-0.14505l1.3186-2.2813c0.07912-0.14505 0.04615-0.32307-0.07912-0.42197z" fill="#7daea3" stroke-width=".65932"/>',
}

export const FolderConfig = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
