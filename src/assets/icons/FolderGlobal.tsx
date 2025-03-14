import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><path d="m21.132 18.585c-0.1582-0.48678-0.61456-0.84578-1.1561-0.84578h-0.60848v-1.8254a0.60847 0.60847 0 0 0 -0.60847 -0.60847h-3.6508v-1.2169h1.2169a0.60847 0.60847 0 0 0 0.60847 -0.60848v-1.217h1.217a1.2169 1.2169 0 0 0 1.2169 -1.2169v-0.24947c1.7828 0.718 3.0424 2.4643 3.0424 4.5088 0 1.2656-0.48678 2.4156-1.2778 3.2797m-4.1985 1.5455c-2.4035-0.29815-4.2593-2.3426-4.2593-4.8252 0-0.37726 0.04868-0.74234 0.12778-1.0892l2.9146 2.9146v0.60848a1.2169 1.2169 0 0 0 1.2169 1.2169m0.60848-9.7356a6.0847 6.0847 0 0 0 -6.0847 6.0847 6.0847 6.0847 0 0 0 6.0847 6.0847 6.0847 6.0847 0 0 0 6.0847 -6.0847 6.0847 6.0847 0 0 0 -6.0847 -6.0847z" fill="#d3869b" stroke-width=".60847"/>',
}

export const FolderGlobal = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
