import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m23.286 13.992h-4.3475l1.7569-1.8082c-1.7505-1.7313-4.5847-1.7954-6.3352-0.06412-1.7505 1.7377-1.7505 4.5398 0 6.2839 1.7505 1.7313 4.5847 1.7313 6.3352 0 0.87206-0.86564 1.3081-1.8724 1.3081-3.142h1.2824c0 1.2696-0.56427 2.9175-1.6928 4.0333-2.2507 2.2314-5.9056 2.2314-8.1563 0-2.2443-2.225-2.2635-5.8415-0.01282-8.0665 2.2507-2.225 5.8607-2.225 8.1114 0l1.7505-1.8018v4.5655m-5.4504-1.3594v2.7252l2.2443 1.3337-0.46168 0.77588-2.7444-1.6287v-3.2061z" fill="#a9b665" stroke-width=".64122"/>',
}

export const FolderUpdate = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
