/*
 * @Description: 路由配置
 * @Autor: houyueke
 * @Date: 2022-04-12 16:52:15
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-13 11:44:17
 */
import BaseLayout from '@/layouts/BaseLayout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/china',
    component: BaseLayout,
    children: [
      {
        path: '/china',
        name: 'China',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/China.vue')
      },
      {
        path: '/world',
        name: 'World',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/World.vue')
      }
    ]
  }
]

export default routes
