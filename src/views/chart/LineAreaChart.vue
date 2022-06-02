<template>
  <div class="chart">
    <div>
      <h3>面积折叠图</h3>
      <LineAreaChart
        id="lineAreaChart"
        :data="lineAreaData"
        :titles="{
          subtext: '多条折线图title',
          left: '6%',
          top: '10',
          subtextStyle: { fontSize: 16 }
        }"
        type="line"
        height="600px"
      ></LineAreaChart>
    </div>
  </div>
</template>

<script setup>
import LineAreaChart from '@/components/ChartLineArea'
import { getChartsData } from '@/api/user'
import { onMounted, reactive } from 'vue'

let lineAreaData = reactive({})

onMounted(() => {
  lineArea()
})
const getData = async type => {
  const { data } = await getChartsData({ type })
  return data
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
