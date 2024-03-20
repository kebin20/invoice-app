<template>
  <section class="d-flex m-4">
    <div class="d-flex flex-column">
      <h1 class="heading-large">Invoices</h1>
      <p>7 Invoices</p>
    </div>
    <div class="d-flex">
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
  & .heading-large {
    font-family: $font-primary;
    font-weight: bold;
    font-size: $heading-l-size;
    line-height: $heading-l-line-height;
    letter-spacing: $heading-l-spacing;
  }
}
</style>
