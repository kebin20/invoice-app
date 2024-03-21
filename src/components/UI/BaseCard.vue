<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard'
}
</script>

<style scoped>
div {
  background-color: white;
  margin: 1rem auto;
  max-width: 20rem;
  border-radius: 2px;
  margin: 1rem;
}
</style>
