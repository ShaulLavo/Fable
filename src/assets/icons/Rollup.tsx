import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '100 100 800 800' },
	c: '<linearGradient id="XMLID_8_" x1="429.39" x2="469.39" y1="517.16" y2="559.16" gradientTransform="translate(-54.117 -62.353) scale(1.1129)" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6533" offset="0"/><stop stop-color="#FF5633" offset=".157"/><stop stop-color="#FF4333" offset=".434"/><stop stop-color="#FF3733" offset=".714"/><stop stop-color="#F33" offset="1"/></linearGradient><linearGradient id="XMLID_11_" x1="450.12" x2="506.94" y1="514.21" y2="552.85" gradientTransform="translate(-54.117 -62.353) scale(1.1129)" gradientUnits="userSpaceOnUse"><stop stop-color="#FBB040" offset="0"/><stop stop-color="#FB8840" offset="1"/></linearGradient><linearGradient id="XMLID_16_" x1="508.33" x2="450.33" y1="295.76" y2="933.76" gradientTransform="translate(-54.117 -62.353) scale(1.1129)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF" offset="0"/><stop stop-color="#FFF" stop-opacity="0" offset="1"/></linearGradient><path d="M733.79 394.71c0 77.407-42.308 144.79-104.67 180.51-3.76 3.134-5.954 8.148-3.76 12.849l106.87 211.22c2.82 6.581-1.568 14.103-8.776 14.103h-408.35l2.194-1.254c15.356-8.774 121.91-219.06 225.95-318.72 104.05-99.658 117.21-66.439 59.857-174.87 0 0 44.188 86.182 6.581 92.763-29.459 5.328-97.15-60.17-72.08-119.09 25.071-57.664 123.79-46.695 169.23.314 17.236 30.085 26.952 64.872 26.952 102.17m-385.47 140.71c-41.367 76.154-67.692 131.62-82.108 170.48v-509.57c0-5.328 4.388-9.715 9.715-9.715h252.91c73.333 1.253 137.58 40.114 173.62 98.718-26.325-32.906-67.692-51.71-108.43-51.71-77.407 0-96.837 28.206-245.7 301.79z" style="fill:#f44336;stroke-width:31.339"/>',
}

export const Rollup = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
