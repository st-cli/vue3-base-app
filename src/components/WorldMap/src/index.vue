<!--
 * @Description: 世界热力图组件
 * @Autor: houyueke
 * @Date: 2022-04-21 11:35:32
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-13 11:59:12
-->
<template>
  <div ref="worldMapRef" :style="{ width, height }"></div>
</template>

<script setup>
import { useEcharts } from '@/hooks/useEcharts'
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

const worldMapRef = ref(null)

const { setOptions, echarts } = useEcharts(worldMapRef)

/**
 * @description: 注册地图
 */
const registJson = async () => {
  const json = await (await import('./world.json')).default
  echarts.registerMap('world', json)
}

watch(
  () => [...props.data],
  async newData => {
    if (newData.length) {
      await registJson()
      setOptions({
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
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(0, 0, 0, .6)',
          textStyle: {
            color: '#fff',
            fontSize: 12
          }
        },
        series: [
          {
            name: 'iphone4',
            type: 'map',
            map: 'world',
            label: {
              show: false,
              color: 'rgb(249, 249, 249)',
              fontSize: 10
            },
            itemStyle: {
              areaColor: '#2f82ce',
              borderColor: '#0DAAC1'
            },
            data: props.data
          }
        ]
      })
    }
  }
)
</script>
