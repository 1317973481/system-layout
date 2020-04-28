import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:0
  },
  getters:{
    getNum:(sta)=>{
      return sta.num;
    }
  },
  mutations: {
    addNum(sta,par = 1){
      sta.num = sta.num+par;
    }
  },
  actions: {
  },
  modules: {
  }
})
