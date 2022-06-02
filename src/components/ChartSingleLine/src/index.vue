<!--
 * @Description: echarts组件 - 单折线图
 * @Autor: xyj
 * @Date: 2022-06-01 14:50:30
 * @LastEditors: 
 * @LastEditTime: 
-->

<template>
  <div :id="id" :style="{ width, height }"></div>
</template>

<script setup>
import { useEcharts } from '@/hooks/useEcharts'
import { watch } from 'vue'
const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: 'calc(100vh - 124px)'
  },
  type: {
    type: String,
    default: 'line'
  },
  titles: {
    type: Object,
    default: function () {
      return {}
    }
  },
  data: {
    type: Array,
    default: function () {
      return []
    }
  }
})

watch(
  () => props.data,
  newData => {
    if (newData) {
      const { setOptions } = useEcharts(document.getElementById(props.id))
      setOptions({
        title: props.titles.value || props.titles,
        tooltip: {
          confine: true,
          enterable: true, //鼠标是否可以移动到tooltip区域内
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          show: true,
          type: 'scroll',
          pageIconSize: 10,
          pageIconColor: '#37a6bd',
          pageTextStyle: {},
          itemGap: 20,
          data: props.data.value.legend
        },
        xAxis: {
          data: props.data.value.xAxis,
          axisLabel: {
            fontSize: 16
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          axisLabel: {
            fontSize: 16
          }
        },

        series: [
          {
            name: props.data.value.legend[0],
            data: props.data.value.series[0],
            type: 'line'
          }
        ]
      })
    }
  },
  { deep: true }
)
</script>
