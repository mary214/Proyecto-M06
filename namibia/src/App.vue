<template>
  <div>
    <PHeader/>
    <router-view/>
    <h1>Bienvenida a tu primer (segundo?) vue</h1>
    <router-view></router-view>
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import PHeader from './components/PHeader.vue';

export default {
  name: 'App',
  components: {
    PHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

