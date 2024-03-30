<template>
  <section class="d-flex flex-column align-items-center">
    <ul class="p-0 mx-5" v-if="invoicesAvailable">
      <InvoiceCard :invoices="invoices" />
    </ul>
    <div class="d-flex flex-column align-items-center text-center mt-5">
      <img src="../assets/illustration-empty.svg" alt="No invoices" />
      <div class="p-5">
        <h1>There's nothing here</h1>
        <p class="mt-4 p-2">Create an invoice by clicking the New button and get started</p>
      </div>
    </div>
  </section>
</template>

<script>
import InvoiceCard from '../components/InvoiceCard.vue'
import axios from 'axios'

export default {
  name: 'InvoiceList',
  components: {
    InvoiceCard
  },
  created() {
    axios
      .get('https://invoice-app-b19cf-default-rtdb.asia-southeast1.firebasedatabase.app/')
      .then((response) => {
        this.invoices = response.data
        this.isLoading = false
      })
      .catch((error) => {
        alert('Unable to obtain invoice data', error)
        this.isLoading = false
      })
  },
  data() {
    return {
      invoices: [],
      isLoading: true,
      error: null
    }
  },
  computed: {
    invoicesAvailable() {
      return this.invoices.length > 0
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 700;
}
</style>
