<!--
 * @Description: 柱状图组件
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
    return obj ? { ...obj } : {}
  }
  return {}
}

const getSeries = value => {
  const { legend, series } = value
  let seriesArr = []
  series.forEach((item, index) => {
    seriesArr.push({
      top: '40',
      name: legend[index],
      type: 'bar',
      data: item,
      label: {
        show: true, //顶部是否展示数字
        position: 'top'
      },
      ...getOthersOptions('series')
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
          trigger: 'axis',
          axisPointer: {
            type: 'none'
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

        xAxis: {
          ...getOthersOptions('xAxis'),
          data: props.data.value.xAxis
        },
        yAxis: {
          type: 'value',
          ...getOthersOptions('yAxis')
        },
        series: getSeries(props.data.value),
        ...getOthersOptions('others')
      })
    }
  },
  { deep: true }
)
</script>

<style></style>
