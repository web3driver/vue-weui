import Vue from 'vue';
import Router from 'vue-router';

// import pages
import index from '@/pages/index';
// 表单
import button from '@/pages/button';
import input from '@/pages/input';
import list from '@/pages/list';
import slider from '@/pages/slider';
import uploader from '@/pages/uploader';
// 基础组件
import article from '@/pages/article';
import badge from '@/pages/badge';
import flex from '@/pages/flex';
import footer from '@/pages/footer';
import gallery from '@/pages/gallery';
import grid from '@/pages/grid';
import icons from '@/pages/icons';
import loadmore from '@/pages/loadmore';
import panel from '@/pages/panel';
import preview from '@/pages/preview';
import progress from '@/pages/progress';
// 操作反馈
import actionsheet from '@/pages/actionsheet';
import dialog from '@/pages/dialog';
import msg from '@/pages/msg';
import msgsuccess from '@/pages/msg_success';
import msgwarn from '@/pages/msg_warn';
import picker from '@/pages/picker';
import toast from '@/pages/toast';
// 导航相关
import navbar from '@/pages/navbar';
import tabbar from '@/pages/tabbar';
// 搜索相关
import searchbar from '@/pages/searchbar';
// 层级规范
import layers from '@/pages/layers';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: index },
    { path: '/button', component: button },
    { path: '/input', component: input },
    { path: '/list', component: list },
    { path: '/slider', component: slider },
    { path: '/uploader', component: uploader },
    { path: '/article', component: article },
    { path: '/badge', component: badge },
    { path: '/flex', component: flex },
    { path: '/footer', component: footer },
    { path: '/gallery', component: gallery },
    { path: '/grid', component: grid },
    { path: '/icons', component: icons },
    { path: '/loadmore', component: loadmore },
    { path: '/panel', component: panel },
    { path: '/preview', component: preview },
    { path: '/progress', component: progress },
    { path: '/actionsheet', component: actionsheet },
    { path: '/dialog', component: dialog },
    { path: '/msg', component: msg },
    { path: '/msgsuccess', component: msgsuccess },
    { path: '/msgwarn', component: msgwarn },
    { path: '/picker', component: picker },
    { path: '/toast', component: toast },
    { path: '/searchbar', component: searchbar },
    { path: '/navbar', component: navbar },
    { path: '/tabbar', component: tabbar },
    { path: '/layers', component: layers },
  ],
});
