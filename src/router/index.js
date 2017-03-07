import Vue from 'vue';
import Router from 'vue-router';

// import pages
import index from '@/pages/index';
// 表单
import button from '@/pages/button';
// 基础组件

// 导航相关
import navbar from '@/pages/navbar';
import tabbar from '@/pages/tabbar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    { path: '/button', component: button },
    { path: '/navbar', component: navbar },
    { path: '/tabbar', component: tabbar },
  ],
});
