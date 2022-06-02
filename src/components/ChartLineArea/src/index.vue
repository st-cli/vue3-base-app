<!--
 * @Description: echarts组件 - 面积折叠图
 * @Autor: xyj
 * @Date: 2022-06-01 16:22:30
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

const getSeries = value => {
  const { legend, series, areaStyle } = value

  console.log('************', value, series, areaStyle)
  let seriesArr = []
  series.forEach((item, index) => {
    console.log(legend[index])
    seriesArr.push({
      top: '40',
      name: legend[index],
      type: props.type,
      data: item,
      stack: areaStyle ? 'Total' : null,
      areaStyle: areaStyle || null //是否面积堆叠图
      // emphasis: {
      //   focus: 'series'
      // },
      // symbol: 'none',
    })
  })
  return seriesArr
}

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

        series: getSeries(props.data.value)
      })
    }
  },
  { deep: true }
)
</script>
