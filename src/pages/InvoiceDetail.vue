<template>
  <BaseHeader />
  <BaseCard className="flex-row justify-content-between align-items-center mx-3">
    <p class="m-0 color-gray-light">Status</p>
    <InvoiceStatus />
  </BaseCard>
  <section class="mx-3">
    <BaseCard className="flex-column">
      <header class="d-flex flex-column">
        <h2 class="fw-bold fs-base">#XM9141</h2>
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
              <p class="fw-bold color-dark-black">21 Aug 2021</p>
            </div>
            <div>
              <p>Payment Due</p>
              <p class="fw-bold color-dark-black">20 Sep 2021</p>
            </div>
          </div>
          <div>
            <p>Bill To</p>
            <p class="fw-bold color-dark-black">Alex Grim</p>
            <p class="lh-base">84 Church Way <br />Bradford <br />BD1 9PB<br />United Kingdom</p>
          </div>
        </div>
        <div>
          <p>Sent to</p>
          <p class="fw-bold color-dark-black">alexgrim@mail.com</p>
        </div>
      </main>
      <template v-slot:footer>
        <div class="rounded-top rounded-8 mx-2 mt-4 d-flex flex-column bg-color-gray-lighter">
          <div class="d-flex align-items-center justify-content-between gap-5 px-4 pt-4">
            <div>
              <p class="fw-bold color-dark-black">Banner Design</p>
              <p>1 x $ 156.00</p>
            </div>
            <p class="fw-bold color-dark-black">$156.00</p>
          </div>
          <div class="d-flex align-items-center justify-content-between gap-5 px-4">
            <div>
              <p class="fw-bold color-dark-black">Email Design</p>
              <p>2 x $ 200.00</p>
            </div>
            <p class="fw-bold color-dark-black">$400.00</p>
          </div>
          <div
            class="d-flex justify-content-between align-items-center w-100 gap-5 bg-color-black rounded-bottom rounded-8 p-3 py-4"
          >
            <p class="text-white mb-0">Grand Total</p>
            <p class="text-white heading-m fw-bold mb-0">$556.00</p>
          </div>
        </div>
      </template>
    </BaseCard>
  </section>
  <TheButtonBar />
</template>

<script>
import InvoiceStatus from '@/components/UI/InvoiceStatus.vue'
import TheButtonBar from '@/components/layout/TheButtonBar.vue'
import BaseHeader from '@/components/UI/BaseHeader.vue'

export default {
  name: 'InvoiceDetail',
  components: {
    InvoiceStatus,
    TheButtonBar,
    BaseHeader
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
