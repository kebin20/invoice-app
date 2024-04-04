<template>
  <router-link to="/" class="custom-link">Go back</router-link>
  <BaseCard className="flex-row justify-content-between">
    <h1>Status</h1>
    <InvoiceStatus />
  </BaseCard>
  <section>
    <BaseCard>
      <header class="client-container d-flex justify-content-between mb-3">
        <p class="font-weight-bold">#{{ invoice.id }}</p>
        <p>{{ invoice.project }}</p>
      </header>
      <p>{{ invoice.address }}</p>
    </BaseCard>
  </section>
</template>

<script>
import InvoiceStatus from '../components/UI/InvoiceStatus.vue'

export default {
  name: 'InvoiceDetail',
  components: {
    InvoiceStatus
  }
}
</script>
