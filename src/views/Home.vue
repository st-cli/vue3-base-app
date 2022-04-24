<!--
 * @Description: home
 * @Autor: houyueke
 * @Date: 2022-04-12 17:31:21
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-24 11:17:11
-->
<script setup>
import { useUserStore } from '@/store/userStore'
import { message } from 'ant-design-vue'
import { storeToRefs } from 'pinia'
const user = useUserStore()
const { username, getUserName } = storeToRefs(user)
const handleClick = () => {
  user.setUserName('test')
  message.success('点击成功')
}
</script>

<template>
  <div class="fa">
    <h1>{{ username }}</h1>
    <h2>{{ getUserName }}</h2>
    <a-button type="primary" @click="handleClick">点击事件</a-button>
  </div>
</template>

<style lang="less" scoped>
.fa {
  border: 1px solid red;

  h1 {
    font-size: 28px;
    color: green;
  }
}
</style>
