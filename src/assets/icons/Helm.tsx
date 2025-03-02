import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 300 300' },
	c: '<defs/><g style="fill:#000"><path d="M59.595 125.11c-.903-.626-1.97-2.702-2.579-5.012-.541-2.055-.746-7.473-.384-10.13.135-.989.212-1.831.17-1.872-.04-.042-.88-.173-1.866-.291-5.677-.685-11.736-2.614-16.349-5.207-.978-.55-1.895-1-2.036-1-.142 0-.64.737-1.108 1.637-2.173 4.184-5.969 8.339-8.854 9.691-1.053.494-2.457.614-3.106.266-.979-.524-1.269-2.602-.684-4.902.4-1.575 2.009-4.889 3.313-6.825.576-.855 1.714-2.305 2.53-3.223l1.48-1.668-.772-.738c-2.034-1.944-5.856-6.441-5.856-6.892 0-.161 5.214-3.783 5.594-3.886.193-.052.66.41 1.293 1.28 1.37 1.883 5.034 5.506 7.19 7.108 16.435 12.218 39.6 9.15 52.072-6.898.662-.852 1.307-1.55 1.433-1.55.25 0 5.411 3.5 5.59 3.79.162.261-2.094 3.184-4.02 5.212-.915.963-1.663 1.829-1.661 1.924 0 .096.72.93 1.596 1.855 2.784 2.935 5.524 7.518 6.285 10.511.584 2.3.294 4.378-.684 4.902-.212.114-.772.205-1.246.204-3-.007-7.975-4.824-10.927-10.58-.57-1.11-1.119-2.018-1.222-2.018s-.682.318-1.287.705c-4.29 2.749-10.694 5.12-16.234 6.01-1.178.19-2.239.42-2.357.511-.153.119-.134.674.068 1.92.36 2.225.221 7.507-.253 9.643-.49 2.205-1.242 3.914-2.17 4.928-1.066 1.166-1.895 1.333-2.96.595zM.625 80.152c-.053-.14-.074-7.454-.045-16.254l.051-16h8.386l.053 5.89c.04 4.407.116 5.93.3 6.047.136.086 2.235.158 4.665.16 3.441.002 4.467-.056 4.639-.264.147-.178.239-2.19.274-6.05L19 47.898h8.386v32.4h-8.386l-.053-6.183c-.035-4.155-.125-6.27-.274-6.45-.172-.208-1.203-.267-4.665-.267s-4.492.059-4.665.267c-.148.18-.238 2.295-.274 6.45l-.053 6.183-4.148.054c-3.21.042-4.17-.003-4.244-.2zm33.943-.002c-.053-.139-.073-7.452-.044-16.252l.051-16h20.766l.055 3.547.054 3.547-6.144.053-6.145.053-.056 2.384c-.042 1.773.009 2.426.2 2.547.14.09 2.527.164 5.302.166l5.046.003-.054 3.55-.055 3.55-5.191.1-5.191.1v5.6l6.389.1 6.39.1v7l-10.639.051c-8.404.041-10.658 0-10.734-.2zm27.954 0c-.053-.139-.073-7.452-.044-16.252l.051-16h8.386l.1 12.6.1 12.6 6.09.1 6.09.1v7l-10.338.052c-8.165.04-10.36-.002-10.434-.2zm26.555-.002c-.052-.138-.072-7.45-.044-16.25l.052-16 4.393-.05c2.416-.026 4.492.019 4.613.1.296.201 4.73 12.28 5.709 15.55 1.017 3.402.938 3.2 1.169 2.97.108-.108.58-1.45 1.049-2.984 1.034-3.377 5.122-15.086 5.392-15.44.148-.194 1.224-.24 4.608-.2l4.415.054v32.4l-3.739.055-3.739.054-.132-.53c-.276-1.099.094-12.673.51-15.98.655-5.201.556-5.282-.988-.8-1.67 4.849-4.989 13.763-5.306 14.25-.272.42-.436.45-2.36.45-1.417 0-2.129-.078-2.263-.25-.247-.316-4.323-11.41-5.437-14.797-.786-2.39-1.213-3.25-1.199-2.414.003.2.187 1.847.408 3.662.413 3.4.779 14.796.509 15.874l-.132.525h-3.696c-2.774 0-3.72-.062-3.792-.25zm2.641-36.94c-.786-1.334-2.765-3.824-4.44-5.586-5.392-5.675-11.885-9.262-19.857-10.97-2.283-.489-2.889-.535-7.089-.544-4.945-.011-6.034.112-9.864 1.115-5.184 1.358-9.911 3.767-14.097 7.185-2.012 1.643-5.217 5.023-6.586 6.946-.843 1.184-1.268 1.622-1.49 1.538-.727-.276-5.6-3.553-5.598-3.763.007-.474 3.29-4.59 5.517-6.919l2.303-2.408-1.523-1.652c-2.784-3.02-5.453-7.518-6.197-10.444-.584-2.3-.294-4.378.685-4.903.211-.113.772-.205 1.246-.204 3 .007 7.974 4.825 10.927 10.581.569 1.11 1.105 2.017 1.19 2.017.087 0 .867-.405 1.735-.9 4.46-2.545 11.619-4.814 16.493-5.225.841-.071 1.635-.194 1.764-.274.177-.11.15-.646-.107-2.187-.474-2.84-.326-8.402.284-10.713.967-3.662 2.52-5.713 4.1-5.416 1.475.277 2.905 2.683 3.65 6.14.485 2.255.497 8.598.02 10.676-.176.77-.262 1.462-.19 1.538.072.076 1.03.28 2.127.452 6.364 1 11.19 2.777 17.104 6.294.403.24.781.355.842.257s.606-1.171 1.212-2.384c2.34-4.682 6.107-8.937 9.195-10.385 1.054-.494 2.457-.614 3.106-.266.98.525 1.27 2.602.685 4.902-.427 1.68-2.069 4.996-3.54 7.15-.687 1.006-2.082 2.671-3.1 3.7l-1.85 1.87 1.82 1.936c1.841 1.957 5.092 6.107 5.687 7.26.27.521.279.667.056.872-.457.421-5.367 3.304-5.627 3.304-.135 0-.402-.265-.593-.59z" style="fill:#00acc1;stroke-width:.19983" transform="translate(16.994 11.498) scale(2.1985)"/></g>',
}

export const Helm = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
