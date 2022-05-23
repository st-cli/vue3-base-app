<template>
  <div class="UserInfo">
    <bell-outlined />
    <a-avatar v-if="userImg" :src="userImg" :size="24" />
    <a-avatar v-else style="background-color: #357fdc" :size="24">{{
      userName.substring(0, 1)
    }}</a-avatar>
    <span>欢迎您，{{ userName }}</span>
  </div>
</template>

<script setup>
import { BellOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '@/store/useUserStore'
const userStore = useUserStore()
const userName = userStore.getUserName
const userImg = userStore.getUserImg || ''
</script>

<style lang="less" scoped>
.UserInfo {
  float: right;
  padding-right: 16px;
}
.ant-avatar {
  margin: -3px 8px 0 24px;
}
</style>
