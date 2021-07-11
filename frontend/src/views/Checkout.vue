<template>
  <div class="checkout">
    <Header />
    <div class="container">
      <div class="checkout">
        <form>
          <input type="email" v-model="order_details.email" placeholder="E-Mail Adresse" />
          <input
            type="text"
            v-model="order_details.firstName"
            placeholder="Vorname"
          /> 
          <input
            type="text"
            v-model="order_details.lastName"
            placeholder="Nachname"
          /> 
          <input
            type="text"
            v-model="order_details.street"
            placeholder="Straße und Hausnummer"
          /> 
          <input
            type="text"
            v-model="order_details.extraAdress"
            placeholder="Zusätzliche Adressangaben"
          /> 
          <input
            type="text"
            v-model="order_details.zip"
            placeholder="Postleitzahl"
          /> 
          <input
            type="text"
            v-model="order_details.city"
            placeholder="Stadt"
          /> 
          <input
            type="text"
            v-model="order_details.country"
            placeholder="Land"
          /> 
          <div class="flex-container">
            <button class="package" @click="checkout">
              Weiter zum Versand
            </button>
          </div>
        </form>
      </div>
      <div class="warenkorb">
        <div class="cart_block">
        <Cartitem
          v-for="(item, index) in cart"
          :key="'item' + index"
          :item="item.product"
          :object="item"
          :quantity="item.quantity"
          :selectedSize="item.selectedSize"
        />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Cartitem from "../components/CartItem.vue";

export default {
  name: "Checkout",
  components: {
    Header,
    Cartitem
  },
  data() {
    return {
      order_details: {
        email: "",
        firstName: "",
        lastName: "",
        street: "",
        extraAdress: "",
        zip: "",
        city: "",
        country: ""
      },
    };
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    order() {
      let products = [];

      for (let index = 0; index < this.cart.length; index++) {
        const element = this.cart[index];
        const product = {
          "p_v_id": 1,
          "name":element.product.name,
          "color": element.product.color,
          "price": element.product.price,
          "quantity": element.quantity
        }
        products.push(product);
      }
      return products;
    }
  },
  methods: {
    async checkout(e) {
      e.preventDefault();
      console.log(this.order)

      await this.$store.dispatch("checkout", this.order);

    },
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
}

.container form {
  display: flex;
  flex-direction: column;
}

</style>
