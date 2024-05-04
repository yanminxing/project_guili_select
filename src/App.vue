<script setup lang="ts">
import variables from '@/styles/align.module.scss';
</script>

<template>
  <div>
    <SvgIcon name="home" color="red"></SvgIcon>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/align.module.scss';
.p {
  color: $colorBl !important;
}
</style>
