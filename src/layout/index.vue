<!--  -->
<template>
  <div class="main">
    <div class="layout-left">
      <el-row class="menu-left" ref="menuLeft">
        <el-col>
          <el-menu
            default-active="2"
            class="menu-left-box"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu v-for="item in menuList" :key="item.id" :index="item.id">
              <template slot="title" v-if="item.type == 'parent'">
                <i class="el-icon-location"></i>
                <span>{{item.label}}</span>
              </template>
              <el-menu-item-group v-for="citem in item.children" :key="citem.id">
                <el-menu-item :index="citem.id" @click="menuClick(citem)">{{citem.label}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="layout-right">
        <div class="layout-top">
        <el-tag
            v-for="tag in tabList"
            :key="tag.name"
            :closable = "tag.name != 'home'"
            size="small"
            :effect="tag.active ? 'dark' : 'plain'"
            :type="tag.type"
            @close="tabClose(tag)"
            @click="tabClick(tag)"
        >{{tag.name}}</el-tag>
        </div>
        <div class="layout-content">
            <slot name="main"></slot>
        </div>

    </div>
  </div>
</template>
<script>
import menuList from '@@@@/layout/menuList'
import pako from 'pako'
export default {
  name: "layout",
  data() {
    return {
      menuList,
      // tabList: [{ id:'1',name: "首页", type: "",path:'/',active:true }]
    };
  },
  components: {},
  created() {
    this.$nextTick(() => {
      // this.$refs.menuLeft.$el.style.height = document.body.clientHeight + 'px'
      document.querySelector(".menu-left-box").style.height =
        window.innerHeight - 10 + "px";
        this.$router.push({
          path:'/'
        })
    });
  },
  computed: {
    tabList(){
      return this.$store.getters.getTabList;
    }
  },
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    menuClick(item) {
      if(item.id == this.$store.getters.getActiveTabid) return;
      this.$store.commit('setTabList',this.$store.getters.getTabList.map((t)=>{
        t.active = false
        return t; 
      }))
      if(!this.$store.getters.getTabList.find((tag)=>tag.id == item.id)){
          this.$store.commit('addTab',{
              id:item.id,
              path:item.path,
              name:item.name,
              active:true
          })
          this.$store.commit('setActiveTabid',item.id)
      }else{
        this.$store.commit('setTabList',this.$store.getters.getTabList.map((t)=>{
            if(t.id == item.id){
                t.active = true
            }
            return t;
        }))
      }
      this.$router.push({
          path:item.path
      })
    },
    tabClose(tag){
        console.log(tag)
    },
    tabClick(tag){
      this.$store.commit('setTabList',this.$store.getters.getTabList.map((t)=>{
            if(t.id == tag.id){
                t.active = true
            }else{
                t.active = false;
            }
            return t;
        }))
        this.$store.commit('setActiveTabid',tag.id)
        this.$router.push({
          path:tag.path
        })
    },
    appendRouter(menu){
      this.$router.addRoutes(menu)
    }
  }
};
</script>
<style scoped>
.main {
  display: flex;
}
.layout-left {
  display: inline-flex;
  width: 200px;
}
.layout-right {
  display: inline-flex;
  width:calc(100% - 200px);
  flex-direction: column;
}
.layout-top {
  width: 100%;
  height: 30px;
  padding: 2px;
  cursor: pointer;
}
.layout-top >>> .el-tag {
  margin-right: 8px;
}
.menu-left {
  width: 100%;
}
.layout-content{
    width: 100%;
    height:calc(100vh - 30px)
}
</style>