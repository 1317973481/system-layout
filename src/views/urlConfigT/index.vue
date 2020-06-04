<!--  -->
<template>
  <div>环境变量：{{url}}</div>
</template>
<script>
export default {
  name: 'urlConfigT',
  data() {
    return {
      url:''
    }
  },
  components: {},
  computed: {},
  mounted: () => {},
  methods: {},
  created(){
    this.url =  process.env.NODE_ENV
      console.log(process.env)
  }
}
</script>
<style scoped>
</style>