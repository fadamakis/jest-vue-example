<template>
  <div id="app">
    <ProgressBar />
    <Auth :authorized='true' />
    <ItemList />
    <Counter />
  </div>
</template>

<script>
import Auth from './components/Auth/Auth.vue'
import ItemList from './components/ItemList/ItemList.vue'
import ProgressBar from './components/timers/ProgressBar.vue'
import Counter from './components/events/counter.vue'

export default {
  name: 'app',
  components: {
    ItemList,
    Auth,
    ProgressBar,
    Counter
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
