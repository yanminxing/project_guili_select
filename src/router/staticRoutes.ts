/**
 * @description 静态路由
 * */
export const staticRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/error404',
    name: 'Error404',
    component: () => import('@/views/pageError404/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/error404',
    name: 'Any'
  }
];
