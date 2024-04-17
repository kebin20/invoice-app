<template>
  <div :class="`d-flex bg-white mb-3 rounded-3 p-4 ${className}`">
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
div {
  max-width: 30rem;
}
</style>
