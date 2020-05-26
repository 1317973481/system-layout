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
let routes = [{
    id:'404',
    path:'/nofound',
    label:'网页找不到',
    name:'nofound',
    component:()=>import('@@@@/views/nofound')
  },{
    id:'1',
    path:'/',
    label:'首页',
    name:'home',
    component:()=>import('@@@@/views/home')}
  ]
const router = new VueRouter({
  routes:[...addRoutesList,...routes]
})
window.hasAddRouter = false;
router.beforeEach((to, from, next) => {
  // if(window.sessionStorage.router){
  //   router.addRoutes(JSON.parse(window.sessionStorage.router))
  // }else{
  //   window.sessionStorage.router = JSON.stringify(addRoutesList)
  // }
  if(!window.hasAddRouter){
    router.addRoutes(addRoutesList);
    window.hasAddRouter =  true;
  }
  console.log(to.path)
  console.log(from.path)
  if(addRoutesList.find(item =>item.path == to.path) || to.path == '/'){
    next();
  }else if(to.path == '/nofound'){
    next()
  }else{
    next('/nofound')
  }
})
export default router
