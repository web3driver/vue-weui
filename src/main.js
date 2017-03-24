// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import resource from 'vue-resource';
import 'weui/dist/style/weui.min.css';
import App from './App';
import router from './router';
import components from './components';
import page from './pages/templates/page.template';

Vue.config.productionTip = false;

Vue.use(resource);

Object.keys(components).forEach((key) => {
  Vue.component(`yv-${key}`, components[key]);
});

Vue.component('yv-page', page);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
