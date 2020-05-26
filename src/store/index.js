import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:0,
    activeTabid:'1',
    // tabList:[]
    tabList:[{
      id:'1',
      path:'/',
      label:'首页',
      name:'home',
      active:true
    }]
  },
  getters:{
    getNum:(sta)=>{
      return sta.num;
    },
    getActiveTabid:(state)=>state.activeTabid,
    getTabList:(state) => state.tabList
  },
  mutations: {
    addNum(sta,par = 1){
      sta.num = sta.num+par;
    },
    setActiveTabid(state,id){
      state.activeTabid = id;
    },
    setTabList(state,tabList){
      state.tabList = tabList;
    },
    addTab(state,tab){
      state.tabList.push(tab);
    },
    removeTab(state,tabId){
      state.tabList = state.tabList.filter(item => item != tabId);
    },
  },
  actions: {
  },
  modules: {
  }
})
