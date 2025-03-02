import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m19 20h-15c-1.11 0-2-.9-2-2v-12c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#e57373" style="fill:#45403d"/><path d="m21.944 12.474a4.8684 4.8684 0 0 1 0 6.885c-1.3327 1.3327-3.2409 1.7262-4.9179 1.2-.95898.29999-1.9917.29999-2.9507 0-1.677.52621-3.5851.13278-4.9179-1.2a4.8684 4.8684 0 0 1 0 -6.885c1.3327-1.3327 3.2409-1.7262 4.9179-1.2.95898-.29999 1.9917-.29999 2.9507 0 1.677-.52621 3.5851-.13279 4.9179 1.2m-9.8357 6.885a4.8684 4.8684 0 0 1 2e-6 -6.885c-.72293.10328-1.4114.42786-1.9671.98358a3.4775 3.4775 0 0 0 -1e-6 4.9179c.55572.55572 1.2442.8803 1.9671.98357m2.9507 0a4.8684 4.8684 0 0 1 0 -6.885c-.72293.10328-1.4114.42786-1.9671.98357a3.4775 3.4775 0 0 0 0 4.9179c.55572.55572 1.2442.8803 1.9671.98357m5.9014-5.9014c-.55572-.55572-1.2442-.8803-1.9671-.98358a4.8684 4.8684 0 0 1 2e-6 6.885c.72292-.10328 1.4114-.42785 1.9671-.98357a3.4775 3.4775 0 0 0 0 -4.9179m-4.9179 0a3.4775 3.4775 0 0 0 -2e-6 4.9179c.29507.29507.62457.52622.98358.6885.359-.16229.6885-.39343.98357-.6885a3.4775 3.4775 0 0 0 0 -4.9179c-.29507-.29507-.62457-.52621-.98357-.6885-.359.16229-.6885.39343-.98357.6885z" style="fill:#d3869b;stroke-width:.69549"/>',
}

export const FolderAnimationOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
