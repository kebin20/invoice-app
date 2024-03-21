<template>
  <section class="d-flex justify-content-between align-items-center">
    <div class="d-flex flex-column">
      <h1 class="heading-m text-left">Invoices</h1>
      <p>7 Invoices</p>
    </div>
    <div class="d-flex align-items-center gap-3">
      <div class="filter d-flex align-items-center gap-2">
        <p class="filter-text">Filter</p>
        <ArrowDownIcon />
      </div>
      <NewInvoiceButton />
    </div>
  </section>
</template>

<script>
import NewInvoiceButton from '@/components/UI/NewInvoiceButton.vue'
import ArrowDownIcon from './icons/ArrowDownIcon.vue'

export default {
  name: 'MenuBar',
  components: {
    NewInvoiceButton,
    ArrowDownIcon
  }
}
</script>

<style lang="scss" scoped>
section {
  margin: 2em 1.4em;
  .filter {
    font-weight: 700;
    &-text {
      margin: 0;
    }
  }
}
</style>
