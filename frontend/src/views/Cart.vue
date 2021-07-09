<template>
  <div class="cart">
    <Header />
    <div class="container">
      <Cartitem v-for="(item, index) in cart" :key="'item' + index" :item="item.product"  :quantity="item.quantity" />
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
};
</script>

<style lang="scss" scoped>

  .container{
    position: absolute;
    width: 350px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

</style>
