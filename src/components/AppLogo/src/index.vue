<template>
  <div class="logo" :class="showTitle ? '' : 'padding16'">
    <img width="32" src="@/assets/logo.png" alt="" />
    <div v-show="showTitle" class="logoName">
      <div class="CName">世通亨奇</div>
      <div class="EName">STONEHENGE</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  showTitle: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped lang="less">
.padding16 {
  padding: 16px 24px 16px 16px !important;
}
.logo {
  display: flex;
  padding: 16px 24px;
  height: 64px;

  .logoName {
    flex: 1;
    padding-left: 8px;
    line-height: 16px;
    color: #fff;

    .CName {
      font-size: 15px;
    }

    .EName {
      font-size: 8px;
    }
  }
}
</style>
