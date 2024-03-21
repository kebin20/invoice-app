<template>
  <ul>
    <InvoiceCard />
  </ul>
</template>

<script>
import InvoiceCard from './InvoiceCard.vue'

export default {
  name: 'Invoice List',
  components: {
    InvoiceCard
  }
}
</script>
