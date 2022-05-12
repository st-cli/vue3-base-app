/*
 * @Description: main.js
 * @Autor: houyueke
 * @Date: 2022-04-12 11:54:11
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-11 17:47:32
 */
import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupPinia } from './store'
import 'ant-design-vue/es/message/style/index'

const app = createApp(App)

//router
setupRouter(app)
//store
setupPinia(app)

app.mount('#app')
