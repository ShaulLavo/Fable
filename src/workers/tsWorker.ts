import {
	createDefaultMapFromCDN,
	createVirtualTypeScriptEnvironment,
	VirtualTypeScriptEnvironment
} from '@typescript/vfs'
import lzstring from 'lz-string'
import ts from 'typescript'
import { createWorkerStorage } from './workerStorage'

import { createWorker } from '@valtown/codemirror-ts/worker'
import * as Comlink from 'comlink'
import { compilerOptions } from '../consts/typescript'
import { OPFS } from '../service/OPFS.service'
import type { Folder } from '../types/FS.types'
import { createOPFSSystem } from './opfsSystem'

let storage: Awaited<ReturnType<typeof createWorkerStorage>>
let virtualTypeScriptEnvironment: VirtualTypeScriptEnvironment = null!
let opfsSys: (ts.System & { opfsRelease?: (p: string) => void }) | null = null

async function preloadProjectFilesFromOPFS(env: VirtualTypeScriptEnvironment) {
	// Build a tree from OPFS and load all file contents into the TS env
	const root: Folder = { name: 'root', path: '/', children: [], isOpen: true }
	try {
		const tree = await OPFS.tree(root)
		const { files } = await OPFS.mapFiles(tree)
		for (const [path, { code }] of Object.entries(files)) {
			// Ensure paths are absolute for the VFS
			const filePath = path.startsWith('/') ? path : `/${path}`
			if (!env.getSourceFile(filePath)) {
				env.createFile(filePath, code)
			} else {
				env.updateFile(filePath, code)
			}
		}
	} catch (e) {
		console.warn('OPFS preload skipped or failed:', e)
	}
}

const worker = createWorker(async () => {
	storage = await createWorkerStorage()
	const fsMap = await createDefaultMapFromCDN(
		compilerOptions,
		ts.version,
		true,
		ts,
		lzstring,
		undefined,
		storage
	)

	// Create an OPFS-backed System with the TypeScript lib files overlaid
	const sys = await createOPFSSystem(fsMap)
	opfsSys = sys as any
	virtualTypeScriptEnvironment = createVirtualTypeScriptEnvironment(
		sys,
		[],
		ts,
		compilerOptions
	)

	// Preload the TS env with all OPFS files so cross-file analysis works
	await preloadProjectFilesFromOPFS(virtualTypeScriptEnvironment)

	return virtualTypeScriptEnvironment
})
Comlink.expose({
	...worker,
	...virtualTypeScriptEnvironment,
	async reloadFromOPFS() {
		if (!virtualTypeScriptEnvironment) return
		await preloadProjectFilesFromOPFS(virtualTypeScriptEnvironment)
	},
	async releaseOPFS(path: string) {
		try {
			opfsSys?.opfsRelease?.(path)
		} catch {}
	}
})
self.postMessage('ready')
