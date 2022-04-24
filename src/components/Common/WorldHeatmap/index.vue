<!--
 * @Description: 世界热力图组件
 * @Autor: houyueke
 * @Date: 2022-04-21 11:35:32
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-22 17:17:32
-->
<!--
 * @Description: 中国省份热力图组件
 * @Autor: houyueke
 * @Date: 2022-04-21 11:35:32
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-22 17:05:07
-->
<template>
  <div ref="worldMap" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import echarts from '@/utils/echarts'
import './world.js'
import { onBeforeUnmount, onMounted, ref, nextTick, watch } from 'vue'
const props = defineProps({
  width: {
    type: String,
    default: '600px'
  },
  height: {
    type: String,
    default: '500px'
  },
  data: {
    type: Array,
    default: function () {
      return []
    }
  }
})
const chart = ref(null)

const worldMap = ref(null)

onMounted(() => {
  nextTick(() => {
    init()
  })
})

onBeforeUnmount(() => {
  if (!chart.value) {
    return
  }
  chart.value.dispose()
  chart.value = null
})

watch(
  () => props.data,
  (newData) => {
    if (newData.length) {
      init()
    }
  })

/**
 * @description: 初始化地图
 * @param {*void}
 * @return {*void}
 * @author: houyueke
 */
const init = () => {
  if (!worldMap.value) return
  if (chart.value) {
    chart.value.dispose()
  }
  chart.value = echarts.init(worldMap.value)
  chart.value.setOption({
    title: {
      text: '',
      left: 'center',
      textStyle: {}
    },
    tooltip: {
      formatter: function (e) {
        return e.seriesName + '<br />' + e.name + ':' + e.value
      }
    },
    visualMap: {
      type: 'piecewise',
      min: 0,
      max: 100,
      itemWidth: 30,
      bottom: 10,
      left: 20,
      pieces: [
        { gt: 90, lte: 100, label: '非常好', color: '#6ad86e' },
        { gt: 50, lte: 90, label: '正常', color: '#9adcfa' },
        { gt: 30, lte: 50, label: '警告', color: '#ffeb3b' },
        { gt: 10, lte: 30, label: '较差', color: '#ff9800' },
        { gt: 1, lte: 10, label: '非常差', color: 'orangered' },
        { value: 0, label: '无数据', color: '#999' }
      ]
    },
    series: [
      {
        name: '销量',
        data: props.data,
        type: 'map',
        map: 'world',
        zoom: 1.2,
        aspectScale: 0.75,
        emphasis: {
          label: {
            color: 'yellow',
            fontSize: 18,
            fontWeight: 'bold'
          },
          itemStyle: {
            areaColor: '#01ADF2',
          }
        },
        itemStyle: {
          borderColor: 'rgba(39,211,233,1)',
          borderWidth: 1,
        }
      }
    ]
  })
  resizeChart()
}
/**
 * @description: 图表resize
 * @param {*void}
 * @return {*void}
 * @author: houyueke
 */
const resizeChart = () => {
  window.addEventListener('resize', () => {
    if (chart.value) {
      chart.value.resize()
    }
  })
}
</script>
