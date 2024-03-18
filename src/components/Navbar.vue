<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <div class="bg-dark">
        <Logo />
      </div>
    </a>
    <div class="d-flex gap-4">
      <ThemeToggleButton :mode="themeMode" @toggle-theme="toggleTheme" />
      <img
        src="../assets/image-avatar.jpg"
        class="rounded-circle"
        width="30"
        height="30"
        alt="User Profile"
      />
    </div>
  </nav>
</template>

<script>
import Logo from '@/components/icons/Logo.vue'
import ThemeToggleButton from '@/components/ThemeToggleButton.vue'

export default {
  name: 'Navbar',
  components: {
    ThemeToggleButton
  },
  data() {
    return {
      themeMode: 'dark'
    }
  },
  methods: {
    toggleTheme() {
      this.themeMode = this.themeMode === 'dark' ? 'light' : 'dark'
    }
  }
}
</script>

<style></style>
