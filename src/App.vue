<template>
  <div id="app">
    <TheNavbar />
    <TheMenuBar />
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/layout/TheNavbar.vue'
import TheMenuBar from './components/layout/TheMenuBar.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheMenuBar
  }
}
</script>

<style lang="scss">
html,
body,
section {
  background-color: #f8f8fb;
}

li,
ul {
  list-style: none;
}

.custom-link {
  text-decoration: none;
}
</style>
