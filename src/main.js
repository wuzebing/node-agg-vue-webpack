// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store/'
import Element from 'element-ui'
import 'font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css';

import '@/css/base.css'
import '@/css/element-ui-save.css'
import '@/css/index.less'

Vue.use(Element,{size:"mini"});

Vue.config.productionTip = false
// Vue.component('DatePicker', DatePicker);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router
})
