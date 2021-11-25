/*
 * @Description:
 * @Author: 罗钧译
 * @Date: 2021-11-24 16:43:19
 * @LastEditors: 罗钧译
 * @LastEditTime: 2021-11-25 15:28:38
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/login', component: '@/pages/login' },
    {
      exact: true,
      path: '/home',
      component: '@/pages/home',
      wrappers: ['@/wrappers/auth'],
    },
  ],
  fastRefresh: {},
  antd: { mobile: false },
});
