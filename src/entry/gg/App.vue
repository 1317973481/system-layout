<!--  -->
<template>
  <div id="app">

    <h1>{{data}}入口</h1>
    <urlConfigT></urlConfigT>

  </div>
</template>
<script>
import urlConfigT from '@@@@/views/urlConfigT'
export default {
  name: 'app',
  data() {
    return {
      data:process.env.NODE_ENV
    }
  },
  components: {urlConfigT},
  computed: {},
  mounted(){},
  methods: {},
  created(){
  }
}
</script>
<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>