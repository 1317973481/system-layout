import Vue from 'vue'
import VueRouter from 'vue-router'
import menuList from '@@@@/layout/menuList'
Vue.use(VueRouter)
let routes = [
  {
    path: '/',
    component: () => import('@@@@/views/home'),
    name: 'home',
    title: '首页',
    id: '1'
  }
]
// for (let key of menuList) {
//   arrFlat(key);
// }
function arrFlat(item) {
  if (item.type != 'parent') {
    routes.push({
      path: item.path,
      component: () => import('@@@@/views/' + item.path),
      name: item.path,
      title: item.name,
      id: item.id
    })
  }
  if (item.children && item.children.length > 0) {
    for (let ikey of item.children) {
      arrFlat(ikey);
    }
  }
}
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  console.log(router)
  console.log(to)
  // if(to.path != from.path){
  //   console.log(`从${to.path}到${from.path}`)
  //   next()
  //   router.push({path:to.path,query:{id:1}});
  // }
})
export { router, routes }
