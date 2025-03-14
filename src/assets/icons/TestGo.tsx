import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<!-- Generator: Adobe Illustrator 27.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> <style type="text/css"> .st0{fill:#00ADDA;} </style> <path class="st0" d="M5,19c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1c0-0.2-0.1-0.4-0.2-0.6L13,8.4V4h-2v4.4L5.2,18.4 C5.1,18.6,5,18.8,5,19 M6,22c-1.7,0-3-1.3-3-3c0-0.6,0.2-1.2,0.5-1.6L9,7.8V6C8.4,6,8,5.6,8,5V4c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2 v1c0,0.6-0.4,1-1,1v1.8l5.5,9.6c0.3,0.5,0.5,1,0.5,1.6c0,1.7-1.3,3-3,3H6 M13,16l1.3-1.3l1.9,3.3H7.7l2.7-4.6L13,16 M12.5,12 c0.3,0,0.5,0.2,0.5,0.5S12.8,13,12.5,13S12,12.8,12,12.5S12.2,12,12.5,12z"/>',
}

export const TestGo = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
