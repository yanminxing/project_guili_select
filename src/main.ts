import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs';

import App from './App.vue';

/**
 * @description 创建vue应用
 */
function create() {
  const app = createApp(App);

  app.use(ElementPlus, {
    locale: zhCn
  });

  app.mount('#app');
}

create();
