<template>
  <div class="checkout">
    <Header />
    <div class="container">
      <div class="checkout">
        <p class="total">Total: €{{ totalPrice() }}</p>
        <div v-for="(item, index) in cart" :key="'item' + index" :item="item.product">
          <p class="price">{{ item.product.name }} | {{ item.selectedSize}} | €{{ item.product.price }} | {{item.quantity}}x</p>
        </div>
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
        
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import { mapState } from 'vuex';
//import Cartitem from "../components/CartItem.vue";

export default {
  name: "Checkout",
  components: {
    Header,
    //Cartitem
  },
   mounted(){
    //this.$store.dispatch("loadUsers");
    this.$store.dispatch("loadCurrentUser")
    if(this.currentUser.account_data != undefined){
      this.login = true;
    }
    this.order_details.firstName = this.currentUser.account_data.firstName;
    this.order_details.lastName = this.currentUser.account_data.lastName;
    this.order_details.email = this.currentUser.account_data.email;
    
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
      products: [],
      login: false,
    };
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    ...mapState(['users']),
    ...mapState(['currentUser'])
  },
  methods: {
    async checkout(e) {
      e.preventDefault();

      for (let index = 0; index < this.cart.length; index++) {
        const element = this.cart[index];
        const product = {
          "p_v_id": element.product.stock[0].p_v_id,
          "name":element.product.name,
          "color": element.product.color,
          "price": element.product.price,
          "quantity": element.quantity
        }
        this.products.push(product);
      }
      
      const order = {
        "cart": 
        this.products
      }
      console.log(order)
      await this.$store.dispatch("checkout", order);

    },
    totalPrice(){
      let items = this.$store.getters.cart;
      let total = 0.0;
      for(let i = 0; i < items.length; i++){
        total += items[i].product.price * items[i].quantity;
      }
      return total;
    }
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translate(-50%,0%);
  width: 500px;
  max-width: calc(100vw - 40px);
}

input{
    padding: 10px;
    border: 2px solid black;
    width: calc(100% - 24px);
    font-size: 14px;
    margin-bottom: 20px;
  }

  button{
    appearance: none;
    color: white;
    background-color: black;
    padding: 10px;
    border: 2px solid black;
    width: 100%;
    font-weight: 700;
    font-size: 14px;
    margin-top: 20px;
    cursor: pointer;
    margin-bottom: 100px;
  }

</style>
