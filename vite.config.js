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

const sentryConfig = {
  url: 'http://192.168.1.201:8088',
  authToken: '314f135c282c49cf83c70fbad87ea01cc3329cf4391344c1a29c87c0cd1a6966',
  org: 'sentry',
  project: 'sgk-rw',
  release: 'v1.0.0', // main.js release version 保持同步
  deploy: {
    env: 'production'
  },
  setCommits: {
    auto: true
  },
  // skipEnvironmentCheck: true, // 可以跳过环境检查
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
      port: 3000,
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
