<template>
  <ul>
    <InvoiceCard :invoices="invoices" />
  </ul>
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
