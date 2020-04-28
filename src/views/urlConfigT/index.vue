<!--  -->
<template>
  <div>环境变量：{{url}}</div>
</template>
<script>
import urlConfig from '../../api/urlConfig.js'
export default {
  name: 'urlConfigT',
  data() {
    return {
        url:urlConfig.baseUrl 
    }
  },
  components: {},
  computed: {},
  mounted: () => {},
  methods: {},
  created(){
      console.log(process.env)
      console.log(urlConfig)
  }
}
</script>
<style scoped>
</style>