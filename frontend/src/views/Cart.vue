<template>
  <div class="cart">
    <Header />
    <div class="container">
        <p class="headline">Dein Warenkorb</p>
        <div class="cart_block">
          <Cartitem v-for="(item, index) in cart" :key="'item' + index" :item="item.product" :object="item"  :quantity="item.quantity" :selectedSize="item.selectedSize" />
        </div>
    </div>
    <div class="checkout">
      <div class="top">
        <p class="ges">Gesamt</p>
        <p class="price">€{{ totalPrice() }}</p>
      </div>
      <p class="versand">Versand wird im Checkout kalkuliert</p>
      <router-link :to="{ name: 'Checkout' }">
        <button>Checkout</button>
      </router-link>
    </div>
  </div>
</template>

<script>

import Header from "../components/Header";
import Cartitem from "../components/CartItem.vue";

export default {
  name: "cart",
  components: {
    Header,
    Cartitem,
  },
  computed: {
    cart() {
     
      return this.$store.getters.cart;
    },
  },
  methods: {
    totalPrice(){
      let items = this.$store.getters.cart;
      let total = 0.0;
      for(let i = 0; i < items.length; i++){
        total += items[i].product.price * items[i].quantity;
      }
      return total;
    }
  }
};
</script>

<style lang="scss" scoped>




  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    
  }

  .cart{
    min-height: 800px;
  }

  .container{
    position: absolute;
    width: 400px;
    top: 150px;
    left: 50%;
    transform: translate(-50%,0%);
    p{
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 20px;
    }
  }

  .checkout{
    position: absolute;
    top: 50%;
    right: 70px;
    transform: translate(0%,-50%);
    p{
      margin: 0px;
    }
    button{
      width: 100%;
      background-color: black;
      appearance: none;
      border: none;
      height: 40px;
      color: white;
      margin-top: 10px;
      font-size: 16px;
    }
  }

  .ges{
    float: left;
    font-weight: 700;
  }

  .price{
    float: right;
    font-size: 16px;
  }

  .top{
    width: 100%;
    margin-bottom: 5px;
    display: inline-block;
  }

  .versand{
    margin-bottom: 5px!important;
    font-size: 14px;
  }

  .cart_block{
    height: calc(100vh - 240px);
    overflow: -moz-scrollbars-vertical; 
    overflow-y: scroll;
  }


@media only screen and (max-width: 1150px){

  .container{
    position: absolute;
    width: 400px;
    top: 150px;
    left: 70px;
    transform: translate(0%,0%);
    
  }

}

@media only screen and (max-width: 830px){

   .cart_block{
     height: auto;
     max-height: calc(100vh - 440px);
  }

  .container{
    position: relative;
    display: inline-block;
    margin-top: 150px;
    margin-left: 70px;
    width: calc(100vw - 140px);
    top: auto;
    left: auto;
    transform: translate(0%,0%);
  }

  .checkout{
    position: relative;
    display: inline-block;
    top: auto;
    right: auto;
    transform: translate(0%,0%);
    margin-top: 0px;
    margin-left: 70px;
    margin-right: 70px;
    margin-bottom: 100px;
    width: calc(100vw - 140px);
  }

}

@media only screen and (max-width: 600px){

  .cart_block{
     height: auto;
     max-height: none;
  }

  .container{
    width: calc(100vw - 40px);
    margin-top: 70px;
    margin-left: 20px;
  }

  .checkout{
    margin-top: 0px;
    margin-left: 20px;
    margin-right: 0px;
    width: calc(100% - 40px);
    margin-bottom: 100px;
  }
}

</style>
