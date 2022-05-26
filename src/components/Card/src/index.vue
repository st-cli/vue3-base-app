<template>
  <div
    class="card_box"
    :class="{ card_border: border }"
    :style="{ width, height }"
  >
    <div class="card_header" :class="{ header_line: headerLine }">
      <div class="header_left">
        <span v-if="prefixLine" class="vertical_line"></span>
        <span class="title">{{ title }}</span>
      </div>
      <div class="header_right">
        <slot name="right"></slot>
      </div>
    </div>
    <div :class="[headerLine ? 'card_content' : 'card_content_without_line']">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  border: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'name'
  },
  headerLine: {
    type: Boolean,
    default: false
  },
  prefixLine: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="less" scoped>
@card_padding: 16px;
@car_border_color: #d9d9d9;
.card_box {
  background: #fff;

  .card_header {
    height: 50px;
    line-height: 50px;
    padding: @card_padding;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header_left {
      display: flex;
      align-items: center;

      .vertical_line {
        width: 2px;
        height: 16px;
        background: #256cfa;
        margin-right: 8px;
      }

      .title {
        font-weight: 500;
        color: #404040;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
      }
    }

    .header_right {
    }
  }

  .card_content {
    padding: @card_padding;
  }

  .card_content_without_line {
    padding: 0px @card_padding;
  }

  .header_line {
    border-bottom: 1px solid @car_border_color;
  }
}

.card_border {
  border: 1px solid @car_border_color;
}
</style>
