<template>
  <div id="app">
    <TheNavbar />
    <TheMenuBar />
    <InvoiceList />
  </div>
</template>

<script>
import TheNavbar from './components/layout/TheNavbar.vue'
import TheMenuBar from './components/layout/TheMenuBar.vue'
import InvoiceList from './pages/InvoiceList.vue'

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
