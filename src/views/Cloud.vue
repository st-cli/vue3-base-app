<!--
 * @Description: word cloud
 * @Autor: houyueke
 * @Date: 2022-04-12 17:31:21
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-13 14:30:14
-->
<template>
  <word-cloud :data="cloudData"></word-cloud>
</template>

<script setup>
import WordCloud from '@/components/WordCloud'
import { ref, onMounted } from 'vue'
import { getCloudData } from '@/api/demo'
const cloudData = ref([])
onMounted(async () => {
  const { data } = await getCloudData()
  cloudData.value = data
})
</script>

<style></style>
