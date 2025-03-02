import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 16 16' },
	c: '<path d="M7.40026 11.49C7.26798 11.49 7.14111 11.4373 7.04757 11.3436C6.95403 11.2498 6.90148 11.1226 6.90148 10.99C6.90148 10.8574 6.95403 10.7302 7.04757 10.6365C7.14111 10.5427 7.26798 10.49 7.40026 10.49H9.80437C9.93321 10.4926 10.0561 10.545 10.1472 10.6364C10.2383 10.7277 10.2906 10.8508 10.2932 10.98V10.98C10.2906 11.1082 10.2379 11.2303 10.1465 11.32C10.0551 11.4098 9.9323 11.46 9.80437 11.46H7.40026V11.49ZM3.41004 10.95C3.41114 10.8729 3.43076 10.7972 3.46722 10.7293C3.50369 10.6614 3.55593 10.6034 3.61953 10.56L7.88906 7.50001L5.06598 5.41002C4.96474 5.32748 4.89752 5.21033 4.87727 5.0811C4.85701 4.95187 4.88514 4.8197 4.95625 4.71002C4.99823 4.64502 5.05589 4.59169 5.1239 4.55499C5.19191 4.51828 5.26806 4.49937 5.3453 4.50002C5.44851 4.5005 5.54924 4.53183 5.63459 4.59002L9.00632 7.09001C9.06851 7.13864 9.11881 7.20084 9.15341 7.27189C9.18801 7.34293 9.20599 7.42095 9.20599 7.50001C9.20599 7.57907 9.18801 7.65709 9.15341 7.72814C9.11881 7.79918 9.06851 7.86138 9.00632 7.91001L4.17816 11.41C4.09705 11.4692 3.99915 11.5007 3.89884 11.5C3.81993 11.5024 3.74174 11.4843 3.67184 11.4475C3.60194 11.4107 3.54269 11.3565 3.49982 11.29C3.44291 11.2044 3.41493 11.1027 3.42001 11V11L3.41004 10.95ZM13.1761 3.00002H4.19811C4.03548 3.01493 3.88132 3.07949 3.75645 3.185C3.63158 3.2905 3.54201 3.43187 3.49982 3.59002L1.03586 11.94C0.998747 12.0615 0.990299 12.1899 1.01118 12.3152C1.03206 12.4405 1.0817 12.5593 1.15618 12.6621C1.23067 12.7648 1.32795 12.8489 1.44037 12.9075C1.55279 12.9662 1.67726 12.9978 1.80397 13H10.782C10.9551 12.9974 11.1227 12.9384 11.2594 12.832C11.3962 12.7256 11.4947 12.5775 11.5401 12.41L13.9642 4.06002C14.0018 3.93694 14.0099 3.80671 13.988 3.67989C13.966 3.55306 13.9146 3.4332 13.8379 3.32999C13.7612 3.22678 13.6613 3.14313 13.5463 3.0858C13.4313 3.02848 13.3045 2.99909 13.1761 3.00002" fill="#0092C6"/>',
}

export const Powershell = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
