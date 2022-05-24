<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        @click="handleMenuClick"
      >
        <a-menu-item key="/china">
          <user-outlined />
          <span>中国地图</span>
        </a-menu-item>
        <a-menu-item key="/world">
          <video-camera-outlined />
          <span>世界地图</span>
        </a-menu-item>
        <a-menu-item key="/cloud">
          <upload-outlined />
          <span>词云</span>
        </a-menu-item>
        <a-menu-item key="/pinia">
          <upload-outlined />
          <span>pinia示例</span>
        </a-menu-item>
        <a-menu-item key="/login">
          <upload-outlined />
          <span>登录</span>
        </a-menu-item>
        <a-menu-item key="/echarts">
          <upload-outlined />
          <span>echarts图表</span>
        </a-menu-item>
        <a-menu-item key="/card">
          <upload-outlined />
          <span>Card</span>
        </a-menu-item>
        <a-menu-item key="/topNav">
          <upload-outlined />
          <span>TopNav</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
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
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const selectedKeys = ref([route.path])
const collapsed = ref(false)

const handleMenuClick = ({ key }) => {
  router.push({
    path: key
  })
}
</script>
<style lang="less" scoped>
.layout {
  height: 100%;
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1890ff;
  }
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
