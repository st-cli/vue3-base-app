<!--
 * @Description: China map
 * @Autor: houyueke
 * @Date: 2022-04-12 17:31:21
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-13 11:07:33
-->
<template>
  <ChinaHeatmap :data="chinaData"></ChinaHeatmap>
</template>

<script setup>
import ChinaHeatmap from '@/components/Common/ChinaHeatmap'
import { ref, onMounted } from 'vue'
import { getChinaData } from '@/api/demo'
const chinaData = ref([])
onMounted(async () => {
  const { data } = await getChinaData()
  chinaData.value = data
})
</script>

<style></style>
