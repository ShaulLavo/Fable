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

	// Debug: confirm lib files are available (kept minimal)
	try {
		const libKeys = Array.from(fsMap.keys()).filter(k => k.includes('lib.'))
		console.info('[TS Worker] lib files count:', libKeys.length)
		console.info('[TS Worker] sample libs:', libKeys.slice(0, 5))
	} catch {}

	// Create an OPFS-backed System with the TypeScript lib files overlaid
	const sys = await createOPFSSystem(fsMap)
	opfsSys = sys
	virtualTypeScriptEnvironment = createVirtualTypeScriptEnvironment(
		sys,
		[],
		ts,
		compilerOptions
	)

	return virtualTypeScriptEnvironment
})
Comlink.expose({
	...worker,
	...virtualTypeScriptEnvironment,
	async reloadFromOPFS() {
		if (!virtualTypeScriptEnvironment) return
	},
	async releaseOPFS(path: string) {
		try {
			opfsSys?.opfsRelease?.(path)
		} catch {}
	}
})
self.postMessage('ready')
