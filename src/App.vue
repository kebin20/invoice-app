<template>
  <div id="app">
    <TheNavbar />
    <MenuBar />
    <InvoiceList />
  </div>
</template>

<script>
import TheNavbar from './components/layout/TheNavbar.vue'
import MenuBar from './components/MenuBar.vue'
import InvoiceList from './components/InvoiceList.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    MenuBar,
    InvoiceList
  }
}
</script>

<style scoped></style>
