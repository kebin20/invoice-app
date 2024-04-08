<template>
  <header class="link-header m-4">
    <router-link class="custom-link" to="/">Go back</router-link>
  </header>
  <BaseCard className="flex-row justify-content-between align-items-center">
    <p class="m-0">Status</p>
    <InvoiceStatus />
  </BaseCard>
  <section>
    <BaseCard>
      <header class="client-container d-flex justify-content-between mb-3">
        <h2 class="font-weight-bold">#XM9141</h2>
        <p>Graphic Design</p>
      </header>
      <main>
        <p>
          19 Union Terrace<br />
          London <br />E1 3EZ <br />United Kingdom
        </p>
        <div>
          <h3>Invoice Data</h3>
          <p>21 Aug 2021</p>
        </div>
        <div>
          <h3>Payment Due</h3>
          <p>20 Sep 2021</p>
        </div>
        <div>
          <h3>Bill To</h3>
          <p>Alex Grim</p>
          <p>84 Church Way <br />Bradford <br />BD1 9PB<br />United Kingdom</p>
        </div>
        <div>
          <h3>Sent to</h3>
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
  padding-left: 10em;

  .custom-link {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }
}
</style>
