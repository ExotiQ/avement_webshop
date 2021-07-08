<template>
  <div class="products">
    <Header />
    <div class="container" >
      <ProductDetails
        v-for="(item, index) in filterProduct"
        :key="'item' + index"
        :list="item"
      />
    </div>
    
  </div>
</template>

<script>
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails.vue";

export default {
  name: "Products",
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
    filterProduct() {
      return this.items.filter(
        (i) => i.id == this.$route.params.product_id
      );
    },
  },
  components: {
    Header,
    ProductDetails,
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
    },
  },
};
</script>

<style lang="scss" scoped>

.container {
  display: inline-block;
  width: calc(100vw - 120px);
  position: absolute;
  top: 50%;
  left: 60px;
  transform: translate(0, -50%);
  //background-color: #333;
}

@media only screen and (max-width: 600px){


  .container {
    width: calc(100vw - 40px);
    left: 20px;
    top: 270px;
    transform: translate(0, 0);
  }

}

</style>
