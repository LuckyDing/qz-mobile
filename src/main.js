// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/common.css'
import './assets/css/base.css'
import './assets/css/iconfont/iconfont.css'
import {LoadingPlugin, ToastPlugin} from 'vux'
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

Vue.config.productionTip = false
// 修改title
Vue.directive('title', {
  inserted: function (el, binding) {
    if (!el.dataset.title) {
      document.title = binding.value
    } else {
      document.title = el.dataset.title
    }
  }
})
// 修改body颜色
Vue.directive('bodyColor', {
  inserted: function (el, binding) {
    document.body.style.backgroundColor = binding.value
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
