<template>
  <a-layout class="layout">
    <a-layout-sider
      v-model:collapsed="collapsed"
      class="sider"
      width="208"
      collapsible
    >
      <div class="logo">
        <img width="32" src="@/assets/logo.png" alt="" />
        <div v-show="!collapsed" class="logoName">
          <div class="CName">世通亨奇</div>
          <div class="EName">STONEHENGE</div>
        </div>
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        :open-keys="openKeys.value"
        @open-change="onOpenChange"
        @click="handleMenuClick"
      >
        <template v-for="subItem in menuList">
          <a-sub-menu v-if="subItem.children?.length" :key="subItem.key">
            <template #icon
              ><component :is="subItem.icon"></component
            ></template>
            <template #title>{{ subItem.title }}</template>
            <a-menu-item v-for="item in subItem.children" :key="item.key">
              <component :is="item.icon"></component>
              <span>{{ item.title }}</span>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else :key="subItem.key">
            <component :is="subItem.icon"></component>
            <span>{{ subItem.title }}</span>
          </a-menu-item>
        </template>
      </a-menu>
      <template #trigger>
        <div class="trigger">
          <menu-unfold-outlined v-if="collapsed" />
          <menu-fold-outlined v-else />
        </div>
      </template>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <UserInfo />
      </a-layout-header>
      <a-layout-content
        :style="{
          padding: '16px',
          minHeight: '280px'
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import UserInfo from '@/components/UserInfo'
import { ref, onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import menuList from './menuList'

const route = useRoute()
const router = useRouter()
const selectedKeys = ref([route.path])
const collapsed = ref(false)
const openKeys = reactive([''])
const handleMenuClick = ({ key }) => {
  router.push({
    path: key
  })
}
const onOpenChange = opens => {
  if (opens.length !== 0) {
    openKeys.value = [opens[1]]
  } else {
    openKeys.value = ['']
  }
}
const initMenu = () => {
  menuList.forEach(subItem => {
    if (subItem.children?.length) {
      subItem.children.forEach(item => {
        if (item.key === route.path) {
          openKeys.value = [...[subItem.key]]
        }
      })
    }
  })
}
onMounted(() => {
  openKeys.value = ['']
  initMenu()
})
</script>
<style lang="less" scoped>
.layout {
  height: 100%;
  .sider {
    position: relative;
  }
}

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
  .trigger2 {
    color: #fff;
  }
}

.logo {
  display: flex;
  padding: 16px;
  height: 64px;
  .logoName {
    flex: 1;
    padding-left: 8px;
    line-height: 16px;
    color: #fff;
    .CName {
      font-size: 15px;
    }
    .EName {
      font-size: 8px;
    }
  }
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
