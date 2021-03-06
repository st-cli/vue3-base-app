/*
 * @Description: 路由配置
 * @Autor: houyueke
 * @Date: 2022-04-12 16:52:15
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-13 15:02:01
 */
import BaseLayout from '@/layouts/index.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/index.vue')
  },
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
      },
      {
        path: '/cloud',
        name: 'Cloud',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Cloud.vue')
      },
      {
        path: '/pinia',
        name: 'Pinia',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Pinia.vue')
      },
      {
        path: '/card',
        name: 'Card',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Card.vue')
      },
      {
        path: '/single_line',
        name: 'Singleline',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/chart/SingleLine.vue'
          )
      },
      {
        path: '/more_line',
        name: 'Moreline',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/chart/MoreLineChart.vue'
          )
      },
      {
        path: '/area_line',
        name: 'AreaLine',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/chart/LineAreaChart.vue'
          )
      },
      {
        path: '/bar',
        name: 'Bar',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/chart/BarChart.vue'
          )
      },
      {
        path: '/pie',
        name: 'Pie',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/chart/PieChart.vue'
          )
      },
      {
        path: '/radar',
        name: 'Radar',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/chart/RadarChart.vue'
          )
      },

      // {
      //   path: '/topNav',
      //   name: 'TopNav',
      //   component: () =>
      //     import(/* webpackChunkName: "about" */ '../views/TopNav.vue')
      // }
    ]
  }
]

export default routes
