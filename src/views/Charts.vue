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
import { getChartsData } from '@/api/user'
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
const getData = async type => {
  const { data } = await getChartsData({ type })
  return data
}
const line = async () => {
  const { xAxis, series, legend } = await getData('line')
  lineData.value = {
    xAxis,
    series,
    legend
  }
}
const lineMore = async () => {
  const { xAxis, series, legend } = await getData('lineMore')
  lineMoreData.value = {
    xAxis,
    series,
    legend
  }
}
const lineArea = async () => {
  const { xAxis, series, legend } = await getData('lineMore')
  lineAreaData.value = {
    xAxis,
    series,
    legend,
    areaStyle: {}
  }
}
const bar = async () => {
  const { xAxis, series, legend } = await getData('bar')
  barData.value = {
    xAxis,
    series,
    legend
  }
}
const pie = async () => {
  const { series, legend } = await getData('pie')
  pieData.value = {
    series,
    legend
  }
}
const radar = async () => {
  const { series, legend, indicator } = await getData('radar')
  radarData.value = {
    series,
    legend,
    indicator
  }
  //雷达图其他配置项使用---设置图例样式
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
  height: calc(100vh - 130px);
  overflow-y: scroll;
  > div {
    height: 400px;
  }
}
</style>
