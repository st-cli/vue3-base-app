<template>
  <a-layout-sider
    v-model:collapsed="collapsed"
    class="sider"
    width="208"
    collapsible
  >
    <app-logo :show-title="!collapsed"></app-logo>
    <app-menu mode="inline"></app-menu>
    <template #trigger>
      <div class="trigger">
        <menu-unfold-outlined v-if="collapsed" />
        <menu-fold-outlined v-else />
      </div>
    </template>
  </a-layout-sider>
</template>

<script setup>
import { ref } from 'vue'
import AppLogo from '@/components/AppLogo'
import AppMenu from '@/components/AppMenu'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
const collapsed = ref(false)
</script>

<style scoped lang="less">
.trigger {
  background-color: #000d17;
  width: 100%;
  text-align: right;
  padding-right: 26px;
  font-size: 16px;
  height: 59px;
  line-height: 59px;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1890ff;
  }
}
.sider {
  min-height: calc(100vh - 17px);
}
</style>
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
