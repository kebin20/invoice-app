<template>
  <div id="app">
    <TheNavbar />
    <MenuBar />
  </div>
</template>

<script>
import TheNavbar from './components/layout/TheNavbar.vue'
import MenuBar from './components/MenuBar.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    MenuBar
  }
}
</script>

<style scoped></style>
