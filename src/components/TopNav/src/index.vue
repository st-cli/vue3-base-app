<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
        <div v-show="showLogo" class="sysName">
          <div class="logoName">{{ logoName }}</div>
          <div class="bottomName">{{ subLogoText }}</div>
        </div>
      </div>
      <div class="menu">
        <NavMenu :data="data"></NavMenu>
      </div>
      <div class="userInfo">
        <UserInfo></UserInfo>
      </div>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px"> </a-layout-content>
  </a-layout>
</template>
<script setup>
import { showLogo } from '../../../../config/systemConfig'
import UserInfo from '@/components/UserInfo'
import List from './data.js'
import NavMenu from '@/components/NavMenu'
defineProps({
  logoName: {
    type: String,
    default: '世通亨奇'
  },
  subLogoText: {
    type: String,
    default: 'STONEHENGE'
  },
  data: {
    type: Array,
    default: function () {
      return List
    }
  }
})
</script>
<style lang="less" scoped>
:deep .ant-layout-header {
  display: flex;
  width: 100%;
  height: 64px;
  padding-left: 24px;
  padding-right: 16px;
  .logo {
    display: flex;
    align-items: center;
    height: 100%;
    width: 296px;
    img {
      width: 32px;
    }

    .sysName {
      flex: 1;
      padding-left: 8px;
      line-height: 16px;
      color: #fff;

      .logoName {
        font-size: 15px;
      }

      .bottomName {
        font-size: 8px;
      }
    }
  }
  .menu {
    flex: 1;
  }
  .userInfo {
    width: 296px;
    // background: #fff;
    color: #fff;
    padding: 0;
  }
}
</style>
