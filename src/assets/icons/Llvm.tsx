import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 16 16' },
	c: '<path d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C9.34892 15 10.6087 14.6184 11.6774 13.9574C11.6084 13.9179 11.6053 13.8915 11.8199 13.8435C11.8385 13.8385 11.8572 13.834 11.876 13.8298C12.0736 13.6982 12.2641 13.5568 12.4468 13.4063C12.4113 13.3811 12.3697 13.3542 12.3196 13.3282C12.3029 13.319 12.2867 13.3106 12.2715 13.3028C12.1668 13.2486 12.1154 13.222 12.3669 13.1649C12.4697 13.1403 12.5751 13.1252 12.6815 13.1195C12.7574 12.9913 12.8307 12.8618 12.9015 12.7313C12.8749 12.7138 12.8475 12.6975 12.8192 12.6823C12.8023 12.6729 12.7857 12.6644 12.7703 12.6564C12.6657 12.6025 12.6141 12.5759 12.8686 12.519C12.9227 12.506 12.9776 12.4957 13.0331 12.4881C13.105 12.3484 13.1749 12.2033 13.2407 12.0581L13.1503 12.0182C13.1323 12.011 13.1149 12.0045 13.0986 11.9985C12.9879 11.9573 12.9329 11.9369 13.1749 11.8531C13.2335 11.8324 13.2932 11.8143 13.3538 11.7987C13.4011 11.6844 13.4484 11.5664 13.4895 11.4485L13.5019 11.4122C13.485 11.4082 13.4686 11.4047 13.4532 11.4014C13.3359 11.3763 13.2783 11.364 13.5019 11.2453L13.5574 11.2181C13.6007 11.054 13.6384 10.8888 13.6705 10.7227C13.5841 10.7191 13.5574 10.701 13.6972 10.583C14.0324 8.63075 13.5718 6.69299 12.5149 5.40115C11.7541 4.51936 10.6643 3.93332 9.24556 3.868C8.50534 3.83352 7.90904 3.92969 7.44229 4.11475L7.42584 4.12564L7.43612 4.11657C6.45737 4.51029 6.06258 5.31043 6.14894 6.16682C6.86962 6.48214 7.51469 6.91706 8.04886 7.44777C9.3237 8.71603 9.12219 9.25853 9.01527 9.40368L9.00704 9.42182V9.41456C8.98854 9.43815 8.97415 9.45085 8.97415 9.45085L8.98031 9.5071V9.52524C9.00277 9.77098 9.10325 10.0062 9.27024 10.2038C9.33934 10.279 9.41496 10.3494 9.49642 10.4143C9.5739 10.4748 9.64791 10.5278 9.71394 10.5751C9.80036 10.637 9.87309 10.6892 9.92205 10.7354C9.96934 10.7772 10.0002 10.8171 10.0002 10.8497C10.0002 10.9786 9.14686 11.668 8.82816 11.6463C8.76867 11.6405 8.71046 11.6271 8.65544 11.6063C8.58328 11.6267 8.50882 11.6401 8.43337 11.6463C8.46882 11.6171 8.50311 11.5868 8.53618 11.5555C8.48587 11.5307 8.43713 11.5034 8.39019 11.4739C8.25859 11.5392 8.01185 11.6408 7.76511 11.6317C7.92334 11.5509 8.06343 11.4451 8.1784 11.3197C7.95428 11.1382 7.7137 10.8878 7.48752 10.5703C7.19554 10.1621 7.00021 10.1185 7.00021 10.1185C7.00021 10.1185 6.56018 10.182 6.7329 10.9786C6.82384 11.403 6.98369 11.7115 7.09855 11.9332C7.19924 12.1276 7.26536 12.2552 7.22022 12.3357C7.12152 12.5081 6.6342 12.6151 6.2682 12.5498C5.9022 12.4863 5.46217 12.401 5.68219 11.9692C5.86313 11.6154 5.86313 10.9278 5.62667 10.5867C5.57435 10.5205 5.50886 10.4634 5.43339 10.4179C5.24833 10.329 4.37856 9.88268 4.22846 9.69398C4.03724 9.45992 4.05369 8.44568 4.24902 8.20981C4.14621 7.90681 4.07013 7.54394 4.02901 7.11211C4.0105 6.92705 3.99817 6.72565 4.00022 6.51337V6.50067C3.98789 5.31225 4.49371 4.347 5.32441 3.64846C5.35936 3.4144 5.41488 3.20938 5.46834 3.06604C5.61409 2.67147 5.61176 2.77479 5.60749 2.96455C5.60645 3.01039 5.60531 3.06127 5.60611 3.1114C5.60792 3.21434 5.6134 3.31721 5.62256 3.41985C5.69247 3.36904 5.76443 3.32187 5.83846 3.27651C5.90118 3.02033 6.00213 2.77263 6.13866 2.53987C6.29638 2.28884 6.29349 2.32686 6.28299 2.46476C6.27885 2.51922 6.27352 2.58927 6.27643 2.66325C6.27311 2.7767 6.31454 2.88764 6.39363 2.97714C6.45532 2.94811 6.51906 2.92089 6.58485 2.89367C6.63402 2.6711 6.72432 2.45717 6.85216 2.26046C6.98043 2.06904 6.98929 2.13874 7.01052 2.30566C7.01243 2.32069 7.01444 2.3365 7.01665 2.35299C7.04044 2.54189 7.14831 2.63637 7.1892 2.67218C7.19072 2.67352 7.19349 2.67595 7.19349 2.67595L7.39088 2.62152C7.42789 2.48907 7.64174 2.24231 7.84324 2.07902C7.91258 2.02166 7.94063 1.99557 7.94835 2.00061C7.95894 2.00753 7.93122 2.0731 7.91932 2.19695C7.91143 2.27354 7.95441 2.35867 7.98969 2.42857C8.00038 2.44975 8.01037 2.46953 8.01802 2.48725L8.11466 2.47274L8.02213 2.47637C8.02213 2.47637 8.08382 2.46367 8.18663 2.44915C8.26006 2.33197 8.35934 2.22895 8.4786 2.14615C8.67664 1.99659 8.67188 2.04647 8.66179 2.15236C8.66024 2.16851 8.65858 2.18596 8.65749 2.20421C8.65395 2.26957 8.65601 2.33507 8.66366 2.40016C8.75619 2.39472 8.85489 2.38928 8.96387 2.38746C9.00125 2.35327 9.04035 2.32057 9.08107 2.28948C9.30931 2.11712 9.30314 2.16974 9.25996 2.34755C9.25584 2.36025 9.25584 2.37295 9.25584 2.38746L9.51287 2.39109C10.9904 2.43398 12.6609 3.06238 13.9352 4.28703C12.6975 2.31273 10.5021 1 8 1Z" fill="#CF3954"/>',
}

export const Llvm = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
