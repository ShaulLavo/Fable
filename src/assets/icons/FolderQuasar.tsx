import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#e57373" fill-rule="nonzero" style="fill:#45403d"/><path d="m19.018 14.626a1.1975 1.1975 0 0 1-1.1975 1.1975 1.1975 1.1975 0 0 1-1.1975-1.1975 1.1975 1.1975 0 0 1 1.1975-1.1975 1.1975 1.1975 0 0 1 1.1975 1.1975zm4.118-3.0693a6.1384 6.1384 0 0 0-0.94062-1.2297l-1.3843 0.79926c-0.43148-0.36858-0.92189-0.6509-1.4453-0.83766-0.47261 0.47896-0.84805 1.0142-1.1187 1.5962 1.5409-0.10488 3.1324 0.45282 4.6099 1.6071l0.87122-0.50299a6.1384 6.1384 0 0 0-0.59215-1.4322zm3.5e-4 6.1379a6.1384 6.1384 0 0 0 0.59466-1.4295l-1.3843-0.79926c0.10346-0.55794 0.10276-1.1238 0.0028-1.6705-0.6511-0.16981-1.3023-0.22736-1.9417-0.17071 0.86131 1.2821 1.174 2.9392 0.91311 4.7958l0.87122 0.50299a6.1384 6.1384 0 0 0 0.94421-1.2289zm-5.3152 3.0693a6.1384 6.1384 0 0 0 1.5353-0.19974v-1.5985c0.53493-0.18939 1.0246-0.47291 1.4481-0.83287-0.17849-0.64878-0.45426-1.2415-0.82301-1.7669-0.67964 1.3869-1.9584 2.4863-3.6968 3.1887v1.006a6.1384 6.1384 0 0 0 1.5364 0.20328zm-5.3157-3.0687a6.1384 6.1384 0 0 0 0.94062 1.2297l1.3843-0.79926c0.43148 0.36858 0.92189 0.6509 1.4453 0.83766 0.47261-0.47897 0.84805-1.0142 1.1187-1.5962-1.5409 0.10487-3.1324-0.45282-4.6099-1.6071l-0.87122 0.50299a6.1384 6.1384 0 0 0 0.59215 1.4322zm-3.5e-4 -6.1379a6.1384 6.1384 0 0 0-0.59466 1.4295l1.3843 0.79926c-0.10346 0.55794-0.10276 1.1238-0.0028 1.6705 0.6511 0.16981 1.3023 0.22736 1.9417 0.17072-0.86132-1.2821-1.1741-2.9392-0.91312-4.7958l-0.87122-0.50299a6.1384 6.1384 0 0 0-0.94422 1.2289zm5.3152-3.0693a6.1384 6.1384 0 0 0-1.5353 0.19974v1.5985c-0.53492 0.18939-1.0246 0.47291-1.4481 0.83287 0.17849 0.64878 0.45426 1.2415 0.82302 1.7669 0.67968-1.3869 1.9584-2.4863 3.6968-3.1887v-1.006a6.1384 6.1384 0 0 0-1.5364-0.20328z" fill="#263238" style="fill:#7daea3;stroke-width:.0049288"/>',
}

export const FolderQuasar = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
