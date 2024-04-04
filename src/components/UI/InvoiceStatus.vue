<template>
  <ul class="font-weight-bold p-0">
    <li :class="['invoice-status', status ? invoiceStatusClass(status) : 'status']">
      {{ !status ? 'status' : capitalizeStatus(status) }}
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

<style lang="scss" scoped>
.invoice-status {
  list-style: inside;
  width: 110px;
  padding: 0.5em 0.8em;
  border-radius: 5px;
  text-align: center;
  text-wrap: none;

  &-pending {
    background-color: $color-orange-light;
    color: $color-orange;
  }
  &-paid {
    background-color: $color-green-light;
    color: $color-green;
  }
  &-draft {
    background-color: lightgray;
    color: $color-black;
  }
}
</style>
