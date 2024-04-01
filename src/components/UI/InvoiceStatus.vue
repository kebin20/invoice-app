<template>
  <ul class="font-weight-bold p-0">
    <li :class="['invoice-status', invoiceStatusClass(status)]">
      {{ capitalizeStatus(status) }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'InvoiceCard',
  props: {
    status: {
      type: String,
      required: true
    }
  },
  computed: {
    invoiceStatusClass() {
      return function (status) {
        let statusClass
        switch (status) {
          case 'paid':
            statusClass = '-paid'
            break
          case 'pending':
            statusClass = '-pending'
            break
          case 'draft':
            statusClass = '-draft'
            break
          default:
            statusClass = ''
        }
        return 'invoice-status' + statusClass
      }
    }
  },
  methods: {
    capitalizeStatus(status) {
      return status.charAt(0).toUpperCase() + status.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped></style>
