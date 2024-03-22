<template>
  <li v-for="invoice of invoices" :key="invoice.id">
    <BaseCard>
      <header>
        <div>
          <h3>{{ invoice.id }}</h3>
          <p>{{ invoice.clientName }}</p>
        </div>
        <div>
          <div>
            <p>{{ formatDate(invoice.paymentDue) }}</p>
            <div v-for="item of invoice.items">
              <p>{{ formatCurrency(item.total) }}</p>
            </div>
          </div>
          <div class="payment-status">- {{ invoice.status }}</div>
        </div>
      </header>
    </BaseCard>
  </li>
</template>

<script>
export default {
  name: 'InvoiceCard',
  props: {
    invoices: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString()
    },
    formatCurrency(amount) {
      return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
  }
}
</script>
