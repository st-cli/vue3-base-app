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
