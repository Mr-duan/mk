// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/** 自定义的主题 */
import '../theme/index.css'
import ElementUI from 'element-ui'
/** 默认主题 */
// import 'element-ui/lib/theme-default/index.css'

import CircleMenu from 'vue-circle-menu'
Vue.component('CircleMenu', CircleMenu)

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
