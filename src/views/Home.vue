<!--
 * @Description: home
 * @Autor: houyueke
 * @Date: 2022-04-12 17:31:21
 * @LastEditors: houyueke
 * @LastEditTime: 2022-04-28 11:26:10
-->
<script setup>
import { useUserStore } from '@/store/userStore'
import { message } from 'ant-design-vue'
import { storeToRefs } from 'pinia'
import { login } from '@/api/user'
import { onMounted } from 'vue'

onMounted(async () => {
  await login({
    password: '123456',
    username: 'admin'
  })
})
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
