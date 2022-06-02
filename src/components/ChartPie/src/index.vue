<!--
 * @Description: 饼图组件
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
  const { series } = value
  return [
    {
      name: '饼图',
      top: '40',
      type: 'pie',
      label: {
        normal: {
          formatter: '{b}:{d}%',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 15
          }
        }
      },
      ...getOthersOptions('series'),

      data: series
    }
  ]
}
watch(
  () => props.data,
  newData => {
    if (newData) {
      const { setOptions } = useEcharts(document.getElementById(props.id))

      setOptions({
        title: props.titles.value || props.titles,
        tooltip: {
          trigger: 'item',
          ...getOthersOptions('tooltip')
        },
        grid: props.data.grid,
        legend: {
          orient:'',
          icon: 'circle',
          x: 'right', //可设定图例在左、右、居中 left  center  right
          y: 'center', //可设定图例在上、下、居中left  center  right
          itemGap: 20,
          ...getOthersOptions('legend'),
          data: props.data.value.legend
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
