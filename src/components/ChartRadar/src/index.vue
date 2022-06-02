<!--
 * @Description: 雷达图组件
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
  areaColor: {
    type: Object,
    default: function () {
      return {
        color: ['#1890ff', '#2fc25b', '#fac858'],
        bgColor: ['#b9ddff78', '#c0eccd82', '#fac8589e']
      }
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
  let dataArr = []
  series.forEach((item, index) => {
    dataArr.push({
      itemStyle: {
        //此属性的颜色和下面areaStyle属性的颜色都设置成相同色即可实现
        color: props.areaColor.color[index],
        borderColor: props.areaColor.color[index]
      },
      areaStyle: {
        color: props.areaColor.bgColor[index]
      },
      ...item
    })
  })
  return [
    {
      name: '雷达图',
      top: '500',
      type: 'radar',
      ...getOthersOptions('series'),
      data: dataArr
    }
  ]
}
const getIndicator = value => {
  value.map((item, index) => {
    if (index == 0) {
      item['axisLabel'] = { show: true }
    }
  })
  return value
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
          },
          ...getOthersOptions('tooltip')
        },
        grid: props.data.grid,
        legend: {
          type: 'scroll',
          bottom: 0,
          icon: 'circle',
          pageIconSize: 10,
          pageIconColor: '#37a6bd',
          pageTextStyle: {},
          itemGap: 20,
          ...getOthersOptions('legend'),
          data: props.data.value.legend
        },
        radar: [
          {
            name: {
              formatter: '{value}'
            },
            splitArea: {
              show: false,
              areaStyle: {
                color: 'rgba(255,0,0,0)' // 图表背景的颜色
              }
            },
            splitLine: {
              // (这⾥是指所有圆环)坐标轴在 grid 区域中的分隔线。
              lineStyle: {
                type: 'dashed',
                color: '#bcb5b5', // 分隔线颜⾊
                width: 1 // 分隔线线宽
              }
            },
            ...getOthersOptions('radar'),
            indicator: getIndicator(props.data.value.indicator)
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

<style></style>
