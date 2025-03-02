import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 300 300' },
	c: '<g style="fill:#4fc3f7"><path d="M417.62 175.39c-42.392 9.424-84.327 22.545-123.64 42.334.9 34.716 3.144 67.98 7.693 101.77-15.268 9.782-31.315 18.178-45.576 29.629-14.49 11.147-29.29 21.812-42.41 34.85-26.212-17.337-53.955-33.63-82.535-48.012-30.807 33.155-59.613 68.94-83.145 108.98 17.704 28.639 36.185 55.484 56.141 80.959h.559v245.77c.45.004.898.02 1.344.063l150.67 14.527a16.224 16.224 0 0 1 14.627 15.023l4.646 66.51 131.43 9.378 9.055-61.387a16.222 16.222 0 0 1 16.051-13.857h158.96c8.046 0 14.873 5.899 16.047 13.857l9.055 61.387 131.43-9.378 4.642-66.51a16.23 16.23 0 0 1 14.627-15.023l150.61-14.527c.446-.042.89-.059 1.34-.063v-19.611l.063-.02V525.91h.558c19.96-25.474 38.43-52.32 56.141-80.958-23.523-40.044-52.345-75.83-83.152-108.98-28.572 14.382-56.325 30.674-82.537 48.012-13.116-13.037-27.89-23.702-42.4-34.85-14.257-11.451-30.323-19.847-45.562-29.63 4.537-33.787 6.78-67.05 7.684-101.77-39.32-19.788-81.25-32.91-123.66-42.333-16.934 28.46-32.42 59.279-45.906 89.408-15.993-2.673-32.06-3.662-48.148-3.854v-.025c-.113 0-.217.025-.313.025-.1 0-.204-.025-.304-.025v.025c-16.118.191-32.171 1.181-48.168 3.854-13.48-30.13-28.956-60.948-45.914-89.408zm-119.2 359.52c50.151 0 90.799 40.617 90.799 90.752 0 50.168-40.648 90.809-90.799 90.809-50.126 0-90.787-40.641-90.787-90.809 0-50.134 40.661-90.752 90.787-90.752zm427.18 0c50.122 0 90.779 40.617 90.779 90.752 0 50.168-40.657 90.809-90.779 90.809-50.159 0-90.807-40.641-90.807-90.809 0-50.134 40.647-90.752 90.807-90.752zM512 588.019c16.143 0 29.254 11.908 29.254 26.561v83.59c0 14.665-13.111 26.562-29.254 26.562s-29.227-11.898-29.227-26.562v-83.59c0-14.652 13.084-26.561 29.227-26.561z" style="fill:#4fc3f7" transform="translate(11.605 -15.682) scale(.2703)"/><path d="m784.07 817.24-4.666 66.864c-.562 8.059-6.973 14.473-15.031 15.052l-160.49 11.451c-.392.03-.783.042-1.17.042-7.976 0-14.856-5.853-16.034-13.861l-9.203-62.414h-130.95l-9.204 62.414c-1.236 8.4-8.746 14.44-17.204 13.82l-160.49-11.451c-8.059-.579-14.469-6.994-15.031-15.052l-4.666-66.864-135.48-13.062c.062 14.56.25 30.512.25 33.688 0 143.09 181.51 211.86 407.02 212.65h.553c225.51-.791 406.96-69.566 406.96-212.65 0-3.235.196-19.12.262-33.688z" style="fill:#4fc3f7" transform="translate(11.605 -15.682) scale(.2703)"/></g>',
}

export const Godot = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
