import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg fill="none" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <g transform="translate(-.4 -.49911)"> <path d="m10.786 2.006c-2.4-0.083-4.8 0.666-6.786 2.249l1.324 0.75c1.573-1.167 3.559-1.666 5.462-1.583z" fill="#2979ff"/> <path d="m17.82 5.17c-1.654-1.748-3.806-2.83-6.123-3.08v1.415a9.306 9.306 0 0 1 5.13 2.665l0.994-1z" fill="#448aff"/> <path d="m20.8 12c-0.083-2.166-0.91-4.33-2.317-6.163l-0.993 1c1.158 1.582 1.82 3.33 1.903 5.163z" fill="#7e57c2"/> <path d="m18.483 19.162c1.407-1.832 2.234-3.998 2.317-6.163h-1.407c-0.082 1.832-0.745 3.581-1.903 5.163z" fill="#ab47bc"/> <path d="m11.697 22.91c2.234-0.25 4.469-1.333 6.124-3.082l-0.993-1c-1.407 1.5-3.228 2.416-5.131 2.666z" fill="#d81b60"/> <path d="m4 20.744a10.275 10.275 0 0 0 6.786 2.248v-1.415c-1.903 0.083-3.807-0.417-5.462-1.583z" fill="#f50057"/> <path d="m10.408 6.711a6.47 6.47 0 0 1 2.45 0.455 5.62 5.62 0 0 1 1.924 1.232 5.755 5.755 0 0 1 1.72 4.152c0 0.822-0.15 1.59-0.452 2.303a5.802 5.802 0 0 1-3.193 3.095c-0.781 0.3-1.612 0.449-2.449 0.44-0.894 0-1.715-0.146-2.463-0.44a5.836 5.836 0 0 1-1.91-1.246 5.75 5.75 0 0 1-1.254-1.849 5.86 5.86 0 0 1-0.452-2.303c0-0.821 0.15-1.584 0.452-2.289a5.71 5.71 0 0 1 1.254-1.863 5.65 5.65 0 0 1 1.91-1.232c0.748-0.303 1.57-0.455 2.463-0.455zm0 2.788c-0.418 0-0.816 0.078-1.195 0.234-0.37 0.147-0.695 0.357-0.977 0.631a3.08 3.08 0 0 0-0.67 0.968 2.965 2.965 0 0 0-0.248 1.218c0 0.44 0.082 0.846 0.248 1.218a3.08 3.08 0 0 0 1.647 1.613c0.379 0.147 0.777 0.22 1.195 0.22s0.812-0.073 1.181-0.22c0.38-0.156 0.71-0.371 0.992-0.645a2.98 2.98 0 0 0 0.685-0.968 2.97 2.97 0 0 0 0.248-1.218c0-0.44-0.083-0.846-0.248-1.218a2.97 2.97 0 0 0-0.685-0.968 2.917 2.917 0 0 0-0.992-0.63 2.994 2.994 0 0 0-1.18-0.235z" fill="#eceff1"/> </g>',
}

export const Turborepo = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
