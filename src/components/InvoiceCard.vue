<template>
  <li>
    <BaseCard>
      <header>
        <div>
          <h3>{{ InvoiceID }}</h3>
          <p>{{ recipientName }}</p>
        </div>
        <div>
          <div>
            <p>{{ DueDate }}</p>
            <p>{{ TotalPrice }}</p>
          </div>
          <div class="payment-status">- {{ paymentStatus }}</div>
        </div>
      </header>
    </BaseCard>
  </li>
</template>

<script>
export default {
  name: 'InvoiceCard',
  props: {
    InvoiceID: String,
    recipientName: String,
    DueDate: Date,
    TotalPrice: Number,
    paymentStatus: String
  }
}
</script>
