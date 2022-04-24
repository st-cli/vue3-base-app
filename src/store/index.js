/*
 * @Description: pinia实例
 * @Autor: houyueke
 * @Date: 2022-04-12 17:12:00
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-12 17:12:00
 */
import { createPinia } from "pinia";

export function setupPinia(app) {
    app.use(createPinia())
}