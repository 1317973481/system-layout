import Vue from 'vue'
import VueRouter from 'vue-router'
import menuList from '@@@@/layout/menuList'
Vue.use(VueRouter);
let addRoutesList = [];
function arrFlat(item) {
  if (item.type != 'parent') {
    addRoutesList.push({
      path: item.path,
      component: resolve => require([`@@@@/views/${item.name}`], resolve),
      name: item.name,
      title: item.label,
      id: item.id,
      isShow:item.isShow
    })
  }
  if (item.children && item.children.length > 0) {
    for (let ikey of item.children) {
      arrFlat(ikey);
    }
  }
}
for (let key of menuList) {
  arrFlat(key);
}
const router = new VueRouter({
  routes:addRoutesList
})
router.beforeEach((to, from, next) => {
  router.addRoutes(addRoutesList)
  next();
})
export default router
