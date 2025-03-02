import { defineConfig, ViteDevServer } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'
import compileTime from 'vite-plugin-compile-time'
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
				// Serve the Vite app for app.localhost
				next()
			} else if (host.startsWith('localhost')) {
				// Serve a landing page for localhost
				res.writeHead(200, { 'Content-Type': 'text/html' })
				res.end(`
            <html>
              <body>
                <h1>Welcome to the Landing Page!</h1>
                <a href="http://app.localhost:3000">Go to App</a>
              </body>
            </html>
          `)
			} else {
				next()
			}
		})
	}
})
export default defineConfig({
	plugins: [
		tailwindcss(),
		solidPlugin(),
		compileTime(),
		proxy(),
		fullReloadAlways
	],
	server: {
		port: 3000,
		headers: {
			'Cross-Origin-Opener-Policy': 'same-origin',
			'Cross-Origin-Embedder-Policy': 'require-corp'
		}
	},
	build: {
		target: 'esnext'
	}
})
