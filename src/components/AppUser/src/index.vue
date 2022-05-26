<template>
  <div
    class="user_info"
    :class="[mode === 'light' ? 'user_info_dark' : 'user_info_light']"
  >
    <bell-outlined />
    <a-avatar v-if="userImg" :src="userImg" :size="24" />
    <a-avatar v-else style="background-color: #357fdc" :size="24">{{
      userName.substring(0, 1)
    }}</a-avatar>
    <a-dropdown type="text">
      <a class="ant-dropdown-link" @click.prevent> 欢迎您，{{ userName }} </a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a href="javascript:;">退出登录</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup>
import { BellOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '@/store/useUserStore'
const userStore = useUserStore()
const userName = userStore.getUserName
const userImg = userStore.getUserImg || ''
defineProps({
  mode: {
    type: String,
    default: 'light'
  }
})
</script>

<style lang="less" scoped>
.user_info {
  padding-right: 16px;
  line-height: 64px;
  display: flex;
  align-items: center;
}

.user_info_light {
  color: #fff;
}

.user_info_dark {
  color: #404040;
}

.ant-avatar {
  margin: 0px 8px 0px 16px;
}

.ant-dropdown-link {
  color: unset;
}
</style>
