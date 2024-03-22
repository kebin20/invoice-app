<template>
  <div @click="closeModal"></div>
  <teleport to="body">
    <dialog open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="actions"> </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    }
  },
  methods: {
    closeModal() {
      return this.$emit('close')
    }
  }
}
</script>
