<template>
  <section>
    <BaseHeader />
    <h1>New invoice</h1>
    <InvoiceForm />
  </section>
</template>

<script>
import InvoiceForm from '@/components/InvoiceForm.vue'
import BaseHeader from '@/components/UI/BaseHeader.vue'

export default {
  name: 'CreateInvoice',
  components: { InvoiceForm, BaseHeader }
}
</script>

<style lang="scss" scoped></style>
