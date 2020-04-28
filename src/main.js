import Vue from 'vue'
import App from './App.vue'
import { router, routes } from './router'
import store from './store'
Vue.config.productionTip = false
Vue.prototype._proURL = '我是通过原型添加的全局变量'
Vue.prototype.BUS = new Vue();
console.log(routes)
console.log(window.APP_STATE)
const vvv = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
