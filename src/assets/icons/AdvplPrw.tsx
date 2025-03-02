import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 16 16' },
	c: '<g style="fill:#7986cb"><path d="M164.17 2.632C33.87 25.698-38.4 169.182 20.13 288.602c73.17 149.28 289.78 148.05 360.87-2.033 69.814-147.38-56.187-312.37-216.83-283.93m16.938 67.233c74.291 14.891 150.93 38.093 153.63 46.514 7.473 23.27 7.369 139.61-.138 153.78-1.887 3.561-34.853-.358-60.009-7.133l-10.098-2.72-.041-12.561c-.122-37.687-3.961-73.359-8.369-77.767-5.06-5.06-37.814-15.67-88.007-28.507l-31.922-8.165-.421-7.693c-.946-17.257 3.374-56.135 6.694-60.254 1.827-2.266 9.093-1.419 38.678 4.511m-95.506 54.626c14.438 1.892 31.249 5.139 43.036 8.313l5.154 1.388.878 28.344c1.643 53.087 3.349 61.312 13.663 65.912 12.931 5.766 60.087 19.567 104.44 30.566l9.772 2.423-.284 18.793c-.321 21.172-2.371 40.126-5.039 46.577l-1.791 4.332-7.518-.875c-28.147-3.275-120.41-25.82-160.57-39.238-17.625-5.889-21.892-8.168-23.404-12.504-6.638-19.043-6.609-141.26.037-153.68 1.54-2.878 2.295-2.89 21.632-.356" style="fill-rule:evenodd;fill:#7986cb" transform="matrix(.03467 0 0 .03473 1.06 1.067)"/></g>',
}

export const AdvplPrw = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
