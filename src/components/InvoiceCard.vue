<template>
  <li v-for="invoice of invoices" :key="invoice.id">
    <BaseCard>
      <router-link class="router-link-class" to="/invoices/RT3080">
        <header class="client-container d-flex justify-content-between mb-3">
          <p class="fw-bold">#{{ invoice.id }}</p>
          <p class="color-blue">{{ invoice.clientName }}</p>
        </header>
        <div class="status-container d-flex justify-content-between">
          <div>
            <p class="color-blue text-nowrap">Due {{ formatDate(invoice.paymentDue) }}</p>
            <p class="fw-bold mb-0">{{ formatCurrency(invoice.total) }}</p>
          </div>
          <InvoiceStatus :status="invoice.status" />
        </div>
      </router-link>
    </BaseCard>
  </li>
</template>

<script>
import InvoiceStatus from '../components/UI/InvoiceStatus.vue'

export default {
  name: 'InvoiceCard',
  components: {
    InvoiceStatus
  },
  props: {
    invoices: {
      type: Array,
      required: true
    }
  },
  computed: {},
  methods: {
    formatDate(dateString) {
      const options = { day: '2-digit', month: 'short', year: 'numeric' }
      const date = new Date(dateString)
      return date.toLocaleDateString('en-GB', options)
    },
    formatCurrency(amount) {
      return amount.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })
    }
  }
}
</script>

<style lang="scss" scoped>
.client-container {
  gap: 5em;

  .invoice-id {
    font-weight: bold;
  }
}
.status-container {
  gap: 5em;
}

.router-link-class {
  text-decoration: none;
  color: inherit;
}
</style>
