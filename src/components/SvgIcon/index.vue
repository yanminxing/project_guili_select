<template>
  <svg aria-hidden="true" :style="{ width: width, height: height }">
    <use :xlink:href="symbolId" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
import { ref } from 'vue';

const props = defineProps({
  /**
   * icon的名称，省略后缀
   * */
  prefix: {
    type: String,
    default: '#icon-'
  },
  //svg矢量图的名字
  name: String,
  // svg图标的颜色
  color: {
    type: String,
    default: '#333'
  },
  //svg宽度
  width: {
    type: String,
    default: '16px'
  },
  //svg高度
  height: {
    type: String,
    default: '16px'
  }
});

const symbolId = ref(`${props.prefix}${props.name}`);
</script>

<style scoped lang="scss"></style>
