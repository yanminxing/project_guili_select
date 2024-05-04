import { createRouter, createWebHashHistory } from 'vue-router';
import { staticRoutes } from './staticRoutes.ts';

/**
 * @description 定义路由
 *  */
export const router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  // 路由
  routes: staticRoutes,
  // 路由切换时候，滚动条行为
  scrollBehavior: () => {
    return {
      left: 0,
      top: 0
    };
  }
});
