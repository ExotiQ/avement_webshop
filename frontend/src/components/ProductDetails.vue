<template>
  <div class="product">
    <div class="container">
      <img
        class="mainimg"
        :src="require(`../resources/${mainImg}`)"
        alt=""
      />
      <div class="aside_right">
        <p class="name" >{{ list.name }}</p>
        <p class="price">€{{ list.price }}</p>
        <div class="imgcontainer">
          <img
            class="smallimg"
            v-for="images in imgFilter"
            :key="images"
            :src="require(`../resources/${images}`)"
            @click="mainImg = images"
            alt="Product Img"
          />
        </div>
        <SizeIcon
          @click.native="changeSelected(tags.size, index)" 
          v-for="(tags, index) in list.stock" 
          :key="'tags' + index" 
          :size="tags.size" 
          :selected="selectedSizeId" 
          :id="index"
        />
        <button class="addbtn" @click="addToCart()">In den Warenkorb</button>
        <p class="info">{{ list.info }}</p>
        <a class="tabelle" href=""><p>Größentabelle</p></a>
      </div>
    </div>
  </div>
</template>

<script>
import SizeIcon from "../components/SizeIcon";

export default {
  name: "product_details",
  components: {
    SizeIcon,
  },
  created(){
    console.log(this.list.image.filter(
        (i) => i != null));
  },
  data(){
    return{
      mainImg: this.list.image[0],
      selectedSize: this.list.stock[0].size,
      selectedSizeId: 0,
    }
  },
  computed: {
    imgFilter() {
      return this.list.image.filter(
        (i) => i != null
      );
    },
  },
  props: {
    list: {
      type: Object,
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.list,
        quantity: 1,
      });
    },
    changeSelected(a, id) {
      this.selectedSize = a;
      this.selectedSizeId = id;
      console.log(this.selectedSize);
    }
  },
};

</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  text-align: center;
}

.mainimg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 460px;
}

.smallimg {
  width: 44px;
  margin-right: 10px;
  cursor: pointer;
}

.imgcontainer {
  margin-bottom: 15px;
}

.name {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 15px;
}

.price {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 15px;
}

.addbtn {
  border: 2px solid black;
  color: black;
  background-color: transparent;
  width: calc(100% - 10px);
  height: 50px;
  margin-top: 15px;
  font-size: 16px;
  transition: 0.5s;
}

.addbtn:hover {
  cursor: pointer;
  color: white;
  background-color: black;
}

.aside_right {
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(0%, -50%);
  width: 325px;
  text-align: left;
}

.link {
  text-decoration: none;
  color: black;
}

.info {
  margin-top: 90px;
  font-size: 12px;
}
.tabelle {
  text-decoration: none;
}
.tabelle p {
  margin-top: 10px;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  color: black;
}
</style>
