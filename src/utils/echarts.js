/*
 * @Description: 按需引入echarts
 * @Autor: houyueke
 * @Date: 2022-04-12 11:37:11
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-22 16:48:59
 */

// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import {
  RadarChart,
  PieChart,
  BarChart,
  LineChart,
  MapChart
} from 'echarts/charts'
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  LegendComponent
} from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  LegendComponent,
  RadarChart,
  PieChart,
  BarChart,
  MapChart,
  LineChart,
  CanvasRenderer
])

export default echarts
