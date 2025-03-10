import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 500 500' },
	c: '<defs/><g id="Exponent" style="isolation:isolate"><path class="cls-2" d="M1024.5 534.05c1.23 13.58 2.08 27.28 2.08 41.19 0-13.91-.85-27.6-2.08-41.19z" transform="translate(-25.209 -24.25) scale(.47614)"/><path class="cls-2" d="M359 531.68S234.25 991.32 734.26 995.32c156.88-58.4 272.48-201.58 290-374.2 1.21-11.94 1.57-24.12 1.84-36.32.05-3.21.48-6.33.48-9.56 0-13.9-.85-27.61-2.08-41.19C892.4 1054.08 308 850.39 359 531.68z" style="fill:#90a4ae" transform="translate(-25.209 -24.25) scale(.47614)"/><path class="cls-2" d="M617.54 361.07S152 231.06 159.16 738.68a449.86 449.86 0 0 0 108.49 162.17c2 1.89 4.07 3.68 6.09 5.54a450.17 450.17 0 0 0 42.54 34.67c2.31 1.65 4.48 3.47 6.8 5.08a446.74 446.74 0 0 0 49.11 29.16c4.93 2.54 10 4.86 15 7.23a443.91 443.91 0 0 0 44.85 18.2c3.75 1.28 7.33 2.88 11.13 4.07A444.68 444.68 0 0 0 499 1018c5.71 1 11.48 1.84 17.26 2.64a450 450 0 0 0 59.11 4.59c.76 0 1.49.12 2.25.12 14.92 0 29.65-.8 44.18-2.23C99.46 898.55 298 314.47 617.54 361.07z" style="fill:#90a4ae" transform="translate(-25.209 -24.25) scale(.47614)"/><path class="cls-2" d="M799 601.8s110.14-464.34-385.64-443.6c-166.25 65.67-283.94 227.43-283.94 417a451.1 451.1 0 0 0 4.61 61C238.37 110.86 832.8 281 799 601.8z" style="fill:#90a4ae" transform="translate(-25.209 -24.25) scale(.47614)"/><path class="cls-2" d="M560.95 801.62s466.35 60.88 437.16-382.51C934.64 248.44 770.76 126.62 578 126.62a450.24 450.24 0 0 0-81.35 7.73c519.64 63.79 384.58 671.81 64.3 667.27z" style="fill:#90a4ae" transform="translate(-25.209 -24.25) scale(.47614)"/><path d="M707.46 575.25A125.65 125.65 0 1 1 581.85 449.6a125.64 125.64 0 0 1 125.61 125.65z" style="fill:#607d8b" transform="translate(-25.209 -24.25) scale(.47614)"/></g>',
}

export const Replit = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
