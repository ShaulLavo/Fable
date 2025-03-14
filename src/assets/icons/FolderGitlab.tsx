import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m10 4h-6c-1.11 0-2 0.89-2 2v12c0 1.097 0.903 2 2 2h16c1.097 0 2-0.903 2-2v-10c0-1.11-0.9-2-2-2h-8l-2-2z" fill="#45403d"/><g transform="matrix(.027417 0 0 .027417 7.6895 5.6181)" fill="none" fill-rule="evenodd"><g id="logo-extra-whitespace"><g id="logo-no-bg" transform="translate(98,118)"><g id="gitlab_logo"><g transform="matrix(1 0 0 -1 0 457.33)"><g id="g18-Clipped"><g id="Group" transform="translate(.66666 .66666)"><g transform="translate(.532 .77493)" fill="#e78a4e"><path d="m492 194.67-27.559 84.815-54.617 168.1c-2.8093 8.648-15.045 8.648-17.856 0l-54.619-168.1h-181.37l-54.62 168.1c-2.8093 8.648-15.045 8.648-17.856 0l-54.617-168.1-27.557-84.815c-2.5147-7.736 0.24-16.211 6.82-20.992l238.51-173.29 238.51 173.29c6.58 4.7813 9.3333 13.256 6.82 20.992"/></g><g transform="translate(156.2 1.1603)" fill="#ea6962"><path d="m91 0l90.684 279.1h-181.37z"/></g><g transform="translate(28.531 1.1608)" fill="#e78a4e"><path d="m218.67 0-90.684 279.09h-127.09z"/></g><g transform="translate(.088533 .25587)" fill="#d8a657"><path d="m29.333 280l-27.559-84.815c-2.5133-7.736 0.24-16.211 6.8213-20.991l238.51-173.29z"/></g><g transform="translate(29.422 280.26)" fill="#ea6962"><path d="m0 0h127.09l-54.619 168.1c-2.8107 8.6493-15.047 8.6493-17.856 0z"/></g><g transform="translate(247.2 1.1608)" fill="#e78a4e"><path d="m0 0 90.684 279.09h127.09z"/></g><g transform="translate(246.31 .25587)" fill="#d8a657"><path d="m218.67 280l27.559-84.815c2.5133-7.736-0.24-16.211-6.8213-20.991l-238.51-173.29z"/></g><g transform="translate(336.97 280.26)" fill="#ea6962"><path d="m128 0h-127.09l54.619 168.1c2.8107 8.6493 15.047 8.6493 17.856 0z"/></g></g></g></g></g></g></g></g>',
}

export const FolderGitlab = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
