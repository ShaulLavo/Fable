import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m14.27 17.241c-0.20504-2.0768-0.37164-3.8025-0.3702-3.8348 0.0015-0.03228-0.17348-0.05869-0.38869-0.05869h-0.3913v-1.487h3.0521v-2.8865l1.4401-0.86546c0.87705-0.52709 1.522-0.86546 1.6494-0.86546 0.30782 0 0.66682 0.38898 0.66682 0.7225 0 0.14574-0.04401 0.32486-0.09783 0.39805-0.0538 0.073194-0.55563 0.40755-1.1152 0.74301l-1.0173 0.60994-0.02177 1.0719-0.02177 1.0719h3.0565v1.487h-0.75389l-0.38086 3.8348-0.38086 3.8348h-4.5525l-0.3728-3.7761z" fill="#ea6962" stroke-width=".76956"/>',
}

export const FolderGulp = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
