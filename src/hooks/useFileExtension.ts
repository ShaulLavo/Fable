import { SYSTEM_PATHS } from '../consts/app'
import { useFS } from '../context/FsContext'
import { extensionMap, getConfigFromExt } from '../utils/format'

export const useFileExtension = () => {
	const { currentFile } = useFS()
	const filePath = () => currentFile()?.path ?? ''
	const currentExtension = () => filePath().split('.').pop()

	const isSystemPath = () => SYSTEM_PATHS.includes(filePath())

	const isTs = () =>
		['typescript', 'javascript'].includes(
			extensionMap[currentExtension() as keyof typeof extensionMap]
		)

	const isPython = () =>
		extensionMap[currentExtension() as keyof typeof extensionMap] === 'python'
	const isCSS = () => ['css', 'scss', 'sass'].includes(currentExtension()!)
	const isJSON = () =>
		extensionMap[currentExtension() as keyof typeof extensionMap] === 'json'
	const isHtml = () =>
		['html', 'htm', 'svg', 'xml'].includes(currentExtension()!)
	const isBinary = () =>
		['png', 'jpg', 'jpeg', 'gif', 'webp', 'ico', 'bmp', 'tiff', 'tif'].includes(
			currentExtension()!
		)
	const isImage = () =>
		['png', 'jpg', 'jpeg', 'gif', 'webp', 'ico', 'bmp', 'tiff', 'tif'].includes(
			currentExtension()!
		)
	const prettierConfig = () => getConfigFromExt(currentExtension())

	return {
		isTs,
		isPython,
		isJSON,
		isHtml,
		currentExtension,
		prettierConfig,
		isSystemPath,
		isBinary,
		isImage,
		isCSS
	}
}
