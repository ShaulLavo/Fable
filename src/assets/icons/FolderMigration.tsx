import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> <style type="text/css"> .st0{fill:#45403d;} .st1{fill:#B3E5FC;} </style> <path class="st0" d="M10,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8c0-1.1-0.9-2-2-2h-8L10,4z"/> <path class="st1" d="M19.6,13.8h3.2v-1.2h-2.3l-1.3-2.2c-0.2-0.3-0.5-0.5-0.9-0.5c-0.1,0-0.2,0-0.3,0.1l-3.5,1.1v3.4h1.2v-2.4 l1.4-0.4l-2.5,9.9h1.2l1.9-5.3l1.5,2v3.2H20v-4.2l-1.6-2.9l0.5-1.9 M19.5,9.8c0.6,0,1.2-0.5,1.2-1.2s-0.5-1.2-1.2-1.2 S18.4,8,18.4,8.6S18.9,9.8,19.5,9.8z"/>',
}

export const FolderMigration = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
