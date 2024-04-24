<template>
  <section>
    <form @submit.prevent="submitInvoice">
      <div class="d-flex flex-column gap-2">
        <h2>Bill From</h2>
        <div>
          <label for="address">Street Address</label>
          <input
            class="form-control"
            type="text"
            id="address"
            name="address"
            v-model.trim="street"
          />
        </div>
        <div class="d-flex flex-row gap-4">
          <div>
            <label for="city">City</label>
            <input class="form-control" type="text" id="city" name="city" v-model.trim="city" />
          </div>
          <div>
            <label for="postcode">Post Code</label>
            <input
              class="form-control"
              type="text"
              id="postcode"
              name="postcode"
              v-model.trim="postCode"
            />
          </div>
        </div>
        <div>
          <label for="country">Country</label>
          <input
            class="form-control"
            type="text"
            id="country"
            name="country"
            v-model.trim="country"
          />
        </div>
      </div>

      <div class="d-flex flex-column gap-2 mt-2">
        <h2>Bill To</h2>
        <div>
          <label for="name">Client's Name</label>
          <input class="form-control" type="text" id="name" name="name" v-model.trim="clientName" />
        </div>
        <div>
          <label for="client-address">Street Address</label>
          <input
            class="form-control"
            type="text"
            id="client-address"
            name="client-address"
            v-model.trim="clientStreet"
          />
        </div>
        <div class="d-flex flex-row gap-4">
          <div>
            <label for="client-city">City</label>
            <input
              class="form-control"
              type="text"
              id="client-city"
              name="client-city"
              v-model.trim="clientCity"
            />
          </div>
          <div>
            <label for="client-postcode">Post Code</label>
            <input
              class="form-control"
              type="text"
              id="client-postcode"
              name="client-postcode"
              v-model.trim="clientPostCode"
            />
          </div>
        </div>
        <div>
          <label for="client-country">Country</label>
          <input
            class="form-control"
            type="text"
            id="client-country"
            name="client-country"
            v-model.trim="clientCountry"
          />
        </div>
        <div class="mt-2">
          <label for="invoice-date">Invoice Date</label>
          <input
            class="form-control"
            type="date"
            name="invoice-date"
            id="invoice-date"
            v-model="invoiceDate"
          />
        </div>
        <div>
          <label for="payment-terms">Payment Terms</label>
          <select
            class="form-control"
            name="payment-terms"
            id="payment-terms"
            v-model="paymentTerms"
          >
            <option value="30">Net 30 Days</option>
          </select>
        </div>
        <div>
          <label for="project">Project Description</label>
          <input
            class="form-control"
            type="text"
            id="project"
            name="project"
            v-model.trim="description"
          />
        </div>
      </div>

      <section class="item-list">
        <h2 class="color-blue fs-20-px mb-4">Item List</h2>
        <div>
          <label for="item-name">Item Name</label>
          <input
            class="form-control"
            type="text"
            id="item-name"
            name="item-name"
            v-model.trim="itemName"
          />
        </div>
        <div>
          <label for="quantity">Qty.</label>
          <input
            class="form-control"
            type="number"
            id="quantity"
            name="quantity"
            v-model="itemQuantity"
          />
        </div>
        <div>
          <label for="price">Price</label>
          <input class="form-control" type="number" id="price" name="price" v-model="itemPrice" />
        </div>
        <div>
          <label for="total">Total</label>
          <input class="form-control" type="number" id="total" name="total" v-model="itemTotal" />
        </div>
        <button type="button" @click="removeItemFromList">Remove Item</button>
      </section>
      <button type="button" @click="addItemToList">Add Item</button>
      <p v-if="invalidInput">
        One or more input fields are invalid. Please check that you have provided the correct
        information
      </p>
      <p v-if="error">{{ error }}</p>
      <div class="form-buttons">
        <button>Discard</button>
        <button>Save as Draft</button>
        <button>Save & Send</button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'InvoiceForm',
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
      itemList: [{ itemName: '', itemQuantity: '', itemPrice: '', itemTotal: '' }]
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

<style lang="scss" scoped>
h2 {
  font-size: 1rem;
  font-weight: bold;
  color: $color-primary;
  margin-top: 1.5rem;
}
label {
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  color: $color-blue;
}
input[type='text'] {
  font-weight: bold;
}
.form-control {
  border-radius: 4px;
}

.item-list {
  margin-top: 5em;
}
</style>
