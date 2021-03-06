// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-TW'
import store from './store/'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'
import '@/common/scss/index.scss'

Vue.config.productionTip = false
/* use element-ui traditional chinese*/
Vue.use(ElementUI, { locale })
/* eslint-disable no-new */
Vue.prototype.$http = axios


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
