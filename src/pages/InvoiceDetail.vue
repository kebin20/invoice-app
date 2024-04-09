<template>
  <header class="link-header my-4">
    <router-link class="custom-link" to="/">Go back</router-link>
  </header>
  <BaseCard className="flex-row justify-content-between align-items-center">
    <p class="m-0 color-gray-light">Status</p>
    <InvoiceStatus />
  </BaseCard>
  <section>
    <BaseCard className="flex-column">
      <header class="d-flex flex-column">
        <h2 class="font-weight-bold">#XM9141</h2>
        <p>Graphic Design</p>
      </header>
      <main>
        <p>
          19 Union Terrace<br />
          London <br />E1 3EZ <br />United Kingdom
        </p>
        <div>
          <p>Invoice Date</p>
          <p>21 Aug 2021</p>
        </div>
        <div>
          <p>Payment Due</p>
          <p>20 Sep 2021</p>
        </div>
        <div>
          <p>Bill To</p>
          <p>Alex Grim</p>
          <p>84 Church Way <br />Bradford <br />BD1 9PB<br />United Kingdom</p>
        </div>
        <div>
          <p>Sent to</p>
          <p>alexgrim@mail.com</p>
        </div>
      </main>
      <template v-slot:footer>
        <div class="modal-footer">
          <div>
            <div>
              <p>Banner Design</p>
              <p>1 x $ 156.00</p>
            </div>
            <p>$156.00</p>
          </div>
          <div>
            <div>
              <p>Email Design</p>
              <p>2 x $ 200.00</p>
            </div>
            <p>$400.00</p>
          </div>
          <div>
            <p>Grand Total</p>
            <p>$556.00</p>
          </div>
        </div>
      </template>
    </BaseCard>
    <TheButtonBar />
  </section>
</template>

<script>
import InvoiceStatus from '../components/UI/InvoiceStatus.vue'
import TheButtonBar from '../components/layout/TheButtonBar.vue'

export default {
  name: 'InvoiceDetail',
  components: {
    InvoiceStatus,
    TheButtonBar
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
