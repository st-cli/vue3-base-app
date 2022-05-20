<!--
 * @Description: App.vue
 * @Autor: houyueke
 * @Date: 2022-04-12 16:15:52
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-13 10:33:46
-->
<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
</script>

<template>
  <a-config-provider :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>

<style lang="less">
#app {
  width: 100%;
  min-width: 1200px;
  overflow-x: scroll;
  height: 100vh;
}
</style>
