<!--
 * @Description: World map
 * @Autor: houyueke
 * @Date: 2022-04-12 17:31:21
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-13 11:43:50
-->
<template>
  <world-map :data="worldData"></world-map>
</template>

<script setup>
import WorldMap from '@/components/WorldMap'
import { ref, onMounted } from 'vue'
import { getWorldData } from '@/api/demo'
const worldData = ref([])
onMounted(async () => {
  const { data } = await getWorldData()
  worldData.value = data
})
</script>

<style></style>
