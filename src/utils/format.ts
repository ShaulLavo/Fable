import { BuiltInParserName, Options } from 'prettier'
import babel from 'prettier/plugins/babel.js'
import prettierPluginEstree from 'prettier/plugins/estree'
import prettierPluginTypescript from 'prettier/plugins/typescript'
import prettierPluginMarkdown from 'prettier/plugins/markdown'
import {
	format as prettier,
	formatWithCursor as prettierWithCursor
} from 'prettier/standalone'
import { Accessor, createSignal, Resource, Setter } from 'solid-js'
import init, { format as ruff } from '@wasm-fmt/ruff_fmt/vite'

try {
	await init()
} catch (e) {
	console.error('formatter init error ? retry', e)
	try {
		await init()
	} catch (e) {
		console.error('formatter init error again :(', e)
	}
}

export const defaultConfig = {
	typescript: {
		parser: 'typescript',
		plugins: [prettierPluginTypescript, prettierPluginEstree],
		semi: false,
		trailingComma: 'es5',
		singleQuote: true,
		printWidth: 100,
		tabWidth: 4,
		useTabs: true,
		jsxSingleQuote: true,
		bracketSpacing: true,
		jsxBracketSameLine: false,
		arrowParens: 'always'
	},
	json: {
		parser: 'json',
		plugins: [babel, prettierPluginEstree]
	},
	javascript: {
		parser: 'typescript',
		allowJs: true,
		plugins: [prettierPluginTypescript, prettierPluginEstree]
	},
	python: {},
	markdown: {
		parser: 'markdown',
		plugins: [prettierPluginMarkdown]
	}
} satisfies Partial<
	Record<BuiltInParserName | 'python' | 'javascript', Options>
>

export const extensionMap = {
	ts: 'typescript',
	tsx: 'typescript',
	dts: 'typescript', // TypeScript declaration file
	js: 'javascript',
	mjs: 'javascript', // ES6 module in JavaScript
	cjs: 'javascript', // CommonJS module in JavaScript
	jsx: 'javascript',
	json: 'json',
	jsonc: 'json', // JSON with comments
	json5: 'json', // JSON5 format
	geojson: 'json', // GeoJSON format
	topojson: 'json', // TopoJSON format,
	py: 'python',
	pyc: 'python',
	pyd: 'python',
	pyo: 'python',
	pyw: 'python',
	pyz: 'python',
	pyx: 'python'
} as const

export const getConfigFromExt = (extension?: string) => {
	const parser = extensionMap[extension as keyof typeof extensionMap]

	return defaultConfig[parser]
}

export const formatters = {
	async prettier(
		code: string,
		config: Options,
		curserOffset?: number
	): Promise<{ formatted: string; cursorOffset?: number }> {
		if (!code || !config) {
			return { formatted: code }
		}
		try {
			if (Number.isInteger(curserOffset)) {
				return await prettierWithCursor(code, {
					...config,
					cursorOffset: curserOffset!
				})
			} else {
				const formatted = await prettier(code, config)
				return { formatted }
			}
		} catch {
			return { formatted: code }
		}
	},

	python(code: string) {
		if (!code) {
			return { formatted: code }
		}
		try {
			return { formatted: ruff(code) }
		} catch {
			return { formatted: code }
		}
	}
}

export const [formatterName, setFormatter] =
	createSignal<keyof typeof formatters>('prettier')
export const formatter = () => formatters[formatterName()]

export const formatCode = async ({
	config,
	code,
	setCode,
	cursorOffset,
	setCursor
}: {
	config: Options
	code: Accessor<string | undefined> | Resource<string | undefined>
	setCode?: (code: string) => void
	cursorOffset?: number
	setCursor?: (offset: number) => void
}) => {
	const formatted = await formatter()(code()!, config, cursorOffset)
	setCode?.(formatted.formatted)
	if ('cursorOffset' in formatted) {
		setCursor?.(formatted.cursorOffset!)
	}
	return formatted.formatted
}
