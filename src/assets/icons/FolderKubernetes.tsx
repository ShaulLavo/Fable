import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><style type="text/css"> .st0{fill:#7daea3;} .st1{fill:#ddc7a1;} .st2{fill:#68948a;} </style><g transform="matrix(.8608 0 0 .8608 -202.35 -28.956)" stroke-width=".17406"><path class="st0" d="m261.61 46.83c-.087-.2785-.29592-.50479-.55701-.64404l-5.309-2.5413c-.13925-.06963-.2959-.08703-.43516-.08703-.13924 0-.29591 0-.43515.03481l-5.309 2.5587c-.2611.12184-.45257.34813-.52219.64404l-1.3229 5.7267c-.0522.29591.0174.59182.19148.83551l3.6727 4.5431c.20888.20888.50479.34813.8007.36553h5.866c.31331.03481.60922-.10444.80069-.36553l3.6728-4.5431c.17406-.24369.24368-.5396.20887-.83551z" fill="#7daea3"/><path class="st1" d="m260.77 52.295c-.0174 0-.0174 0-.0174-.01741 0-.0174-.0522-.0174-.0696-.0174-.0696-.01741-.13925-.01741-.20887-.01741-.0348 0-.0696 0-.10444-.0174h-.0174c-.19147-.0174-.40034-.05222-.59182-.10444-.0522-.0174-.10443-.06963-.12184-.12184 0-.0174-.0174-.0174-.0174-.0174l-.13925-.03481c.0696-.50479.0348-1.027-.0696-1.5318-.12184-.50479-.33072-.99217-.60923-1.4273l.10444-.10444v-.01741c0-.05222.0174-.12184.0522-.15666.15666-.12184.31332-.24369.48738-.33072.0348-.0174.0696-.03481.10444-.05222.0696-.03481.12184-.06963.19147-.10444.0174-.01741.0348-.01741.0522-.03481l.0174-.01741c.15666-.12184.19147-.33072.0696-.48738-.0522-.06963-.15666-.12185-.24369-.12185-.087 0-.17407.03481-.24369.08703l-.0174.01741c-.0174.0174-.0348.03481-.0522.03481-.0522.05222-.10444.10444-.13925.15666-.0174.03481-.0522.05222-.0696.06962-.13925.13925-.2785.2785-.43516.38294-.0348.0174-.0696.03481-.10444.03481-.0174 0-.0522 0-.0696-.01741l-.13925.10444c-.13925-.13925-.29591-.2785-.43516-.41775-.64404-.50479-1.4447-.8181-2.2628-.90513l-.0174-.13925-.0174-.01741c-.0522-.03481-.0696-.08703-.087-.13925 0-.19147 0-.38294.0348-.59182v-.0174c0-.03481.0174-.06963.0174-.10444.0174-.06963.0174-.13925.0348-.20888v-.10444c.0174-.17406-.12185-.34813-.29591-.34813-.10443 0-.20887.03481-.2785.10444-.0696.06963-.10444.15666-.10444.24369v.08703c0 .06962.0174.13925.0348.20888.0174.03481.0174.06963.0174.10444v.01741c.0348.19147.0348.38294.0348.59182-.0174.05222-.0348.10444-.087.13925l-.0174.0174-.0174.13925c-.19147.0174-.38294.05222-.59182.08703-.8181.17406-1.5666.60922-2.141 1.2184l-.10446-.06962h-.0174c-.0174 0-.0348.01741-.0696.01741s-.087-.01741-.10444-.03481c-.15665-.12184-.29591-.2611-.43516-.40035-.0174-.03481-.0522-.05222-.0696-.06963-.0522-.05222-.087-.10444-.13925-.15666-.0174-.0174-.0348-.0174-.0522-.03481l-.0174-.0174c-.0696-.05222-.15667-.08703-.2437-.08703-.10444 0-.19147.03481-.26109.12184-.10444.15666-.0696.36553.0696.48738.0174 0 .0174.0174.0174.0174s.0348.03481.0522.03481c.0522.03481.12184.06962.19147.10444.0348.0174.0696.03481.10444.05222.17406.10444.33072.20888.48737.33072.0348.03481.0696.10444.0522.15666v.0174l.10444.10444c-.0174.03481-.0348.05222-.0522.08703-.5396.85291-.74847 1.8625-.59181 2.8547l-.13926.03481c0 .0174-.0174.0174-.0174.0174-.0174.05222-.0696.08703-.12185.12184-.19147.05222-.38294.08703-.59181.10444h-.0174c-.0348 0-.0696 0-.10444.01741-.0696 0-.13925.0174-.20888.0174-.0174 0-.0348.0174-.0696.0174-.0174 0-.0174 0-.0348.01741-.19147.03481-.31331.20888-.2785.40035.0348.15666.19147.2611.34813.24369.0348 0 .0522 0 .087-.01741.0174 0 .0174 0 .0174-.0174 0-.01741.0348-.01741.0696-.01741.0696-.0174.13925-.05222.19147-.06963.0348-.01741.0696-.03481.10444-.03481h.0174c.17406-.06963.36554-.12184.55701-.15666h.0174c.0522 0 .10444.0174.13925.05222.0174 0 .0174.0174.0174.0174l.15666-.0174c.2611.8007.74847 1.5144 1.4273 2.0366.15666.12184.29591.22628.46998.31332l-.0696.13925c0 .0174.0174.0174.0174.0174.0348.05222.0348.12184.0174.17406-.0696.17406-.17407.34813-.27851.50479v.0174c-.0174.03481-.0348.05222-.0696.08703s-.0696.10444-.12184.17406c-.0174.01741-.0174.03481-.0348.05222 0 0 0 .0174-.0174.0174-.087.17406-.0174.38294.13925.46997.0348.0174.087.03481.13925.03481.13925 0 .26109-.08703.33072-.20888 0 0 0-.0174.0174-.0174 0-.0174.0174-.03481.0348-.05222.0174-.06963.0522-.12184.0696-.19147l.0348-.10444c.0522-.19147.13925-.36554.22628-.5396.0348-.05222.087-.08703.13925-.10444.0174 0 .0174 0 .0174-.0174l.0696-.13925c.48738.19147.99216.2785 1.5144.2785.31331 0 .62663-.03481.93994-.10444.19147-.03481.38294-.10444.55701-.15666l.0696.12184c.0174 0 .0174 0 .0174.0174.0522.0174.10444.05222.13925.10444.087.17406.15665.34813.22628.52219v.0174l.0348.10444c.0174.06963.0348.13925.0696.19147.0174.0174.0174.03481.0348.05222 0 0 0 .0174.0174.0174.0696.12184.19147.20888.33072.20888.0522 0 .087-.0174.13925-.03481.0696-.03481.13925-.10444.15666-.19147.0174-.08703.0174-.19147-.0174-.2785 0-.0174-.0174-.0174-.0174-.0174 0-.01741-.0174-.03481-.0348-.05222-.0348-.06963-.0696-.12184-.12184-.17406-.0174-.03481-.0348-.05222-.0696-.08703v-.01739c-.12184-.15666-.20887-.33072-.2785-.50478-.0174-.05222-.0174-.12184.0174-.17406 0-.0174.0174-.0174.0174-.0174l-.0522-.13925c.90514-.5396 1.5666-1.3751 1.8973-2.3673l.13925.0174c.0174 0 .0174-.0174.0174-.0174.0348-.03481.087-.05222.13926-.05222h.0174c.19147.03481.38294.08703.557.15666h.0174c.0348.01741.0696.03481.10444.03481.0696.03481.12185.05222.19147.06963.0174 0 .0348.0174.0696.0174.0174 0 .0174 0 .0348.01741.0348.0174.0522.0174.087.0174.15666 0 .29591-.10444.34813-.24369-.0522-.17406-.17406-.31332-.34813-.34813zm-5.013-.5396-.46997.22628-.46997-.22628-.13926-.50478.33072-.41775h.53961l.33072.41775zm2.8372-1.1314c.087.36553.10444.73107.0696 1.0966l-1.6536-.46997c-.15667-.03481-.2437-.19147-.20888-.34813.0174-.05222.0348-.08703.0696-.12184l1.3055-1.1836c.19148.31332.33072.66144.41776 1.027zm-.93995-1.671-1.4099 1.0096c-.12184.06963-.29591.05222-.38294-.06963-.0348-.03481-.0522-.06963-.0522-.12184l-.10444-1.758c.73107.08703 1.4273.41776 1.9495.93995zm-3.1506-.88773.34813-.06963-.10444 1.7406c0 .15666-.13925.2785-.29591.2785-.0522 0-.087-.01741-.13925-.03481l-1.4099-1.027c.43516-.43516.99217-.74848 1.6014-.88773zm-2.1236 1.5318 1.2881 1.1488c.12185.10444.13926.2785.0348.40035-.0348.05222-.0696.06963-.13925.08703l-1.671.48738c-.0696-.73107.10444-1.4795.48737-2.1236zm-.29591 2.9417 1.7232-.29591c.13925 0 .2785.08703.2959.22628.0174.05222.0174.12184-.0174.17406l-.66144 1.6014c-.60922-.40035-1.0966-1.0096-1.3403-1.7058zm3.9512 2.1584c-.24368.05222-.50478.08703-.76588.08703-.36553 0-.74847-.06963-1.0966-.17406l.85291-1.5492c.087-.10444.22629-.13925.34813-.06963.0522.03481.087.06963.13925.12184l.83551 1.5144c-.087.0174-.19147.03481-.31332.06963zm2.1236-1.5144c-.2611.41776-.62663.78329-1.0444 1.0444l-.67885-1.6188c-.0348-.13925.0174-.2785.15666-.34813.0522-.01741.10444-.03481.15666-.03481l1.7406.29591c-.087.24369-.19147.46997-.33072.66144z" fill="#ddc7a1"/></g>',
}

export const FolderKubernetes = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
