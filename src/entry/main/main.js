import Vue from 'vue'
import App from './App.vue'
import store from '_src/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '_src/router'
import axios from '_src/lib/axios'
window.sysLoading.hide();
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype._proURL = '我是通过原型添加的全局变量'
Vue.prototype.BUS = new Vue();
Vue.prototype.$axios = axios;
const vvv = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
