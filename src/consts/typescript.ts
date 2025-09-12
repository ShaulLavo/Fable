import ts from 'typescript'

export const compilerOptions: ts.CompilerOptions = {
	target: ts.ScriptTarget.ESNext,
	module: ts.ModuleKind.ESNext,
	// Treat every file as a module to avoid cross-file global collisions
	moduleDetection: ts.ModuleDetectionKind.Force,
	strict: true,
	esModuleInterop: true,
	allowSyntheticDefaultImports: true,
	// Enable JavaScript files in the TS language service
	allowJs: true,
	// Provide minimal help for JS without type-checking errors
	checkJs: false,
	noEmit: true,
	isolatedModules: true,
	// Browser-oriented types; Solid's JSX types come via jsxImportSource
	types: ['vite/client'],
	lib: [
		'ESNext',
		'DOM',
		'DOM.Iterable',
		'WebWorker',
		'WebWorker.ImportScripts'
	],
	allowImportingTsExtensions: true,
	// Ensure JSX is parsed and typed using Solid's JSX
	jsx: ts.JsxEmit.Preserve,
	jsxImportSource: 'solid-js'
} as const
