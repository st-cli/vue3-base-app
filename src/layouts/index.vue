<template>
  <SiderLayout v-if="isSider"></SiderLayout>
  <TopLayout v-else></TopLayout>
</template>
<script setup>
import { isSider } from '../../config/systemConfig'
import SiderLayout from './SiderLayout.vue'
import TopLayout from './TopLayout.vue'
</script>
<style lang="less" scoped>
.ant-layout-sider-collapsed {
  flex: 0 0 64px !important;
  max-width: 64px !important;
  min-width: 64px !important;
  width: 64px !important;

  :deep(.ant-layout-sider-trigger) {
    width: 64px !important;
  }
}

:deep(.ant-menu-dark .ant-menu-inline.ant-menu-sub) {
  background: #001529 !important;
}
</style>
