<template>
  <section>
    <h1>New invoice</h1>
    <form action="">
      <h2>Bill From</h2>
      <div class="form-control">
        <label for="address">Street Address</label>
        <input type="text" id="address" name="address" v-model.trim="a" />
      </div>
      <div class="form-control">
        <label for="city">City</label>
        <input type="text" id="city" name="city" v-model.trim="a" />
      </div>
      <div class="form-control">
        <label for="postcode">Post Code</label>
        <input type="text" id="postcode" name="postcode" v-model.trim="a" />
      </div>
      <div class="form-control">
        <label for="country">Country</label>
        <input type="text" id="country" name="country" v-model.trim="a" />
      </div>
      <h2>Bill To</h2>
      <div class="form-control">
        <label for="name">Client's Name</label>
        <input type="text" id="name" name="name" v-model.trim="a" />
      </div>
      <div class="form-control">
        <label for="client-address">Street Address</label>
        <input type="text" id="client-address" name="client-address" v-model.trim="a" />
      </div>
      <div class="form-control">
        <label for="client-city">City</label>
        <input type="text" id="client-city" name="client-city" v-model.trim="a" />
      </div>
      <div class="form-control">
        <label for="client-postcode">Post Code</label>
        <input type="text" id="client-postcode" name="client-postcode" v-model.trim="a" />
      </div>
      <div class="form-control">
        <label for="client-country">Country</label>
        <input type="text" id="client-country" name="client-country" v-model.trim="a" />
      </div>
      <div class="form-control">
        <label for="invoice-date">Invoice Date</label>
        <input type="date" name="invoice-date" id="invoice-date" />
      </div>
      <div class="form-control">
        <label for="payment-terms">Payment Terms</label>
        <select name="payment-terms" id="payment-terms">
          <option value="30">Net 30 Days</option>
        </select>
      </div>
      <div class="form-control">
        <label for="project">Project Description</label>
        <input type="text" id="project" name="project" v-model.trim="a" />
      </div>
    </form>
  </section>
</template>

<script></script>

<style lang="scss" scoped></style>
