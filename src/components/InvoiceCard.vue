<template>
  <li v-for="invoice of invoices" :key="invoice.id">
    <BaseCard>
      <header class="client-container d-flex justify-content-between mb-3">
        <p class="font-weight-bold">#{{ invoice.id }}</p>
        <p class="color-blue">{{ invoice.clientName }}</p>
      </header>
      <div class="status-container d-flex justify-content-between">
        <div>
          <p class="color-blue text-nowrap">Due {{ formatDate(invoice.paymentDue) }}</p>
          <p class="font-weight-bold mb-0">{{ formatCurrency(invoice.total) }}</p>
        </div>
        <!-- <ul class="font-weight-bold p-0">
          <li :class="['invoice-status', invoiceStatusClass(invoice.status)]">
            {{ capitalizeStatus(invoice.status) }}
          </li>
        </ul> -->
      </div>
    </BaseCard>
  </li>
</template>

<script>
import InvoiceStatus from './UI/InvoiceStatus.vue'

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
  // computed: {
  //   invoiceStatusClass() {
  //     return function (status) {
  //       let statusClass
  //       switch (status) {
  //         case 'paid':
  //           statusClass = '-paid'
  //           break
  //         case 'pending':
  //           statusClass = '-pending'
  //           break
  //         case 'draft':
  //           statusClass = '-draft'
  //           break
  //         default:
  //           statusClass = ''
  //       }
  //       return 'invoice-status' + statusClass
  //     }
  //   }
  // },
  methods: {
    formatDate(dateString) {
      const options = { day: '2-digit', month: 'short', year: 'numeric' }
      const date = new Date(dateString)
      return date.toLocaleDateString('en-GB', options)
    },
    formatCurrency(amount) {
      return amount.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })
    },
    capitalizeStatus(status) {
      return status.charAt(0).toUpperCase() + status.slice(1)
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
</style>
