<!--
 * @Description: echarts 词云组件
 * @Autor: houyueke
 * @Date: 2022-04-21 15:51:57
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-22 17:22:51
-->
<template>
  <div ref="wordcloud" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import echarts from '@/utils/echarts'
import 'echarts-wordcloud/dist/echarts-wordcloud.min'
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

const wordcloud = ref(null)

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
  newData => {
    if (newData.length) {
      init()
    }
  }
)

/**
 * @description: 初始化词云
 * @param {*void}
 * @return {*void}
 * @author: houyueke
 */
const init = () => {
  if (!wordcloud.value) return
  if (chart.value) {
    chart.value.dispose()
  }
  chart.value = echarts.init(wordcloud.value)
  chart.value.setOption({
    title: {
      text: '',
      x: 'center'
    },
    backgroundColor: '#fff',
    series: [
      {
        type: 'wordCloud',
        gridSize: 10, //词之间的距离
        sizeRange: [14, 60], //字体大小范围
        rotationRange: [0, 0],
        textStyle: {
          color: function () {
            return (
              'rgb(' +
              Math.round(Math.random() * 255) +
              ', ' +
              Math.round(Math.random() * 255) +
              ', ' +
              Math.round(Math.random() * 255) +
              ')'
            )
          }
        },
        left: 'center',
        top: 'center',
        data: props.data
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
