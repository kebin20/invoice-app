<template>
  <button class="btn btn-sm" @click="toggleTheme">
    <i>
      <DarkModeIcon />
    </i>
  </button>
</template>

<script>
import DarkModeIcon from './icons/DarkModeIcon.vue'
import LightModeIcon from './icons/LightModeIcon.vue'

export default {
  name: 'ThemeToggleButton',
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
