<template>
  <div id="app">
    <TheNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/layout/TheNavbar.vue'

export default {
  name: 'App',
  components: {
    TheNavbar
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
