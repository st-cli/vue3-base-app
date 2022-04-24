/*
 * @Description: 路由实例
 * @Autor: houyueke
 * @Date: 2022-04-12 16:52:04
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-12 16:59:30
 */
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes"

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export function setupRouter(app) {
    app.use(router)
}

export default router