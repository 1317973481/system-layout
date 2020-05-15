import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:0,
    activeTabid:'1'
  },
  getters:{
    getNum:(sta)=>{
      return sta.num;
    },
    getActiveTabid:(state)=>state.activeTabid
  },
  mutations: {
    addNum(sta,par = 1){
      sta.num = sta.num+par;
    },
    setActiveTabid(state,id){
      state.activeTabid = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
