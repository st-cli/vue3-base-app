<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    theme="dark"
    :mode="mode"
    :open-keys="openKeys.value"
    @open-change="onOpenChange"
    :style="{ lineHeight: '64px' }"
    @click="handleMenuClick"
  >
    <template v-for="subItem in menuList">
      <a-sub-menu v-if="subItem.children?.length" :key="subItem.key">
        <template #icon>
          <component :is="subItem.icon"></component>
        </template>
        <template #title>{{ subItem.title }}</template>
        <a-menu-item
          v-for="item in subItem.children"
          :key="item.key"
          :class="subItem.children.length > 4 ? 'bigSub' : 'smallSub'"
        >
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
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import menuList from './menu'
const props = defineProps({
  mode: {
    type: String,
    default: 'horizontal' // horizontal|inline
  }
})

const route = useRoute()
const router = useRouter()
const selectedKeys = ref([route.path])
const openKeys = reactive([''])

onMounted(() => {
  openKeys.value = ['']
  if (props.mode === 'inline') {
    initMenu()
  }
})

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
</script>

<style scoped>
:deep(.ant-menu-item) {
  font-size: 16px;
  font-family: 'PingFangSC-Medium, PingFang SC';
  font-weight: 400;
  min-width: 156px;
  padding: 21px 24px;
}

:deep(.ant-menu-submenu) {
  font-size: 16px;
  font-family: 'PingFangSC-Medium, PingFang SC';
  font-weight: 400;
  min-width: 156px;
  padding: 21px 24px;
}

:deep(.ant-menu.ant-menu-dark .ant-menu-item-selected) {
  background-color: #001529 !important;
}

:deep(.ant-menu-submenu) {
  display: flex;
  flex: wrap;
}

:deep(.ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub) {
  color: rgba(255, 255, 255, 0.65);
  background: #001529;
  display: flex;
  flex-wrap: wrap;
}
</style>
