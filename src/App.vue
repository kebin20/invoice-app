<template>
  <div id="app">
    <TheNavbar />
    <TheMenuBar />
    <InvoiceList />
  </div>
</template>

<script>
import TheNavbar from './components/layout/TheNavbar.vue'
import TheMenuBar from './components/TheMenuBar.vue'
import InvoiceList from './components/InvoiceList.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheMenuBar,
    InvoiceList
  }
}
</script>

<style scoped></style>
