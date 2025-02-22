import { Accessor } from 'solid-js'
import { File } from '../types/FS.types'
import { extensionMap, getConfigFromExt } from '../utils/format'

export const useFileExtension = (currentFile: Accessor<File | null>) => {
	const filePath = () => currentFile()?.path ?? ''
	const currentExtension = () => filePath().split('.').pop()
	const isTs = () =>
		['typescript', 'javascript'].includes(
			extensionMap[currentExtension() as keyof typeof extensionMap]
		)

	const isPython = () =>
		extensionMap[currentExtension() as keyof typeof extensionMap] === 'python'
	const isJSON = () =>
		extensionMap[currentExtension() as keyof typeof extensionMap] === 'json'
	const isHtml = () =>
		['html', 'htm', 'svg', 'xml'].includes(currentExtension()!)
	const prettierConfig = () => getConfigFromExt(currentExtension())

	return { isTs, isPython, isJSON, isHtml, currentExtension, prettierConfig }
}
