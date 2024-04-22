<template>
  <header class="link-header d-flex gap-4 m-4">
    <router-link to="/">
      <ArrowLeftIcon />
    </router-link>
    <router-link class="custom-link" to="/">Go back</router-link>
  </header>
  <BaseCard className="flex-row justify-content-between align-items-center mx-3">
    <p class="m-0 color-gray-light">Status</p>
    <InvoiceStatus />
  </BaseCard>
  <section class="mx-3">
    <BaseCard className="flex-column">
      <header class="d-flex flex-column">
        <h2 class="font-weight-bold body-variant">#XM9141</h2>
        <p>Graphic Design</p>
      </header>
      <main>
        <p class="lh-base">
          19 Union Terrace<br />
          London <br />E1 3EZ <br />United Kingdom
        </p>
        <div class="d-flex gap-5 mt-4">
          <div>
            <div>
              <p>Invoice Date</p>
              <p class="font-weight-bold color-dark-black">21 Aug 2021</p>
            </div>
            <div>
              <p>Payment Due</p>
              <p class="font-weight-bold color-dark-black">20 Sep 2021</p>
            </div>
          </div>
          <div>
            <p>Bill To</p>
            <p class="font-weight-bold color-dark-black">Alex Grim</p>
            <p class="lh-base">84 Church Way <br />Bradford <br />BD1 9PB<br />United Kingdom</p>
          </div>
        </div>
        <div>
          <p>Sent to</p>
          <p class="font-weight-bold color-dark-black">alexgrim@mail.com</p>
        </div>
      </main>
      <template v-slot:footer>
        <div class="rounded-top rounded-8 mx-2 mt-4 d-flex flex-column bg-color-gray-lighter">
          <div class="d-flex align-items-center justify-content-between gap-5 px-4 pt-4">
            <div>
              <p class="font-weight-bold color-dark-black">Banner Design</p>
              <p>1 x $ 156.00</p>
            </div>
            <p class="font-weight-bold color-dark-black">$156.00</p>
          </div>
          <div class="d-flex align-items-center justify-content-between gap-5 px-4">
            <div>
              <p class="font-weight-bold color-dark-black">Email Design</p>
              <p>2 x $ 200.00</p>
            </div>
            <p class="font-weight-bold color-dark-black">$400.00</p>
          </div>
          <div
            class="d-flex justify-content-between align-items-center w-100 gap-5 bg-color-black rounded-bottom rounded-8 p-3 py-4"
          >
            <p class="text-white mb-0">Grand Total</p>
            <p class="text-white heading-m font-weight-bold mb-0">$556.00</p>
          </div>
        </div>
      </template>
    </BaseCard>
  </section>
  <TheButtonBar />
</template>

<script>
import InvoiceStatus from '../components/UI/InvoiceStatus.vue'
import TheButtonBar from '../components/layout/TheButtonBar.vue'
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon.vue'

export default {
  name: 'InvoiceDetail',
  components: {
    InvoiceStatus,
    TheButtonBar,
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

p {
  color: $color-gray-light;
}
</style>
