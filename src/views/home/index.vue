<!--  -->
<template>
  <div>
      <h2>首页</h2>
      <h2>首页</h2>
      <h2>首页</h2>
      <h2>{{data}}</h2>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      data:process.env.NODE_ENV
    }
  },
  components: {},
  computed: {},
  mounted(){
    //代理
    this.$axios({
        url: process.env.VUE_APP_PROXY_KEY+'/hills-crmbase-rest/user/queryAllSchools?',
        method: 'post',
    })
    //非代理，常规请求
    this.$axios({
        url: process.env.VUE_APP_BASE_API+'/hills-crmbase-rest/user/queryAllSchools?',
        method: 'post',
    })
  },
  methods: {}
}
</script>
<style scoped>
</style>