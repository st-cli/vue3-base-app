/*
 * @Description: main.js
 * @Autor: houyueke
 * @Date: 2022-04-12 11:54:11
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-11 17:47:32
 */
import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupPinia } from './store'
import 'ant-design-vue/es/message/style/index'
import '../src/assets/style/global.css'
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'

const app = createApp(App)

//router
setupRouter(app)
//store
setupPinia(app)

//dsn根据项目更换sdk
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    app,
    dsn: 'http://7fa639425c2b4d50afb40a08f78de676@192.168.1.201:8088/5',
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ['localhost', 'my-site-url.com', /^\//]
      })
    ],
    tracesSampleRate: 1.0,
    release: 'v1.0.0'
  })
}

app.mount('#app')
