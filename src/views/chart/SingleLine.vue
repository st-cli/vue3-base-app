<template>
  <div class="chart">
    <div>
      <h3>单条折线图</h3>
      <SingleLineChart
        id="lineChart"
        :data="lineData"
        :titles="{
          subtext: '单条折线图title',
          left: '6%',
          top: '10',
          subtextStyle: { fontSize: 16 }
        }"
        type="line"
        height="600px"
      ></SingleLineChart>
    </div>
  </div>
</template>

<script setup>
import SingleLineChart from '@/components/ChartSingleLine'
import { getChartsData } from '@/api/user'
import { onMounted, reactive } from 'vue'

let lineData = reactive({})

onMounted(() => {
  line()
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
