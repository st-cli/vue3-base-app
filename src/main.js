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
import { dsn, release } from '../config/sentryConfig'

const app = createApp(App)

//router
setupRouter(app)
//store
setupPinia(app)

//dsn根据项目更换sdk
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    app,
    dsn,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ['localhost', 'my-site-url.com', /^\//]
      })
    ],
    tracesSampleRate: 1.0,
    logErrors: true,
    release
  })
}

app.mount('#app')
