import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#45403d"/><path d="m19.589 11.113h-.59831v-.59831h.59831m-2.9916.59831h-.59831v-.59831h.59831m3.3087-1.1009.7838-.78379c.11368-.11368.11368-.30514 0-.4248-.11966-.11368-.31112-.11368-.4248 0l-.88547.88547c-.47865-.23334-1.0172-.37095-1.5856-.37095-.57438 0-1.1128.13762-1.5915.37694l-.89146-.89146c-.11368-.11368-.30514-.11368-.41882 0-.11966.11966-.11966.31112 0 .4248l.7838.78379c-.89146.65816-1.4718 1.6992-1.4718 2.8958h7.1798c0-1.1966-.59831-2.2437-1.4778-2.8958m2.9736 3.4942a.89745 .89745 0 0 0 -.89745 .89745v4.1882a.89745 .89745 0 0 0 .89745 .89745 .89745 .89745 0 0 0 .89745 -.89745v-4.1882a.89745 .89745 0 0 0 -.89745 -.89745m-10.172 0a.89745 .89745 0 0 0 -.89745 .89745v4.1882a.89745 .89745 0 0 0 .89745 .89745 .89745 .89745 0 0 0 .89745 -.89745v-4.1882a.89745 .89745 0 0 0 -.89745 -.89745m1.4958 5.9831a.59831 .59831 0 0 0 .59831 .59831h.59831v2.0941a.89745 .89745 0 0 0 .89745 .89745 .89745 .89745 0 0 0 .89745 -.89745v-2.0941h1.1966v2.0941a.89745 .89745 0 0 0 .89745 .89745 .89745 .89745 0 0 0 .89745 -.89745v-2.0941h.59831a.59831 .59831 0 0 0 .59831 -.59831v-5.9831h-7.1798z" style="fill:#a9b665;stroke-width:.59831"/>',
}

export const FolderAndroid = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
