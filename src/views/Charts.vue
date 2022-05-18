<!--
 * @Description: Charts组件使用
 * @Autor: liyunpeng
 * @Date: 2022-04-12 17:31:21
 * @LastEditors: liyunpeng
 * @LastEditTime: 
-->
<template>
  <div class="chart">
    <div>
      <h3>单条折线图</h3>
      <Charts
        id="lineChart"
        :data="lineData"
        :titles="{ subtext: '单条折线图titlle', left: '20%', top: '20' }"
        type="line"
        height="300px"
      ></Charts>
    </div>
    <div>
      <h3>多条折线图</h3>
      <Charts
        id="lineMoreChart"
        :data="lineMoreData"
        :titles="{ subtext: '多条折线图title', left: '20', top: '20' }"
        type="line"
        height="300px"
      ></Charts>
    </div>
    <div>
      <h3>面积堆叠图</h3>
      <Charts id="lineAreaChart" :data="lineAreaData" height="300px"></Charts>
    </div>
    <div>
      <h3>柱状图</h3>
      <Charts id="barChart" :data="barData" type="bar" height="300px"></Charts>
    </div>
    <div>
      <h3>饼图</h3>
      <Charts id="pieChart" :data="pieData" type="pie"></Charts>
    </div>
    <div>
      <h3>雷达图</h3>
      <Charts
        id="radarChart"
        type="radar"
        :others="radarOthers"
        :data="radarData"
      ></Charts>
    </div>
  </div>
</template>

<script setup>
import Charts from '@/components/Charts'
import { onMounted, reactive } from 'vue'

let lineData = reactive({})
let lineMoreData = reactive({})
let lineAreaData = reactive({})
let barData = reactive({})
let pieData = reactive({})
let radarData = reactive({})
let radarOthers = reactive({})

onMounted(() => {
  line()
  lineMore()
  lineArea()
  bar()
  pie()
  radar()
})
const line = () => {
  const xAxis = ['4-3-8', '4-4', '4-5', '4-6', '4-7', '4-8', '4-9']
  const series = [[8, 15, 31, 13, 15, 22, 11]]
  const legend = ['用户量1']
  lineData.value = {
    xAxis,
    series,
    legend
  }
}
const lineMore = () => {
  const xAxis = ['4-3-8', '4-4', '4-5', '4-6', '4-7', '4-8', '4-9']
  const series = [
    [8, 15, 31, 13, 15, 22, 11],
    [1, 2, 3, 4, 5, 6, 7],
    [2, 3, 4, 5, 6, 7, 8]
  ]
  const legend = ['用户量1', '用户量2', '用户量3']
  lineMoreData.value = {
    xAxis,
    series,
    legend
  }
}
const lineArea = () => {
  const xAxis = ['4-3-8', '4-4', '4-5', '4-6', '4-7', '4-8', '4-9']
  const series = [
    [8, 15, 31, 13, 15, 22, 11],
    [1, 2, 3, 4, 5, 6, 7],
    [2, 3, 4, 5, 6, 7, 8]
  ]
  const legend = ['用户量1', '用户量2', '用户量3']
  lineAreaData.value = {
    xAxis,
    series,
    legend,
    areaStyle: {}
  }
}
const bar = () => {
  const xAxis = ['4-3-8', '4-4', '4-5', '4-6', '4-7', '4-8', '4-9']
  const series = [
    [8, 15, 31, 13, 15, 22, 11],
    [1, 2, 3, 4, 5, 6, 7],
    [2, 3, 4, 5, 6, 7, 8]
  ]
  const legend = ['用户量1', '用户量2', '用户量3']
  barData.value = {
    xAxis,
    series,
    legend
  }
}
const pie = () => {
  const series = [
    { value: 1048, name: '用户量1' },
    { value: 735, name: '用户量2' },
    { value: 580, name: '用户量3' }
  ]
  const legend = ['用户量1', '用户量2', '用户量3']
  pieData.value = {
    series,
    legend
  }
}
const radar = () => {
  const series = [
    {
      // 雷达图的数据是多变量（维度）的
      name: '女', // 数据项名称
      value: [11035, 6013, 5067, 1520, 184] // 其中的value项数组是具体的数据，每个值跟 radar.indicator 一一对应。
    },
    {
      name: '男',
      value: [13408, 5065, 5947, 856, 302]
    }
  ]
  const legend = ['男', '女']
  const indicator = [
    {
      name: '高中', // 指示器名称
      max: 15000 // 指示器的最大值，可选，建议设置
      //   color: 'red'// 标签特定的颜色。
    },
    {
      name: '专科',
      max: 10000
    },
    {
      name: '本科',
      max: 8000
    },
    {
      name: '硕士',
      max: 2000
    },
    {
      name: '博士',
      max: 500
    }
  ]
  radarData.value = {
    series,
    legend,
    indicator
  }
  radarOthers.value = {
    legend: {
      icon: 'rect',
      top: '40%',
      left: '15%',
      itemWidth: 10, // 图例标记的图形宽度。[ default: 25 ]
      itemHeight: 10 // 图例标记的图形高度。[ default: 14
    }
  }
  console.log('*****others', radarOthers)
}
</script>

<style lang="less" scoped>
.chart {
  height: calc(100vh - 124px);
  overflow-y: scroll;
  margin-bottom: 50px;
  > div {
    height: 400px;
  }
}
</style>
