// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import components from './components';
import 'weui/dist/style/weui.min.css';

Vue.config.productionTip = false;

Object.keys(components).forEach((key) => {
  Vue.component(`yv-${key}`, components[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
