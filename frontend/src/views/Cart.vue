<template>
  <div class="cart">
    <Header />
    {{ cart[0].product.name }}
    <Product v-for="(item, index) in cart" :key="'item' + index" :list="item.product" />
  </div>
</template>

<script>
import Header from "../components/Header";
import Product from "../components/Product.vue";

export default {
  name: "cart",
  components: {
    Header,
    Product,
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
  },
};
</script>

<style lang="scss" scoped></style>
