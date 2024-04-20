import SvgIcon from '@/components/SvgIcon/index.vue';
import type { App, Component } from 'vue';

const componentInfo: { [name: string]: Component } = { SvgIcon };

export default {
  // 创建全局自定义组件
  install(app: App) {
    Object.keys(componentInfo).forEach((key) => {
      app.component(key, componentInfo[key]);
    });
  }
};
