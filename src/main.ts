import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs';
// svg注册
import 'virtual:svg-icons-register';

import App from '@/App.vue';
import globalComponent from '@/components/index';

import '@/styles/index.scss';
import { router } from '@/router';
import pinia from '@/store';

/**
 * @description 创建vue应用
 */
function create() {
  const app = createApp(App);

  app.use(ElementPlus, {
    locale: zhCn
  });
  app.use(pinia);
  app.use(router);
  // 注册全局组件
  app.use(globalComponent);

  app.mount('#app');
}

create();
