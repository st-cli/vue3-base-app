/*
 * @Description: vite.config
 * @Autor: houyueke
 * @Date: 2022-04-12 11:54:11
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-28 11:38:32
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import {
  createStyleImportPlugin,
  AndDesignVueResolve
} from 'vite-plugin-style-import'

const { modifyVars } = require('./src/config/index')

const path = require('path')

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importLess: true
        })
      ],
      dts: false
    }),
    viteCompression({
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: true
    }),
    createStyleImportPlugin({
      resolves: [AndDesignVueResolve()]
    })
  ],
  server: {
    open: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://192.168.1.58:8002',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    sourcemap: false,
    brotliSize: false,
    chunkSizeWarningLimit: 2000
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: modifyVars(),
        javascriptEnabled: true
      }
    }
  }
})
