<template>
  <header>
    <nav class="c-nav d-flex justify-content-between">
      <router-link to="/">
        <div
          class="logo-container d-flex align-items-center justify-content-center center-container"
        >
          <Logo />
        </div>
      </router-link>
      <div class="d-flex align-items-center">
        <ThemeToggleButton :mode="themeMode" @toggle-theme="toggleTheme" />
        <div class="custom-vertical-line"></div>
        <img
          src="../../assets/image-avatar.jpg"
          class="rounded-circle m-3 mx-4"
          width="30"
          height="30"
          alt="User Profile"
        />
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from '@/components/icons/Logo.vue'
import ThemeToggleButton from '@/components/UI/ThemeToggleButton.vue'

export default {
  name: 'Navbar',
  components: {
    ThemeToggleButton,
    Logo
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

<style lang="scss" scoped>
.c-nav {
  background-color: $color-black;

  .logo-container {
    background-image: radial-gradient(ellipse farthest-corner at 140% 90%, #9277ff 60%, #7c5dfa 0%);
    width: 72px;
    height: 72px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .custom-vertical-line {
    width: 1px;
    background-color: #494e6e;
    height: 100%;
    display: block;
  }
}
</style>
