<template>
  <a-layout class="layout">
    <basic-header></basic-header>
    <a-layout-content
      :style="{
        padding: '16px',
        minHeight: '280px'
      }"
    >
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import BasicHeader from './header/BasicHeader.vue'
</script>

<style lang="less" scoped>
.layout{
    height:100%;
}

</style>
