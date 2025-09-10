import { insertTab } from '@codemirror/commands'
import { Command, EditorView, KeyBinding } from '@codemirror/view'
import { vscodeKeymap } from '@replit/codemirror-vscode-keymap'
import { formatCode, getConfigFromExt } from './format'
// import { code, setCode } from '~/stores/editorStore'
import { File, Folder } from '../types/FS.types'
import { getNode } from '../service/FS.service'
import { setIsSearchBar, toggleSideBar } from '../stores/appStateStore'
import hotkeys from 'hotkeys-js'
import { Accessor } from 'solid-js'
import { themedToast } from './notify'
import { isDirty, clearDirty, setBaseline } from '../stores/dirtyStore'

hotkeys('ctrl+b,command+b', toggleSideBar)
hotkeys('ctrl+p,command+p', e => {
	e.preventDefault()
	setIsSearchBar(p => !p)
})
// hotkeys('ctrl+p', toggleSideBar)

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
	extraKeymap: KeyBinding[] = [],
	view: Accessor<EditorView>,
	skipSync: (b: boolean) => void
) {
	const additionalKeymap = [
		{
			key: 'Shift-Alt-f',
			run: () => {
				formatCode({
					code,
					setCode: newCode => {
						skipSync(true)
						view().dispatch({
							changes: {
								from: 0,
								to: code()?.length,
								insert: newCode ?? ''
							}
						})
					},
					config: getConfigFromExt(currentExtension()),
					cursorOffset: view().state.selection.main.head,
					setCursor: offset => {
						view().dispatch({ selection: { anchor: offset, head: offset } })
					}
				})

				return true
			},
			preventDefault: true,
			scope: 'editor'
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
				const path = filePath()!
				const hadChanges = isDirty(path)
				Promise.resolve(saveFile(node as File, currentCode)).then(() => {
					if (hadChanges) {
							themedToast(`Saved ${node.name}`)
						clearDirty(path)
					}
					// Update baseline to the freshly saved content
					setBaseline(path, currentCode)
				})
				return true
			},
			preventDefault: true.valueOf,
			scope: 'editor'
		},
		{
			key: 'Mod-b',
			run: () => {
				toggleSideBar()
				return true
			},
			preventDefault: true,
			stopPropagation: false,
			scope: 'editor'
		},
		{
			key: 'Mod-p',
			run: () => {
				setIsSearchBar(p => !p)
				return true
			},
			preventDefault: true,
			stopPropagation: false,
			scope: 'editor'
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
