<template>
  <a-layout-header class="header-horizontal">
    <app-logo class="logo"></app-logo>
    <app-menu :style="{ flex: 1 }"></app-menu>
    <app-user mode="dark"></app-user>
  </a-layout-header>
</template>

<script setup>
import AppLogo from '@/components/AppLogo'
import AppMenu from '@/components/AppMenu'
import AppUser from '@/components/AppUser'
</script>

<style lang="less" scoped>
.header-horizontal {
  display: flex;
  padding: 0px;

  .logo {
    margin-right: 100px;
  }

  .menu {
    flex: 1;
  }
}
</style>
