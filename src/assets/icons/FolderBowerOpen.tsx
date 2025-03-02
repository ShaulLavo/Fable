import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m19 20h-15c-1.11 0-2-0.9-2-2v-12c0-1.11 0.89-2 2-2h6l2 2h7c1.097 0 2 0.903 2 2h-17v10l2.14-8h17.07l-2.28 8.5c-0.23 0.87-1.01 1.5-1.93 1.5z" fill="#ddc7a1"/><g transform="matrix(.033264 0 0 .033264 8.7499 8.6323)"><path id="outline" d="m447.61 200.08c-23.139-22.234-138.85-36.114-175.36-40.154 1.7683-4.1766 3.274-8.4961 4.517-12.944 4.9771-2.1797 10.35-4.2077 15.905-5.9011 0.67696 1.9969 3.8653 9.6478 5.6822 13.279 73.415 2.0251 77.184-54.557 80.17-70.058 2.9199-15.157 2.7711-29.802 27.953-56.575-37.516-10.933-91.467 16.945-109.54 58.437-6.7911-2.5445-13.597-4.4236-20.328-5.586-4.8244-19.459-29.944-73.672-95.863-73.672-83.461 0-174.43 68.853-174.43 185.41 0 97.976 66.891 183.84 104.68 183.84 16.505 0 30.703-12.36 34.036-23.439 2.7944 7.5964 11.368 31.212 14.184 37.224 4.162 8.8901 23.41 16.583 31.833 7.3572 10.83 6.0168 30.703 9.641 41.534-6.4049 20.859 4.412 39.299-8.0263 39.702-22.868 10.235-0.54664 15.256-14.918 13.021-26.363-1.6477-8.4261-19.248-38.661-26.113-49.098 13.59 11.054 48.013 14.183 52.194 7e-3 21.911 17.198 56.057 8.1713 58.765-5.8155 26.624 6.9175 57.16-8.2754 52.146-26.676 42.771-2.9578 37.296-48.464 25.296-59.996z" fill="#504945" stroke-width=".97265"/><g id="leaf" transform="matrix(.97265 0 0 .97265 6.324 6.9029)"><path d="m331.25 98.825c9.471-18.791 21.372-39.309 36.404-52.003-16.545 6.668-32.88 26.601-42.538 47.906-4.923-3.129-9.921-5.92-14.961-8.361 13.473-28.758 44.779-52.775 79.28-54.651-23.109 20.958-14.906 64.518-33.906 87.578-5.437-5.461-17.921-16-24.279-20.469zm-14.938 30.599c0.01-0.719 0.279-6.266 0.784-8.798-1.325-0.312-9.561-1.923-13.855-1.822-0.313 5.393 2.266 14.568 4.815 20.091 17.555-0.368 30.235-5.625 37.698-10.458-6.354-2.962-17.196-5.595-25.44-7.17-0.92 1.903-3.184 6.752-4.002 8.157z" fill="#7daea3"/></g><g stroke-width=".97265"><path id="wingtip" d="m250.54 277.39c4e-3 0.0243 0.0146 0.0573 0.0176 0.0817-2.1642-4.6571-4.4625-10.314-7.2074-17.708 10.688 15.557 44.184 7.5332 42.427-6.4069 16.395 12.336 50.143-2.0552 42.471-19.353 16.423 7.6528 35.168-7.7452 30.964-14.455 28 5.4002 54.832 10.783 63.256 12.938-5.5957 9.1235-18.339 15.566-37.549 11.089 10.38 14.14-9.7732 31.105-37.844 21.761 6.1793 13.882-18.814 26.379-47.22 11.91 0.36085 13.888-35.24 15.487-49.315 0.14201zm55.543-70.194c32.497 2.4949 86.238 7.3406 119.51 11.997-2.1019-10.828-7.8435-13.921-25.905-18.772-19.425 2.0718-68.706 6.9127-93.604 6.7755z" fill="#a9b665"/><path id="body" d="m285.78 253.36c16.395 12.336 50.143-2.0552 42.471-19.353 16.423 7.6528 35.168-7.7453 30.964-14.455-33.103-6.3826-67.84-12.788-75.719-13.908 4.7796 0.25387 12.702 0.7966 22.59 1.5562 24.899 0.13714 74.18-4.7038 93.604-6.7755-31.452-7.9748-95.666-19.613-140.01-22.48-2.0552 3.0036-5.833 8.0974-12.413 13.51-19.403 41.053-54.557 68.341-93.454 68.341-11.335 0-24.018-1.9122-38.233-6.4565-8.8648 9.497-46.661 16.694-77.329 1.6409 24.326 56.961 80.74 94.984 143.19 94.984 52.591 0 75.912-53.704 70.808-67.914-1.2382-3.45-6.1452-14.889-8.891-22.283 10.689 15.556 44.185 7.5322 42.429-6.4078z" fill="#d8a657"/><path id="beak" d="m253.91 145.27c4.6435-2.526 20.69-12.253 35.981-15.908-0.24121-1.6934-0.4231-3.4014-0.53593-5.1191-10.032 2.4025-28.945 10.509-39.784-0.66237 22.866 6.9 34.283-6.1482 51.09-6.1482 10.014 0 24.305 2.7974 35.569 7.22-9.0603-8.3697-38.771-33.63-75.557-33.717-8.2131 9.9571-17.091 31.526-6.7638 54.334z" fill="#ddc7a1"/><path id="head" d="m115.58 253.33c14.215 4.5442 26.898 6.4565 38.233 6.4565 38.896 0 74.05-27.289 93.454-68.341-14.351 11.979-39.291 22.229-78.241 22.229 34.694-7.8668 64.56-25.156 79.753-50.427-10.68-16.998-22.263-54.603 7.0702-84.331-4.5122-14.496-26.475-52.765-75.095-52.765-84.851 0-155.17 71.001-155.17 166.15 0 22.525 4.5472 43.65 12.669 62.664 30.667 15.054 68.463 7.8571 77.328-1.6399z" fill="#ea6962"/><path id="eye_rim" d="m141.03 108.45c0 21.644 17.546 39.191 39.19 39.191s39.192-17.548 39.192-39.191c0-21.644-17.548-39.191-39.192-39.191s-39.19 17.547-39.19 39.191z" fill="#d8a657"/><path id="eye" d="m156.76 108.45c0 12.958 10.507 23.463 23.463 23.463 12.96 0 23.464-10.506 23.464-23.463 0-12.959-10.504-23.464-23.464-23.464-12.957 0-23.463 10.506-23.463 23.464z" fill="#504945"/><ellipse id="pupil_highlight" cx="180.22" cy="98.044" rx="13.673" ry="8.501" fill="#ddc7a1"/></g></g>',
}

export const FolderBowerOpen = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
