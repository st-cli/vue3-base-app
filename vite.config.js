/*
 * @Description: vite.config
 * @Autor: houyueke
 * @Date: 2022-04-12 11:54:11
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-28 11:07:16
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

const path = require('path')

const {
  themeColor,
  linkColor,
  successColor,
  warningColor,
  errorColor,
  fontSizeBase,
  headingColor,
  textColor,
  textColorSecondary,
  disabledColor,
  borderRadiusBase,
  borderColorBase,
  boxShadowBase
} = require('./src/config/index')

function modifyVars() {
  return {
    'primary-color': themeColor, // 全局主色
    'link-color': linkColor, // 链接色
    'success-color': successColor, // 成功色
    'warning-color': warningColor, // 警告色
    'error-color': errorColor, // 错误色
    'font-size-base': fontSizeBase, // 主字号
    'heading-color': headingColor, // 标题色
    'text-color': textColor, // 主文本色
    'text-color-secondary': textColorSecondary, // 次文本色
    'disabled-color': disabledColor, // 失效色
    'border-radius-base': borderRadiusBase, // 组件/浮层圆角
    'border-color-base': borderColorBase, // 边框色
    'box-shadow-base': boxShadowBase // 浮层阴影
  }
}

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
