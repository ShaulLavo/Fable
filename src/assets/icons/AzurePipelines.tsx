import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 40 40' },
	c: '<path d="M4.075 27.963h2.389v5.574h5.574v2.389H4.075z" style="fill:#64b5f6;stroke-width:.79626" transform="translate(1.129 1.129) scale(.94356)"/><path d="M4.075 13.365v7.3l4.644 4.782 1.991-2.128 5.972 5.972-1.99 1.99 4.645 4.644h7.3c.732 0 1.326-.594 1.326-1.327V23.982L16.019 12.038H5.403c-.734 0-1.328.594-1.328 1.327z" style="fill:#1565c0;stroke-width:.79626" transform="translate(1.129 1.129) scale(.94356)"/><path d="M9.821 23.232a1.328 1.328 0 0 1-.165-1.675L20.539 5.256a2.653 2.653 0 0 1 2.207-1.181h11.851c.733 0 1.327.594 1.327 1.327v11.851c0 .887-.442 1.715-1.18 2.208L18.443 30.344a1.328 1.328 0 0 1-1.676-.166z" style="fill:#1e88e5;stroke-width:.79626" transform="translate(1.129 1.129) scale(.94356)"/><path d="m8.313 29.222 12.725-12.725 2.464 2.464-12.725 12.725z" style="fill:#0a44c2" transform="matrix(.75132 0 0 .75132 4.974 4.974)"/><path d="m10.694 27.343 10.132-10.132 1.962 1.962-10.132 10.132z" style="fill:#64b5f6;stroke-width:.79626" transform="translate(1.129 1.129) scale(.94356)"/><path d="m14.276 27.686-1.962-1.962 8.513-8.513 1.962 1.962z" style="fill:#42a5f5;stroke-width:.79626" transform="translate(1.129 1.129) scale(.94356)"/><path d="M30 15a5 5 0 1 0-.001-10.001A5 5 0 0 0 30 15z" style="fill:#0a44c2" transform="matrix(.75132 0 0 .75132 4.974 4.974)"/><path d="M27.963 16.019a3.982 3.982 0 1 0 0-7.963 3.982 3.982 0 0 0 0 7.963z" style="fill:#90caf9;stroke-width:.79626" transform="translate(1.129 1.129) scale(.94356)"/>',
}

export const AzurePipelines = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
