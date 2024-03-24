<template>
  <section class="d-flex flex-column align-items-center">
    <ul class="p-0 mx-5">
      <InvoiceCard :invoices="invoices" />
    </ul>
  </section>
</template>

<script>
import InvoiceCard from './InvoiceCard.vue'
import INVOICE_DATA from '../../data.json'

export default {
  name: 'Invoice List',
  components: {
    InvoiceCard
  },
  data() {
    return {
      invoices: INVOICE_DATA
    }
  }
}
</script>
