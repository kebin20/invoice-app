<template>
  <button class="btn btn-small" @click="toggleTheme">
    <DarkModeIcon />
  </button>
</template>

<script>
import DarkModeIcon from '@/components/icons/DarkModeIcon.vue'
// import LightModeIcon from './icons/LightModeIcon.vue'

export default {
  name: 'ThemeToggleButton',
  components: {
    DarkModeIcon
  },
  props: {
    mode: String
  },
  methods: {
    toggleTheme() {
      this.$emit('toggle-theme')
    }
  }
}
</script>

<style></style>
