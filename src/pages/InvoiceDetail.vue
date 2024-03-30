<template>
  <a href="">Go back</a>
  <BaseCard>
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
  name: 'InvoiceDetail'
}
</script>
