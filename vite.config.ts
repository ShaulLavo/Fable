import { defineConfig, ViteDevServer } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'
import compileTime from 'vite-plugin-compile-time'
import inject from '@rollup/plugin-inject'
import devServer from '@hono/vite-dev-server'
import bunAdapter from '@hono/vite-dev-server/bun'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const fullReloadAlways = {
	name: 'full-reload-always',
	handleHotUpdate({ server }: any) {
		server.ws.send({ type: 'full-reload' })
		return []
	}
}

const proxy = () => ({
	name: 'configure-server',
	configureServer(server: ViteDevServer) {
		server.middlewares.use((req, res, next) => {
			const host = req.headers.host || ''
			if (host.startsWith('app.localhost')) {
				next()
			} else if (host.startsWith('localhost')) {
				res.writeHead(200, { 'Content-Type': 'text/html' })
				res.end(`
            <html>
              <body>
                <h1>Welcome to the Landing Page!</h1>
                <a href="http://app.localhost:8000">Go to App</a>
              </body>
            </html>
          `)
			} else {
				next()
			}
		})
	}
})
const { default: stdLibBrowser } = await import('node-stdlib-browser')
const __dirname = path.dirname(fileURLToPath(import.meta.url))
// Point the 'fs' alias to our OPFS-backed shim
const ourFs = path.resolve(__dirname, 'src/node/FS.ts')

export default defineConfig({
	resolve: {
		alias: {
			...stdLibBrowser,
			fs: ourFs,
			'node:fs': ourFs,
			'fs/promises': ourFs,
			'node:fs/promises': ourFs
		}
	},
	optimizeDeps: {
		include: ['buffer', 'process'],
		esbuildOptions: {
			// Ensure esbuild also injects the node stdlib shims during pre-bundling
			// inject: ['node-stdlib-browser/helpers/esbuild/shim']
		}
	},
	plugins: [
		tailwindcss(),
		solidPlugin(),
		compileTime(),
		proxy(),
		// fullReloadAlways,
		{
			...inject({
				global: ['node-stdlib-browser/helpers/esbuild/shim', 'global'],
				process: ['node-stdlib-browser/helpers/esbuild/shim', 'process'],
				Buffer: ['node-stdlib-browser/helpers/esbuild/shim', 'Buffer']
			}),
			enforce: 'post'
		}
		// devServer({
		// 	entry: 'src/server/index.ts',
		// 	adapter: bunAdapter
		// })
	],
	server: {
		port: 8000,
		headers: {
			'Cross-Origin-Opener-Policy': 'same-origin',
			'Cross-Origin-Embedder-Policy': 'require-corp'
		}
		// host: '127.0.0.1'
	},
	build: {
		target: 'esnext',
		minify: false,
		rollupOptions: {
			output: {
				format: 'esm',
				entryFileNames: 'app.js'
			}
		}
	}
})
