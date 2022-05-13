import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export function setupAutoRegisterComponentPlugin() {
  return Components({
    resolvers: [
      AntDesignVueResolver({
        importStyle: 'less'
      })
    ],
    dts: false,
    directoryAsNamespace: true,
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [
      /[\\/]node_modules[\\/]/,
      /[\\/]\.git[\\/]/,
      /[\\/]\.husky[\\/]/,
      /[\\/]dist[\\/]/
    ]
  })
}
