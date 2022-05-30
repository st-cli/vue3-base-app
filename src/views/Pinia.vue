<!--
 * @Description: home
 * @Autor: houyueke
 * @Date: 2022-04-12 17:31:21
 * @LastEditors: houyueke
 * @LastEditTime: 2022-05-13 18:28:02
-->
<template>
  <div class="fa">
    <h1>{{ username }}</h1>
    <h2>{{ getUserName }}</h2>
    <a-space>
      <a-button type="primary" @click="handleClick">修改pinia状态</a-button>
    </a-space>
  </div>
  <a-table
    :loading="loading"
    :data-source="list"
    :columns="columns"
    :pagination="pagination"
    @change="handleTableChange"
  />
</template>

<script setup>
import { useUserStore } from '@/store/useUserStore'
import { message } from 'ant-design-vue'
import { storeToRefs } from 'pinia'
import { login, getUserList } from '@/api/user'
import { onMounted, reactive } from 'vue'
import { usePagination } from '@/hooks/usePagination'
const columns = [
  {
    title: '账号',
    dataIndex: 'account',
    key: 'account'
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  }
]

onMounted(async () => {
  await login({
    password: '123456',
    username: 'admin'
  })
})
const user = useUserStore()
//other params
const params = reactive({
  name: 'test',
  age: 12
})
const { username, getUserName } = storeToRefs(user)
const { list, loading, setCurrent, pagination } = usePagination(
  getUserList,
  params
)

const handleTableChange = ({ current, pageSize }) => {
  setCurrent(current, pageSize, params)
}
const handleClick = () => {
  user.setUserName('test')
  message.success('点击成功')
}
</script>

<style lang="less" scoped></style>
