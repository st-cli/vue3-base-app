<template>
  <div class="chart">
    <div>
      <h3>柱状图</h3>
      <ChartBar id="bar" :data="barData" height="600px" ></ChartBar>
    </div>
  </div>
</template>

<script setup>
import ChartBar from '@/components/ChartBar'
import { getChartsData } from '@/api/user'
import { onMounted, reactive } from 'vue'

let barData = reactive({})

onMounted(() => {
  bar()
})
const getData = async type => {
  const { data } = await getChartsData({ type })
  return data
}
const bar = async () => {
  const { xAxis, series, legend } = await getData('bar')
  barData.value = {
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
}
</style>
