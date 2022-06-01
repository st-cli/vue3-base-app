<template>
  <div class="chart">
    <div>
      <h3>多条折线图</h3>
      <MoreLineChart
        id="lineMoreChart"
        :data="lineMoreData"
        :titles="{
          subtext: '多条折线图title',
          left: '6%',
          top: '10',
          subtextStyle: { fontSize: 16 }
        }"
        type="line"
        height="600px"
      ></MoreLineChart>
    </div>
  </div>
</template>

<script setup>
import MoreLineChart from '@/components/chartMoreLine'
import { getChartsData } from '@/api/user'
import { onMounted, reactive } from 'vue'

let lineMoreData = reactive({})

onMounted(() => {
  lineMore()
})
const getData = async type => {
  const { data } = await getChartsData({ type })
  return data
}
const lineMore = async () => {
  const { xAxis, series, legend } = await getData('lineMore')
  lineMoreData.value = {
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
