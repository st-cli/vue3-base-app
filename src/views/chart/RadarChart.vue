<template>
  <div class="chart">
    <div>
      <h3>雷达图</h3>
      <ChartRadar
        id="radar"
        :data="radarData"
        height="600px"
        :areaColor="areaColor"
      ></ChartRadar>
    </div>
  </div>
</template>

<script setup>
import ChartRadar from '@/components/ChartRadar'
import { getChartsData } from '@/api/user'
import { onMounted, reactive } from 'vue'

//雷达图的雷达区域的颜色设置，组件默认有三种颜色
const areaColor = reactive({
  color: ['#1890ff', '#2fc25b'],
  bgColor: ['#b9ddff78', '#c0eccd82']
})
let radarData = reactive({})

onMounted(() => {
  radar()
})
const getData = async type => {
  const { data } = await getChartsData({ type })
  return data
}
const radar = async () => {
  const { series, legend, indicator } = await getData('radar')
  radarData.value = {
    series,
    legend,
    indicator
  }
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
