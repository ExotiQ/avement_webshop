<template>
  <div class="shop">
    <Header />
    <div class="container">
      <Product
        v-for="(item, index) in products"
        :key="'item' + index"
        :list="item"
      />
    </div>
    <Sidenav />
  </div>
</template>

<script>
import Header from "../components/Header";
import Sidenav from "../components/Sidenav.vue";
import Product from "../components/Product.vue";

export default {
  name: "Shop",
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  components: {
    Header,
    Sidenav,
    Product,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: inline-block;
  margin-left: 200px;
  margin-top: 140px;
  width: calc(100vw - 270px);
}
</style>
