<template>
  <section>
    <h1>New invoice</h1>
    <form @submit.prevent="submitInvoice">
      <h2>Bill From</h2>
      <div class="form-control">
        <label for="address">Street Address</label>
        <input type="text" id="address" name="address" v-model.trim="street" />
      </div>
      <div class="form-control">
        <label for="city">City</label>
        <input type="text" id="city" name="city" v-model.trim="city" />
      </div>
      <div class="form-control">
        <label for="postcode">Post Code</label>
        <input type="text" id="postcode" name="postcode" v-model.trim="postCode" />
      </div>
      <div class="form-control">
        <label for="country">Country</label>
        <input type="text" id="country" name="country" v-model.trim="country" />
      </div>

      <h2>Bill To</h2>
      <div class="form-control">
        <label for="name">Client's Name</label>
        <input type="text" id="name" name="name" v-model.trim="clientName" />
      </div>
      <div class="form-control">
        <label for="client-address">Street Address</label>
        <input type="text" id="client-address" name="client-address" v-model.trim="clientStreet" />
      </div>
      <div class="form-control">
        <label for="client-city">City</label>
        <input type="text" id="client-city" name="client-city" v-model.trim="clientCity" />
      </div>
      <div class="form-control">
        <label for="client-postcode">Post Code</label>
        <input
          type="text"
          id="client-postcode"
          name="client-postcode"
          v-model.trim="clientPostCode"
        />
      </div>
      <div class="form-control">
        <label for="client-country">Country</label>
        <input type="text" id="client-country" name="client-country" v-model.trim="clientCountry" />
      </div>
      <div class="form-control">
        <label for="invoice-date">Invoice Date</label>
        <input type="date" name="invoice-date" id="invoice-date" v-model="invoiceDate" />
      </div>
      <div class="form-control">
        <label for="payment-terms">Payment Terms</label>
        <select name="payment-terms" id="payment-terms" v-model="paymentTerms">
          <option value="30">Net 30 Days</option>
        </select>
      </div>
      <div class="form-control">
        <label for="project">Project Description</label>
        <input type="text" id="project" name="project" v-model.trim="description" />
      </div>

      <section>
        <h2>Item List</h2>
        <div class="form-control">
          <label for="item-name">Item Name</label>
          <input type="text" id="item-name" name="item-name" v-model.trim="itemName" />
        </div>
        <div class="form-control">
          <label for="quantity">Qty.</label>
          <input type="number" id="quantity" name="quantity" v-model="itemQuantity" />
        </div>
        <div class="form-control">
          <label for="price">Price</label>
          <input type="number" id="price" name="price" v-model="itemPrice" />
        </div>
        <div class="form-control">
          <label for="total">Total</label>
          <input type="number" id="total" name="total" v-model="itemTotal" />
        </div>
        <button type="button" @click="addItemToList">Add Item</button>
        <button type="button" @click="removeItemFromList">Remove Item</button>
      </section>
      <p v-if="invalidInput">
        One or more input fields are invalid. Please check that you have provided the correct
        information
      </p>
      <p v-if="error">{{ error }}</p>
    </form>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      error: null,
      invalidInput: false,
      street: '',
      city: '',
      postCode: '',
      country: '',
      clientName: '',
      clientStreet: '',
      clientCity: '',
      clientPostCode: '',
      clientCountry: '',
      invoiceDate: '',
      paymentTerms: '30',
      description: '',
      itemList: []
    }
  },
  methods: {
    submitInvoice() {
      this.error = null
      const newInvoice = {
        clientName: this.clientName,
        description: this.description,
        paymentDue: this.invoiceDate,
        senderAddress: {
          clientStreet: this.clientStreet,
          clientCity: this.clientCity,
          clientPostCode: this.clientPostCode,
          clientCountry: this.clientCountry
        },
        itemList: this.itemList
      }

      axios
        .post('https://invoice-app-b19cf-default-rtdb.asia-southeast1.firebasedatabase.app/', {
          newInvoice
        })
        .then(() => {
          alert('Invoice created!')
        })
        .catch((error) => {
          alert(error)
          this.error = error.message
        })
    },
    addItemToList() {
      const newItem = {
        name: this.itemName,
        quantity: this.itemQuantity,
        price: this.itemPrice,
        total: this.itemTotal
      }
      this.itemList.push(newItem)
    },
    removeItemFromList(index) {
      this.itemList.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped></style>
