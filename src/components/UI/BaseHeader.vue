<template>
  <header class="link-header d-flex gap-4 m-4">
    <router-link to="/">
      <ArrowLeftIcon />
    </router-link>
    <router-link class="custom-link" to="/">Go Back</router-link>
  </header>
</template>

<script>
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon.vue'

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    ArrowLeftIcon
  }
}
</script>

<style lang="scss" scoped>
.link-header {
  max-width: 30rem;
  margin-left: auto;
  margin-right: auto;
  .custom-link {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }
}
</style>
