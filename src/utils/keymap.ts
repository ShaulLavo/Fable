import { insertTab } from '@codemirror/commands'
import { Command, KeyBinding } from '@codemirror/view'
import { vscodeKeymap } from '@replit/codemirror-vscode-keymap'
import { formatCode, getConfigFromExt } from './format'
// import { code, setCode } from '~/stores/editorStore'
import { File, Folder } from '../types/FS.types'
import { getNode } from '../service/FS.service'
import { toggleSideBar } from '../stores/appStateStore'
const overrideMap = {
	Tab: { key: 'Tab', run: insertTab, preventDefault: true },
	'Mod-f': {
		key: 'Mod-f',
		run: (_ => console.info('search')) as Command,
		preventDefault: true
	}
} as Record<string, KeyBinding>

export function createKeymap(
	fileMap: Map<string, string>,
	filePath: () => string,
	currentExtension: () => string | undefined,
	code: () => string | undefined,
	setCode: (code: string) => void,
	saveFile: (file: File, content: string) => Promise<void>,
	fs: Folder,
	extraKeymap: KeyBinding[] = []
) {
	const additionalKeymap = [
		{
			key: 'Shift-Alt-f',
			run: () => {
				formatCode(getConfigFromExt(currentExtension()), code, setCode)
				return true
			},
			preventDefault: true
		},
		{
			key: 'Mod-s',
			run: () => {
				console.info('saving', filePath())
				if (!fileMap.has(filePath()!)) {
					console.error('no file')
					return false
				}
				const currentCode = code()
				if (currentCode == undefined) {
					console.error('no code')
					return false
				}
				const node = getNode(fs, filePath()!)
				if (!node) {
					console.error('no node')
					return false
				}
				saveFile(node as File, currentCode)
				return true
			},
			preventDefault: true
		},
		{
			key: 'Ctrl-b',
			run: () => {
				toggleSideBar()
				return true
			},
			preventDefault: true,
			stopPropagation: false
		},
		...extraKeymap
	] as KeyBinding[]

	return vscodeKeymap
		.map(binding => {
			if (binding.key && overrideMap[binding.key])
				return overrideMap[binding.key]
			return binding
		})
		.concat(additionalKeymap)
}
