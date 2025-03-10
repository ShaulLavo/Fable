import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2Z" fill="#45403d" /> <path d="M19.81 13.59a1.2 1.2 0 1 1-2.4.001 1.2 1.2 0 0 1 2.4 0Z" fill="#FFECB3" /> <path d="M16.59 15.828a1.2 1.2 0 1 0 0 2.401 1.2 1.2 0 0 0 0-2.4Z" fill="#B2EBF2" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.097 17.438c-.482.312-1.02.53-1.582.644.163-.465.217-.962.158-1.451a3.22 3.22 0 1 0-3.678-4.917 5.347 5.347 0 0 0-1.757.513 4.583 4.583 0 1 1 6.86 5.211Zm-6.805-4.376 1.125.136c.025-.217.073-.43.142-.638a4.587 4.587 0 0 0-1.266.502Z" fill="#FFECB3" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.096 13.182a4.583 4.583 0 0 1 1.594-.65 3.213 3.213 0 0 0-.18 1.457 3.22 3.22 0 1 0 3.694 4.912 5.345 5.345 0 0 0 1.757-.508 4.583 4.583 0 1 1-6.865-5.211Zm6.805 4.376-.022.011.022-.01Z" fill="#B2EBF2" />',
}

export const FolderTauri = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
