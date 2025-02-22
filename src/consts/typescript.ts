import ts from 'typescript'

export const compilerOptions: ts.CompilerOptions = {
	target: ts.ScriptTarget.Latest,
	esModuleInterop: true,
	strict: true,
	allowSyntheticDefaultImports: true,
	noEmit: true,
	isolatedModules: true,
	jsx: ts.JsxEmit.React,
	types: ['jsdom', 'node', 'react'],
	lib: ['es5', 'es6', 'dom', 'ES2015']
} as const
