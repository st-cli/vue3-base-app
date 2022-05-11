/*
 * @Description: vite.config
 * @Autor: houyueke
 * @Date: 2022-04-12 11:54:11
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-11 16:48:17
 */
import { resolve } from 'path'
import { generateModifyVars } from './config/themeConfig'
import { createVitePlugin } from './config/vite/plugin'
import { setupProxy } from './config/vite/proxy'
import { configManualChunk } from './config/vite/optimizer'

export default ({ mode }) => {
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    plugins: createVitePlugin(),
    server: {
      open: true,
      host: '0.0.0.0',
      cors: true,
      port: 3000,
      proxy: setupProxy(mode)
    },
    build: {
      sourcemap: false,
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
