import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m11.47 10.422h1.29v-1.29c-.70959 0-1.29.58039-1.29 1.29zm0 5.1579h1.29v-1.289h-1.29zm2.58 5.1599h1.29v-1.29h-1.29zm-2.58-7.7389h1.29v-1.289h-1.29zm6.4499-3.869h-1.291v1.29h1.29zm3.869 0v1.29h1.289c0-.70959-.58039-1.29-1.289-1.29zm-9.0289 11.608v-1.29h-1.29c0 .70959.58039 1.29 1.29 1.29zm-1.29-2.58h1.29v-1.288h-1.29zm3.87-9.0279h-1.29v1.29h1.29zm1.289 11.608h1.29v-1.29h-1.29zm5.1599-5.1589h1.289v-1.29h-1.289zm0 5.1589c.70858 0 1.289-.58039 1.289-1.29h-1.289zm0-7.7389h1.289v-1.289h-1.289zm0 5.1589h1.289v-1.288h-1.289zm-2.58 2.58h1.29v-1.29h-1.29zm0-10.318h1.29v-1.29h-1.29zm-5.1589 7.7379h6.4489v-6.4479h-6.4499zm1.29-5.1579h3.869v3.869h-3.869z" style="fill:#7daea3;stroke-width:1.0094"/>',
}

export const FolderCore = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
