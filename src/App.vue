<script setup lang="ts">
import variables from '@/styles/align.module.scss';
import request from '@/utils/request.ts';

request({
  url: '/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111'
  }
});
</script>

<template>
  <div>
    <SvgIcon name="home" color="red"></SvgIcon>
    <span class="p" :style="{ color: variables.colorBlue }">33333</span>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/align.module.scss';
.p {
  color: $colorBl !important;
}
</style>
