import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<defs><linearGradient id="XMLID_2_-1" x1="31.841" x2="110.24" y1="120.56" y2="73.24" gradientUnits="userSpaceOnUse"><stop stop-color="#d8a657" offset="0"/><stop stop-color="#e78a4e" offset="1"/></linearGradient><linearGradient id="XMLID_3_-6" x1="48.361" x2="119.92" y1="6.9083" y2="69.555" gradientUnits="userSpaceOnUse"><stop stop-color="#ea6962" offset="0"/><stop stop-color="#ea6962" offset=".57"/><stop stop-color="#e78a4e" offset="1"/></linearGradient><linearGradient id="XMLID_4_-7" x1="52.947" x2="10.538" y1="63.641" y2="37.156" gradientUnits="userSpaceOnUse"><stop stop-color="#ab6c7d" offset="0"/><stop stop-color="#ab6c7d" offset=".3852"/><stop stop-color="#d3869b" offset=".7654"/><stop stop-color="#d3869b" offset=".957"/></linearGradient><linearGradient id="XMLID_5_-3" x1="52.174" x2="10.771" y1="3.7019" y2="37.897" gradientUnits="userSpaceOnUse"><stop stop-color="#ea6962" offset="0"/><stop stop-color="#ea6962" offset=".364"/><stop stop-color="#d3869b" offset="1"/></linearGradient></defs><path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#45403d"/><g transform="matrix(.11021 0 0 .11021 10.126 8.976)"><path id="XMLID_3041_" d="m118.6 71.8c0.9-0.8 1.4-1.9 1.5-3.2 0.1-2.6-1.8-4.7-4.4-4.9-1.2-0.1-2.4 0.4-3.3 1.1l-83.8 45.9c-1.9 0.8-3.6 2.2-4.7 4.1-2.9 4.8-1.3 11 3.6 13.9 3.4 2 7.5 1.8 10.7-0.2 0.2-0.2 0.5-0.3 0.7-0.5l78-54.8c0.4-0.3 1.5-1.1 1.7-1.4z" fill="url(#XMLID_2_-1)"/><path id="XMLID_3049_" d="m118.8 65.1-63.8-62.6c-1.4-1.5-3.4-2.5-5.7-2.5-4.3 0-7.7 3.5-7.7 7.7 0 2.1 0.8 3.9 2.1 5.3 0.4 0.4 0.8 0.7 1.2 1l67.4 57.7c0.8 0.7 1.8 1.2 3 1.3 2.6 0.1 4.7-1.8 4.9-4.4 0-1.3-0.5-2.6-1.4-3.5z" fill="url(#XMLID_3_-6)"/><path id="XMLID_3042_" d="m57.1 59.5c-0.1 0-39.4-31-40.2-31.5l-1.8-0.9c-5.8-2.2-12.2 0.8-14.4 6.6-1.9 5.1 0.2 10.7 4.6 13.4 0.7 0.4 1.3 0.7 2 0.9 0.4 0.2 45.4 18.8 45.4 18.8 1.8 0.8 3.9 0.3 5.1-1.2 1.5-1.9 1.2-4.6-0.7-6.1z" fill="url(#XMLID_4_-7)"/><path id="XMLID_3057_" d="m49.3 0c-1.7 0-3.3 0.6-4.6 1.5l-39.8 26.8c-0.1 0.1-0.2 0.1-0.2 0.2h-0.1c-1.7 1.2-3.1 3-3.9 5.1-2.2 5.8 0.8 12.3 6.6 14.4 3.6 1.4 7.5 0.7 10.4-1.4 0.7-0.5 1.3-1 1.8-1.6l34.6-31.2c1.8-1.4 3-3.6 3-6.1 0-4.2-3.5-7.7-7.8-7.7z" fill="url(#XMLID_5_-3)"/></g>',
}

export const FolderIntellijOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
