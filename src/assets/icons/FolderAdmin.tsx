import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#45403d"/><path d="m18.139 8.3177-5.326 2.3671v3.5506c0 3.2843 2.2724 6.3556 5.326 7.1013 3.0535-0.74563 5.326-3.8169 5.326-7.1013v-3.5506l-5.326-2.3671m0 2.3671a1.7753 1.7753 0 0 1 1.7753 1.7753 1.7753 1.7753 0 0 1-1.7753 1.7753 1.7753 1.7753 0 0 1-1.7753-1.7753 1.7753 1.7753 0 0 1 1.7753-1.7753m3.0358 7.1013c-0.71604 1.0948-1.7872 1.9173-3.0358 2.3197-1.2486-0.40241-2.3197-1.225-3.0358-2.3197-0.2012-0.29589-0.37282-0.59177-0.51484-0.90541 0-0.97642 1.6037-1.7753 3.5506-1.7753s3.5506 0.78114 3.5506 1.7753c-0.14203 0.31364-0.31364 0.60953-0.51484 0.90541z" style="fill:#7daea3;stroke-width:.59177"/>',
}

export const FolderAdmin = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
