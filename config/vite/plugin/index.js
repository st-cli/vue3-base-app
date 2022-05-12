import vue from '@vitejs/plugin-vue'
import { setupAutoRegisterComponentPlugin } from './component'
import { setupCompressPlugin } from './compress'
import { setupMockServer } from './mock'

export function createVitePlugin(command) {
  const vitePlugins = [
    //vue支持
    vue(),
    //自动按需引入组件
    setupAutoRegisterComponentPlugin(),
    //rollup-plugin-gzip压缩
    setupCompressPlugin(),
    setupMockServer(command)
  ]
  return vitePlugins
}
