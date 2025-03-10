import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 152.99 160.01' },
	c: '<defs/><g transform="translate(10.17 10.175) scale(.87285)" data-name="Layer 2"><g id="Fuse_Box" data-name="Fuse Box"><g id="LOGO"><path class="cls-1" fill="#fff" d="m76.56 2.19 74.22 24.93-7.7 87.77-65.41 42.66-69.79-43.93-5.7-86.13z"/><path d="M77.69 160 5.87 114.81 0 26 76.55 0 153 25.67l-7.94 90.4zM9.88 112.43l67.77 42.66 63.45-41.39 7.47-85.13-72-24.18L4.36 28.95z" fill="#515151" style="fill:#515151"/><path fill="#1d79bf" style="fill:#1d79bf" d="M76.4 148.8V61.68l66.93-29.82-5.99 78.77z"/><path id="F" class="cls-4" fill="#383838" d="m76.4 148.8-60.35-37.39L9.63 31.8 76.4 61.68z"/><path class="cls-1" d="m25.58 52.73.54 15.93 37.35 18.18.12 14.69-37-18.21 1.64 37.1-14.56-9-5.05-80.55 67.79 30.82v15.46z" fill="#fff"/><path class="cls-1" d="M135.91 90.77c-.08 13.12-6.33 26.59-16.77 33.12l-42.8 27.93V61.71l42.27-18.84c5.16-2.41 9.51-1.43 12.4 3.11 1.9 3 2.89 7.23 2.86 12.21A35.69 35.69 0 0 1 129.34 76c4.29 2 6.66 6.55 6.57 14.77zM123 63.76c0-4.64-2-6.93-4.92-5.45l-29 14.48L89 90l29.44-15.59c2.5-1.32 4.56-5.91 4.56-10.65zM125.15 96c0-5.71-2.42-8.24-6.55-5.93L89 106.64v19.58l29.34-17.46c4.43-2.64 6.79-7.27 6.81-12.76z" fill="#fff"/><path id="TOP" class="cls-4" fill="#383838" d="M76.4 8.82 9.71 31.77l109.77 2.38-84.02 9.21L76.4 61.68l20.76-9.25-27.73-1.37 49.78-8.46 24.12-10.74z"/></g></g></g>',
}

export const Fusebox = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
