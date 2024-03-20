<template>
  <div id="app">
    <Navbar />
    <MenuBar />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import MenuBar from './components/MenuBar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    MenuBar
  }
}
</script>

<style scoped></style>
