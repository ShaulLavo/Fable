import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 500 500' },
	c: '<g id="XMLID_1_" fill="#f44336"><g id="XMLID_7_" fill="#f44336" style="fill:#d7252c" color="#000"><path d="M350.4 270.7H149.6c-9.5 0-17.2-7.8-17.2-17.2s7.8-17.2 17.2-17.2h200.7c9.5 0 17.2 7.8 17.2 17.2s-7.6 17.2-17.1 17.2" style="-inkscape-stroke:none"/><path d="M149.6 235.8c-9.677 0-17.699 8.023-17.699 17.699 0 9.673 7.925 17.699 17.699 17.699h200.8c9.774 0 17.6-8.03 17.6-17.699 0-9.673-7.926-17.699-17.699-17.699zm0 1h200.7c9.226 0 16.699 7.572 16.699 16.699 0 9.13-7.373 16.699-16.6 16.699h-200.8c-9.226 0-16.699-7.572-16.699-16.699 0-9.123 7.576-16.699 16.699-16.699z" style="-inkscape-stroke:none"/></g></g><g fill="#b0bec5"><path d="M122.57 179.353c0-.512.656-4.184 1.458-8.161 5.358-26.58 20.208-52.425 40.36-70.24 9.692-8.57 18.02-14.213 29.153-19.758 55.379-27.585 123.52-11.521 160.52 37.843 10.412 13.892 17.718 28.615 21.865 44.064 1.512 5.633 3.235 14.209 3.235 16.1 0 1.057-2.882 1.082-128.29 1.082-118.02 0-128.29-.075-128.29-.93zM121.55 321.433c-5.372-1.446-9.246-4.14-12.845-8.928-3.348-4.455-4.47-8.928-4.47-17.821v-7.471l-2.893-2.775c-1.648-1.58-3.559-4.194-4.439-6.071l-1.545-3.297v-40.092l1.604-3.266c.924-1.882 2.806-4.346 4.439-5.815l2.835-2.548v-7.52c0-6.085.226-8.19 1.184-11.033 2.929-8.695 10.032-14.657 19.01-15.956 4.72-.683 246.41-.683 251.14 0 8.978 1.299 16.08 7.26 19.01 15.956.958 2.844 1.183 4.948 1.183 11.033v7.52l2.835 2.548c1.634 1.469 3.515 3.933 4.439 5.815l1.604 3.266v20.332c0 23.503.035 23.321-5.657 28.88l-3.115 3.04-.196 8.812c-.19 8.5-.26 8.942-1.986 12.534-2.264 4.707-4.978 7.805-8.884 10.142-6.456 3.861 3.15 3.608-135.06 3.566-106.19-.032-125.62-.161-128.18-.85zm236.25-52.237c6.08-3.249 9.355-8.185 9.758-14.706.454-7.34-3.253-13.693-9.894-16.961l-2.855-1.405-103.64-.15c-115.32-.168-107.04-.447-112.38 3.776-4.031 3.188-6.059 7.243-6.378 12.757-.224 3.87-.07 4.803 1.28 7.754 1.684 3.683 3.594 5.95 6.556 7.784 4.55 2.815-.696 2.694 110.61 2.564l104.52-.12zM176.69 431.653c-7.681-.95-17.793-4.803-24.266-9.245-3.732-2.561-10.061-8.714-13.039-12.675-5.409-7.194-9.318-17.067-10.458-26.408-.37-3.028-.63-15.611-.63-30.498l-.003-25.344h29.782l.012 24.485c.006 13.466.27 26.289.588 28.494 1.22 8.478 6.321 15.477 14.021 19.24l3.993 1.951 11.455.168c10.237.15 11.66.056 13.382-.885 1.2-.656 5.304-5.355 10.882-12.461 4.926-6.274 9.831-11.997 10.901-12.717l1.947-1.31h25.745c22.692 0 25.98.112 27.728.941 1.402.666 4.68 4.37 11.208 12.667 5.073 6.45 10.02 12.211 10.99 12.803 2.577 1.572 20.914 1.598 25.913.037 7.895-2.465 13.868-8.437 16.332-16.332.947-3.036 1.044-5.82 1.044-30.212v-26.868h30.463l-.246 28.494-.245 28.494-1.529 5.723c-6.036 22.596-24.302 38.692-47.057 41.469-6.246.762-142.75.754-148.91-.01z"/><path d="M197.89 358.983c-2.828-2.48-5.224-4.757-5.326-5.061s2.545-3.672 5.88-7.485l6.064-6.932 90.161.044 12.28 14.203-4.422 3.877c-2.431 2.132-4.96 4.345-5.618 4.918-1.182 1.027-1.242.987-4.805-3.269l-3.608-4.31-77.446-.035-8.018 8.559z"/></g>',
}

export const Rubocop = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
