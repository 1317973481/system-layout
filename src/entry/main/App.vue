<!--  -->
<template>
  <div id="app">
    <layout>
      <template #main>
        <router-view ></router-view>
      </template>
    </layout>
  </div>
</template>
<script>
import layout from '@@@@/layout'
export default {
  name: 'app',
  data() {
    return {}
  },
  components: {layout},
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