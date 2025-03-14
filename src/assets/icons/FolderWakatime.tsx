import { CustomIcon, IconBaseProps } from 'solid-icons'

type Props = Exclude<IconBaseProps, 'src'>

const iconContent = {
	a: { fill: 'currentColor', viewBox: '0 0 24 24' },
	c: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4142" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><metadata><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><path d="m10 4h-6c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2v-10c0-1.11-.9-2-2-2h-8l-2-2z" fill="#45403d" fill-rule="nonzero"/><g transform="matrix(.037979 0 0 .037979 10.599 8.5655)" style="fill-rule:evenodd;fill:none"><g id="Logo" transform="translate(20,20)"><path id="Circle" d="m150 0c-82.844 0-150 67.156-150 150s67.156 150 150 150 150-67.156 150-150-67.156-150-150-150z" style="stroke-width:40;stroke:#7daea3"/><path id="Clock-Hands" transform="matrix(1,0,0,-1,0,293.33)" d="m170.18 99.793c-1.4432-1.9027-3.6074-3.126-6.0321-3.126-.23794 0-.47447.01578-.70816.03969-.40081.04766-.62034.08235-.83704.13002-.2691.06345-.4688.12205-.66567.18862-.37957.13252-.54811.19893-.71241.27347-.38523.18549-.5212.25691-.65575.33395-.36683.22331-.46314.28925-.55803.35582-.15863.11173-.31584.22831-.46738.35286-.29601.24659-.39941.34238-.5028.44068-.313.31066-.5127.5335-.70249.76666-.35974.45427-.6515.8973-.90361 1.3699l-8.8378 14.201-8.8336-14.201c-1.3866-2.5241-3.892-4.2516-6.7714-4.2516-2.8893 0-5.4075 1.741-6.7516 4.3205l-38.636 56.286c-1.2697 1.5314-2.0515 3.5614-2.0515 5.8023 0 4.7443 3.4877 8.5932 7.788 8.5932 2.7829 0 5.22-1.6174 6.5981-4.0427l32.613-48.192 9.1806 14.947c1.3228 2.6644 3.8906 4.474 6.8394 4.474 2.6981 0 5.0775-1.5174 6.474-3.8192l9.4681-15.541 51.167 73.256c1.3908 2.3565 3.7915 3.9161 6.5292 3.9161 4.3014 0 7.7869-3.8474 7.7869-8.5917 0-2.0737-.66284-3.9739-1.7704-5.4569z" style="fill-rule:nonzero;fill:#7daea3"/></g></g>',
}

export const FolderWakatime = (props: Props) => (
	<CustomIcon size={16} color='#2c4f7c' {...props} src={iconContent} />
)
