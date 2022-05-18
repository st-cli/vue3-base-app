<!--
 * @Description: echarts组件
 * @Autor: liyunpeng
 * @Date: 2022-05-17 11:30:30
 * @LastEditors: liyunpeng
 * @LastEditTime: 
-->
<template>
  <div :id="id" :style="{ width, height }"></div>
</template>

<script setup>
import { useEcharts } from '@/hooks/useEcharts'
import { onMounted, watch } from 'vue'
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
    default: '300px'
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
    type: Object,
    default: function () {
      return {}
    }
  },
  others: {
    type: Object,
    default: function () {
      return null
    }
  }
})

onMounted(() => {})
const getOthersOptions = val => {
  if (props.others) {
    let obj = props.others[val] || props.others.value[val]
    return obj != undefined ? { ...obj } : {}
  }
  return {}
}

const getSeries = value => {
  const { legend, series, areaStyle } = value
  // console.log('************', value, series, areaStyle)
  let seriesArr = []
  if (props.type === 'pie') {
    return [
      {
        name: '饼图',
        top: '40',
        type: props.type,
        ...getOthersOptions('series'),

        data: series
      }
    ]
  }
  if (props.type === 'radar') {
    return [
      {
        name: '雷达图',
        top: '500',
        type: props.type,
        ...getOthersOptions('series'),
        data: series
      }
    ]
  }
  series.forEach((item, index) => {
    seriesArr.push({
      top: '40',
      name: legend[index],
      type: props.type,
      data: item,
      stack: areaStyle ? 'Total' : null,
      areaStyle: areaStyle || null, //是否面积堆叠图
      ...getOthersOptions('series')
      // emphasis: {
      //   focus: 'series'
      // },
      // symbol: 'none',
    })
  })
  return seriesArr
}
const getTrigger = value => {
  switch (value) {
    case 'pie':
      return 'item'

    case 'radar':
      return null

    default:
      return 'axis'
  }
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
          trigger: getTrigger(props.type),
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          ...getOthersOptions('tooltip')
        },
        grid: props.data.grid,
        legend: {
          type: 'scroll',
          pageIconSize: 10,
          pageIconColor: '#37a6bd',
          pageTextStyle: {},
          itemGap: 20,
          ...getOthersOptions('legend'),
          data: props.data.value.legend
        },

        xAxis:
          ['pie', 'radar'].indexOf(props.type) !== -1
            ? null
            : {
                ...getOthersOptions('xAxis'),
                data: props.data.value.xAxis
              },
        yAxis:
          ['pie', 'radar'].indexOf(props.type) !== -1
            ? null
            : {
                type: 'value',
                splitLine: {
                  lineStyle: {
                    type: 'dashed'
                  }
                },
                ...getOthersOptions('yAxis')
              },
        radar: [
          {
            name: {
              formatter: '{value}'
            },
            ...getOthersOptions('radar'),
            indicator: props.data.value.indicator
          }
        ],
        series: getSeries(props.data.value),
        ...getOthersOptions('others')
      })
    }
  },
  { deep: true }
)
</script>

<style>
.chartsRef {
  width: 500px;
  height: 500px;
  background-color: pink;
}
</style>
