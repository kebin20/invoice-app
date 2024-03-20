<template>
  <section class="d-flex justify-content-between align-items-center m-4">
    <div class="d-flex flex-column">
      <h1 class="heading-m text-left">Invoices</h1>
      <p>7 Invoices</p>
    </div>
    <div class="d-flex gap-4">
      <div>Filter</div>
      <button>+ New</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MenuBar'
}
</script>

<style lang="scss" scoped>
section {
  font-weight: 400;
}
</style>
