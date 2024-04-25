<template>
  <section class="d-flex justify-content-center bg-white w-100 p-3">
    <button class="btn color-blue bg-color-gray-lighter">Edit</button>
    <button class="btn bg-color-error text-white">Delete</button>
    <button class="btn bg-color-primary text-white">Mark as Paid</button>
  </section>
  <section v-if="isItemList">
    <button>Cancel</button>
    <button>Save Changes</button>
  </section>
</template>

<script>
export default {
  name: 'TheButtonBar'
}
</script>
