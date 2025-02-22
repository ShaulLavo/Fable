import { defineConfig } from 'vite'
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
export default defineConfig({
	plugins: [tailwindcss(), solidPlugin(), compileTime(), fullReloadAlways],
	server: {
		port: 3000
	},
	build: {
		target: 'esnext'
	}
})
