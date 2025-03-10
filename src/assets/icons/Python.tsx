import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 16 16' },
	c: '<defs><style>.cls-1{fill:url(#Dégradé_sans_nom_11);}.cls-2{fill:url(#Dégradé_sans_nom_2);}</style><linearGradient id="Dégradé_sans_nom_11" x1="48" y1="-32.55" x2="53.96" y2="-38.53" gradientTransform="matrix(1, 0, 0, -1, -44.94, -29.47)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#387eb8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="Dégradé_sans_nom_2" x1="51.66" y1="-36.36" x2="58.07" y2="-42.49" gradientTransform="matrix(1, 0, 0, -1, -44.94, -29.47)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe052"/><stop offset="1" stop-color="#ffc331"/></linearGradient></defs><g id="layer1"><g id="g1894"><path id="path8615" class="cls-1" d="M7.91,2C4.85,2,5,3.33,5,3.33V4.7H8v.42H3.89s-2-.23-2,2.86,1.71,3,1.71,3h1V9.53A1.62,1.62,0,0,1,6.34,7.82h2.9a1.55,1.55,0,0,0,1.63-1.57V3.6S11.11,2,7.91,2ZM6.3,2.93a.52.52,0,0,1,.53.52A.53.53,0,0,1,6.3,4a.52.52,0,0,1-.52-.53A.52.52,0,0,1,6.3,2.93Z"/><path id="path8620" class="cls-2" d="M8,14c3.06,0,2.87-1.33,2.87-1.33V11.3H8v-.42H12s2,.23,2-2.86-1.71-3-1.71-3h-1V6.47A1.63,1.63,0,0,1,9.58,8.18H6.68A1.55,1.55,0,0,0,5.05,9.75V12.4S4.8,14,8,14Zm1.61-.93a.52.52,0,0,1-.52-.52A.52.52,0,0,1,9.61,12a.53.53,0,0,1,.53.53A.52.52,0,0,1,9.61,13.07Z"/></g></g>',
}

export const Python = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
