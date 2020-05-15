import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype._proURL = '我是通过原型添加的全局变量'
Vue.prototype.BUS = new Vue();
const vvv = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
