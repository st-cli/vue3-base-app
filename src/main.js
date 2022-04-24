/*
 * @Description: main.js
 * @Autor: houyueke
 * @Date: 2022-04-12 11:54:11
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-22 17:43:27
 */
import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router';
import { setupPinia } from './store'

const app = createApp(App)

//router
setupRouter(app)
//store
setupPinia(app)

app.mount('#app')
