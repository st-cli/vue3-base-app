<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    theme="dark"
    mode="horizontal"
    :style="{ lineHeight: '64px', fontSize: '16px' }"
    @click="handleMenuClick"
  >
    <template v-for="subItem in data">
      <a-sub-menu
        v-if="subItem.children && subItem.children.length"
        :key="subItem.key"
      >
        <template #title>{{ subItem.title }}</template>
        <a-menu-item
          v-for="item in subItem.children"
          :key="item.key"
          class="twoMenu"
          :class="subItem.children.length > 4 ? 'bigSub' : 'smallSub'"
        >
          <div style="display: inline-block">{{ item.title }}</div>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item v-else :key="subItem.key">
        <span>{{ subItem.title }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
defineProps({
  data: {
    type: Array,
    default: function () {
      return []
    }
  }
})

const route = useRoute()
const router = useRouter()
const selectedKeys = ref()
onMounted(() => {
  selectedKeys.value = [route.path]
})
const handleMenuClick = select => {
  selectedKeys.value = [select.key]
  router.push({ path: select.key })
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

:deep .ant-menu.ant-menu-dark .ant-menu-item-selected {
  background-color: #001529;
}

:deep .ant-menu-submenu {
  display: flex;
  flex: wrap;
}

:deep .ant-menu-dark .ant-menu-sub,
.ant-menu.ant-menu-dark .ant-menu-sub {
  color: rgba(255, 255, 255, 0.65);
  background: #001529;
  display: flex;
  flex-wrap: wrap;
}
</style>
