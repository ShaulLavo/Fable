import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg viewBox="0 0 24 24" version="1.1" id="svg1" sodipodi:docname="folder-open-cmake.svg" inkscape:version="1.3 (0e150ed6c4, 2023-07-21)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs1" /> <sodipodi:namedview id="namedview1" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:zoom="36.083333" inkscape:cx="11.986143" inkscape:cy="12" inkscape:window-width="1920" inkscape:window-height="1112" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg1" /> <path d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z" id="path1" style="fill:#45403d;fill-opacity:1" /> <g id="g2" transform="matrix(0.64501372,0,0,0.64501372,9.9666185,7.2114927)" style="display:inline"> <path d="m 11.94,2.984 -9.012,18.033 9.875,-8.47 z" fill="#1e88e5" id="path1-6" /> <path d="m 11.958,2.982 0.002,0.29 1.312,14.499 -0.002,0.006 0.023,0.26 7.363,2.978 h 0.415 l -0.158,-0.31 -0.114,-0.228 H 20.798 L 11.958,2.983 Z" fill="#e53935" id="path2" /> <path d="M 8.558,16.13 2.931,21.014 H 20.674 V 20.998 L 8.559,16.13 Z" fill="#7cb342" id="path3" /> </g>',
}

export const FolderCmakeOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
