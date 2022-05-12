<!--
 * @Description: home
 * @Autor: houyueke
 * @Date: 2022-04-12 17:31:21
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-12 10:44:23
-->
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

<template>
  <div class="fa">
    <h1>{{ username }}</h1>
    <h2>{{ getUserName }}</h2>
    <a-button type="primary" @click="handleClick">点击事件</a-button>
    <a-card>sdfsdf</a-card>
  </div>
  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <a-modal v-model:visible="visible" title="Basic Modal">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
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
