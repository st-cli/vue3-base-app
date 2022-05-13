<!--
 * @Description: echarts 词云组件
 * @Autor: houyueke
 * @Date: 2022-04-21 15:51:57
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-13 14:28:36
-->
<template>
  <div ref="wordcloudRef" :style="{ width, height }"></div>
</template>

<script setup>
import { useEcharts } from '@/hooks/useEcharts'
import 'echarts-wordcloud/dist/echarts-wordcloud.min'
import { ref, watch } from 'vue'
const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: 'calc(100vh - 124px)'
  },
  data: {
    type: Array,
    default: function () {
      return []
    }
  }
})

const wordcloudRef = ref(null)

const { setOptions } = useEcharts(wordcloudRef)

watch(
  () => [...props.data],
  newData => {
    if (newData.length) {
      setOptions({
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
    }
  }
)
</script>
