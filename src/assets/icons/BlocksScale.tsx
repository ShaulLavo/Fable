import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<style>.spinner_LWk7{animation:spinner_GWy6 1.2s linear infinite,spinner_BNNO 1.2s linear infinite}.spinner_yOMU{animation:spinner_GWy6 1.2s linear infinite,spinner_pVqn 1.2s linear infinite;animation-delay:.15s}.spinner_KS4S{animation:spinner_GWy6 1.2s linear infinite,spinner_6uKB 1.2s linear infinite;animation-delay:.3s}.spinner_zVee{animation:spinner_GWy6 1.2s linear infinite,spinner_Qw4x 1.2s linear infinite;animation-delay:.45s}@keyframes spinner_GWy6{0%,50%{width:9px;height:9px}10%{width:11px;height:11px}}@keyframes spinner_BNNO{0%,50%{x:1.5px;y:1.5px}10%{x:.5px;y:.5px}}@keyframes spinner_pVqn{0%,50%{x:13.5px;y:1.5px}10%{x:12.5px;y:.5px}}@keyframes spinner_6uKB{0%,50%{x:13.5px;y:13.5px}10%{x:12.5px;y:12.5px}}@keyframes spinner_Qw4x{0%,50%{x:1.5px;y:13.5px}10%{x:.5px;y:12.5px}}</style><rect class="spinner_LWk7" x="1.5" y="1.5" rx="1" width="9" height="9"/><rect class="spinner_yOMU" x="13.5" y="1.5" rx="1" width="9" height="9"/><rect class="spinner_KS4S" x="13.5" y="13.5" rx="1" width="9" height="9"/><rect class="spinner_zVee" x="1.5" y="13.5" rx="1" width="9" height="9"/>',
}

export const BlocksScale = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
