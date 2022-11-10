/*
 * @Description: vite.config
 * @Autor: houyueke
 * @Date: 2022-04-12 11:54:11
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-11 18:22:58
 */
import { resolve } from 'path'
import { generateModifyVars } from './config/themeConfig'
import { createVitePlugin } from './config/vite/plugin'
import { setupProxy } from './config/vite/proxy'
import { configManualChunk } from './config/vite/optimizer'
import viteSentry from 'vite-plugin-sentry'
import { url, authToken, org, project, release } from './config/sentryConfig'

const sentryConfig = {
  url,
  authToken,
  org,
  project,
  release,
  deploy: {
    env: 'production'
  },
  setCommits: {
    auto: true
  },
  sourceMaps: {
    include: ['./dist/assets'],
    ignore: ['node_modules'],
    urlPrefix: '~/assets'
  }
}

export default ({ mode, command }) => {
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    plugins: [
      ...createVitePlugin(command),
      process.env.NODE_ENV === 'production' ? viteSentry(sentryConfig) : null
    ],
    server: {
      open: true,
      host: '0.0.0.0',
      cors: true,
      proxy: setupProxy(mode)
    },
    build: {
      sourcemap: process.env.NODE_ENV === 'production',
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: configManualChunk
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true
        }
      }
    }
  }
}
