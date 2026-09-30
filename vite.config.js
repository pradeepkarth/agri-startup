import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Launch-log plugin (dev only).
 * Writes logs/launch-log.json every time the dev server boots, becomes ready,
 * restarts, or shuts down — handy for verifying how the project was launched.
 */
function launchLog() {
  const viteVersion = (() => {
    try {
      return JSON.parse(readFileSync(resolve(process.cwd(), 'node_modules/vite/package.json'), 'utf8')).version
    } catch {
      return 'unknown'
    }
  })()

  const logPath = () => resolve(process.cwd(), 'logs/launch-log.json')
  let startedAt = Date.now()
  let events = []

  const write = (status, extra = {}) => {
    try {
      mkdirSync(resolve(process.cwd(), 'logs'), { recursive: true })
      writeFileSync(
        logPath(),
        JSON.stringify(
          {
            project: 'bosqen-site',
            status,
            launchedAt: new Date(startedAt).toISOString(),
            ...extra,
            mode: 'development',
            command: 'vite (npm run dev)',
            versions: { node: process.version, vite: viteVersion },
            events,
          },
          null,
          2,
        ),
      )
    } catch {
      /* never break the dev server because of logging */
    }
  }

  const event = (type, detail) => {
    events.push({ at: new Date().toISOString(), type, ...(detail ? { detail } : {}) })
  }

  return {
    name: 'launch-log',
    apply: 'serve',
    configureServer(server) {
      startedAt = Date.now()
      events = []
      event('boot', { pid: process.pid })

      server.httpServer?.once('listening', () => {
        const urls = server.resolvedUrls?.local ?? []
        const port = Number(urls[0]?.match(/:(\d+)/)?.[1] ?? 5173)
        event('ready', { urls })
        write('running', { readyAt: new Date().toISOString(), readyInMs: Date.now() - startedAt, server: { port, urls } })
      })

      const stop = () => {
        event('stop')
        write('stopped', { endedAt: new Date().toISOString() })
      }
      process.once('SIGINT', stop)
      process.once('SIGTERM', stop)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), launchLog()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy-policy.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
