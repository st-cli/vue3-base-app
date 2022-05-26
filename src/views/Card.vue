<template>
  <a-row :gutter="[16, 16]">
    <a-col :span="8">
      <Card title="这是卡片名称一"> fdgfg </Card>
    </a-col>
    <a-col :span="8">
      <Card title="这是卡片名称二" header-line> ddgfdgd </Card>
    </a-col>
    <a-col :span="8">
      <Card title="这是卡片名称三" :prefix-line="false"> </Card>
    </a-col>
    <a-col :span="8">
      <Card title="这是卡片名称四" header-line>
        <template #right>
          <a>更多</a>
        </template>
      </Card>
    </a-col>
    <a-col :span="8">
      <Card title="这是卡片名称五" border> </Card>
    </a-col>
  </a-row>
</template>

<script setup>
import Card from '@/components/Card'
</script>
