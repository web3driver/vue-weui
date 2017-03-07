import Vue from 'vue';
import Router from 'vue-router';

// import pages
import index from '@/pages/index';
import button from '@/pages/button';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/button',
      component: button,
    },
  ],
});
