<template>
    <a-layout class="layout">
        <basic-sider></basic-sider>
        <a-layout>
            <a-layout-header class="sider_header">
                <app-user mode="light"></app-user>
            </a-layout-header>
            <a-layout-content :style="{
                padding: '16px',
                minHeight: '280px'
            }">
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup>
import BasicSider from './sider/BasicSider.vue'
import AppUser from '@/components/AppUser'
</script>

<style lang="less" scoped>
.layout {
    height: 100%;

    .sider_header {
        display: flex;
        justify-content: flex-end;
        background: #fff;
        padding: 0;
    }
}
</style>
