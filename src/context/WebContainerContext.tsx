import {
	createContext,
	createSignal,
	onCleanup,
	onMount,
	useContext,
	type JSX
} from 'solid-js'
import { WebContainer } from '@webcontainer/api'
import { useTerminal } from './TerminalContext'
import { useOPFS } from '../hooks/useOPFS'
import { useFS } from './FsContext'
import {
	getWebContainer,
	ensureMounted,
	ensureServer,
	getServerUrl,
	getCode,
	setCodeValue,
	ensureShell,
	attachTerminalWrite,
	writeToShell as storeWriteToShell
} from './../stores/webcontainerStore'

type WebContainerContextValue = {
	webcontainer: () => WebContainer | null
	serverUrl: () => string
	code: () => string
	setCode: (v: string) => void
	writeToShell: (data: string) => void
}

const WebContainerContext = createContext<WebContainerContextValue>()

// Files are provided by the store on initial mount

export function WebContainerProvider(props: { children: JSX.Element }) {
	const { term } = useTerminal()
	const serverUrl = getServerUrl()
	const code = getCode()
	const [instance, setInstance] = createSignal<WebContainer | null>(null)
	let writeTimeout: number | undefined

	// Capture contexts at setup time to preserve Solid owner
	const OPFS = useOPFS()
	const FS = useFS()

	async function writeFileToFs(source: string) {
		const wc = instance()
		if (!wc) return
		try {
			await wc.fs.writeFile('index.js', source)
		} catch (e) {
			// Surface errors in terminal for visibility
			term.writeln(`\r\n[fs] write error: ${(e as Error)?.message ?? e}`)
		}
	}

	function updateCode(v: string) {
		setCodeValue(v)
		// debounce writes for smoother typing
		if (writeTimeout) clearTimeout(writeTimeout)
		writeTimeout = setTimeout(() => {
			writeFileToFs(v)
		}, 150) as unknown as number
	}

	async function startDevServer(webcontainer: WebContainer) {
		await ensureServer(webcontainer)
	}

	async function startShell(webcontainer: WebContainer) {
		// Ensure a single long-lived shell and route its output to this terminal
		attachTerminalWrite(s => term.write(s))
		await ensureShell(webcontainer)
	}

    function toMountTree(opfsFiles: Record<string, { code: string | Uint8Array }>) {
        const out: Record<string, { file: { contents: string | Uint8Array } }> = {}
        for (const [path, { code }] of Object.entries(opfsFiles)) {
            const rel = path.replace(/^\/+/, '')
            out[rel] = { file: { contents: code } }
        }
        return out
    }

	async function init() {
		const webcontainer: WebContainer = await getWebContainer()
		setInstance(webcontainer)

		// Build mount tree strictly from OPFS
		let files: Record<string, { file: { contents: string } }> = {}
		let hasPackageJson = false
        try {
            const latestTree = await OPFS.tree(FS.fs)
            const sandpackSetup = await OPFS.mapFiles(latestTree)
            files = toMountTree(sandpackSetup.files)
            hasPackageJson = Object.keys(files).some(p => p.endsWith('package.json'))
            try {
                const keys = Object.keys(files)
                term.writeln(`\r\n[opfs] mapped ${keys.length} files. package.json: ${hasPackageJson ? 'yes' : 'no'}`)
            } catch {}
        } catch (e) {
            // Surface the failure in the terminal; still mount empty tree
            term.writeln(`\r\n[opfs] map error: ${(e as Error)?.message ?? e}`)
        }

		await ensureMounted(webcontainer, files)

		// Always start a shell for the current terminal instance
		await startShell(webcontainer)

		// Only try to start a dev server if there is a package.json
		if (hasPackageJson) {
			await startDevServer(webcontainer)
		} else {
			term.writeln(
				'\r\n[server] No package.json found in OPFS; skipping start.'
			)
		}
	}

	onMount(init)

	// Do not kill the shell on cleanup to preserve session across tabs
	onCleanup(() => {})

	function writeToShell(data: string) {
		storeWriteToShell(data)
	}

	return (
		<WebContainerContext.Provider
			value={{
				webcontainer: instance,
				serverUrl,
				code,
				setCode: updateCode,
				writeToShell
			}}
		>
			{props.children}
		</WebContainerContext.Provider>
	)
}

export function useWebContainer() {
	const ctx = useContext(WebContainerContext)
	if (!ctx)
		throw new Error('useWebContainer must be used within WebContainerProvider')
	return ctx
}
