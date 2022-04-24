/*
 * @Description: 路由配置
 * @Autor: houyueke
 * @Date: 2022-04-12 16:52:15
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-12 17:36:03
 */
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

export default routes 