<template>
  <div class="product">
    <div class="container">
      <div class="mainimg" :style="{ backgroundImage: 'url(' + require(`../resources/${mainImg}`) +')' }"></div>
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
          @click.native="changeSelected(tags.size, tags.amount, index)" 
          v-for="(tags, index) in list.stock" 
          :key="'tags' + index" 
          :size="tags.size" 
          :stock="tags.amount"
          :selected="selectedSizeId" 
          :id="index"
        />
        <button class="addbtn" @click="addToCart()">In den Warenkorb</button>
        <!--<p class="info">{{ list.info }}</p>
        <a class="tabelle" href=""><p>Größentabelle</p></a>-->
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
      selectedSize: this.startSelected(),
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
        selectedSize: this.selectedSize,
      });
    },
    changeSelected(a, num, id) {
      if(num > 0){
        this.selectedSize = a;
        this.selectedSizeId = id;
      }
    },
    startSelected(){
      if( this.list.stock[0].amount > 0){
         return this.list.stock[0].size;
      }
    },
    startSelectedId(){
      if( this.list.stock[0].amount > 0){
         return this.list.stock[0].size;
      }
    },
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
  width: 460px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
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


@media only screen and (max-width: 1300px){
  .mainimg {
    left: calc(50% + (100vw - 1300px)) ;;
  }
}

@media only screen and (max-width: 1060px){

  .mainimg {
    left: 0px;
    transform: translate(0%, -50%);
    height: 460px;
  }

}

@media only screen and (max-width: 935px){

  .aside_right{
    width: calc(100vw - 610px);
  }

}

@media only screen and (max-width: 800px){

  .aside_right{
    width: calc(800px - 610px);
  }

  .mainimg {
    width: calc(100vw - 340px);
  }
  
}

@media only screen and (max-width: 600px){

  .mainimg {
    height: 420px;
    width: 100%;
    position: relative;
  }

   .aside_right{
    position: relative;
    top: -180px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
  }

}

@media only screen and (max-height: 710px){

  .mainimg {
    height: 370px;
  }

}

</style>
