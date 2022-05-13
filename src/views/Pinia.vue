<!--
 * @Description: home
 * @Autor: houyueke
 * @Date: 2022-04-12 17:31:21
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-13 15:05:38
-->
<template>
  <div class="fa">
    <h1>{{ username }}</h1>
    <h2>{{ getUserName }}</h2>
    <a-space>
      <a-button type="primary" @click="handleClick">修改pinia状态</a-button>
      <a-button type="primary" @click="showModal">mock list </a-button>
    </a-space>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/userStore'
import { message } from 'ant-design-vue'
import { storeToRefs } from 'pinia'
import { login, getUserList } from '@/api/user'
import { onMounted, ref } from 'vue'

onMounted(async () => {
  await login({
    password: '123456',
    username: 'admin'
  })
  await getUserList({
    page: 1,
    pageSize: 15
  })
})
const user = useUserStore()
const { username, getUserName } = storeToRefs(user)
const handleClick = () => {
  user.setUserName('test')
  message.success('点击成功')
}
const visible = ref(false)
const showModal = () => {
  visible.value = true
}
</script>

<style lang="less" scoped></style>
