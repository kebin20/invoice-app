<template>
  <router-link class="toggle-button" to="/invoices/new">
    <span class="slider">
      <span class="slider-text">New</span>
      <span class="plus-icon">+</span>
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'NewInvoiceButton',
  methods: {}
}
</script>

<style lang="scss" scoped>
.toggle-button {
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  .slider {
    position: relative;
    display: inline-block;
    width: 90px;
    height: 44px;
    background-color: $color-primary;
    border-radius: 24px;
    &-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%);
      color: #fff;
      font-weight: bold;
      font-size: 15px;
    }
    .plus-icon {
      position: absolute;
      top: 57%;
      right: 67%;
      transform: translateY(-50%);
      color: $color-primary;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
  .slider:before {
    content: '';
    position: absolute;
    height: 32px;
    width: 32px;
    left: 7px;
    top: 6px;
    background-color: white;
    border-radius: 50%;
  }
}
</style>
