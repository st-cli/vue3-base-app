<template>
  <div class="chart">
    <div>
      <h3>饼图</h3>
      <ChartPie
        id="pie"
        :data="pieData"
        height="600px"
        width='80%'
      ></ChartPie>
    </div>
  </div>
</template>

<script setup>
import ChartPie from '@/components/ChartPie'
import { getChartsData } from '@/api/user'
import { onMounted, reactive } from 'vue'

let pieData = reactive({})

onMounted(() => {
  pie()
})
const getData = async type => {
  const { data } = await getChartsData({ type })
  return data
}
const pie = async () => {
  const { series, legend } = await getData('pie')
  pieData.value = {
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
