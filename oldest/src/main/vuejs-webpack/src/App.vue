<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import {store} from '@stores'
export default {
  dependencies: ['$log'],
  name: 'app',
  created: function () {
    this.$log.debug('App.vue initialized!!!')
    store.dispatch('setPerson', {firstName: 'Peeter', lastName: 'Esimene'})
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
