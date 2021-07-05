<template>
  <div class="shop">
    <div class="lds-ellipsis" v-if="loading"><div></div><div></div><div></div><div></div></div>
    <Header />
    <div class="container">
      <Product
        v-for="(item, index) in items"
        :key="'item' + index"
        :list="item"
      />
      <ul>
        <li v-for="item in items" :key="item.id">
          
          {{item.image[0]}}
          
        </li>
      </ul>
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
  mounted() {
      this.loadProducts()
  },
  data() {
    return{
       loading: false,
       items: []
    }
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    async loadProducts(){
      this.loading = true;
      let apiUrl = 'http://localhost:4000/api/products/get_all_products';
      console.log("loaded");
      try{
        let response = await this.axios.get(apiUrl);
        this.items = response.data;
        this.loading = false;
        console.log(response.data[0].name);
      } catch (e) {
        console.error(e);
      }
    }
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

.lds-ellipsis {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: black;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
