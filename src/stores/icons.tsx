import {
	FaSolidFile,
	FaSolidFileCircleCheck,
	FaSolidFileCircleMinus,
	FaSolidFileCirclePlus,
	FaSolidFolderClosed,
	FaSolidFolderMinus,
	FaSolidFolderOpen,
	FaSolidFolderPlus,
	FaSolidFileImage
} from 'solid-icons/fa'
import {
	OcChevrondown2,
	OcChevronleft2,
	OcChevronright2,
	OcChevronup2
} from 'solid-icons/oc'
import { SiTypescript, SiVite, SiSvg, SiReact } from 'solid-icons/si'
export const ICONS = {
	chevronDown: OcChevrondown2,
	chevronUp: OcChevronup2,
	chevronLeft: OcChevronleft2,
	chevronRight: OcChevronright2,
	file: FaSolidFile,
	activeFile: FaSolidFileCircleCheck,
	folder: FaSolidFolderClosed,
	folderOpen: FaSolidFolderOpen,
	addFile: FaSolidFileCirclePlus,
	removeFile: FaSolidFileCircleMinus,
	addFolder: FaSolidFolderPlus,
	removeFolder: FaSolidFolderMinus,
	typescript: SiTypescript,
	vite: SiVite,
	svg: SiSvg,
	image: FaSolidFileImage,
	react: SiReact
} as const
