/*
 * @Description: pinia实例
 * @Autor: houyueke
 * @Date: 2022-04-12 17:12:00
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-12 17:12:00
 */
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

export function setupPinia(app) {
  const store = createPinia()
  store.use(piniaPluginPersist)
  app.use(store)
}
