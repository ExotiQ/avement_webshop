<template>
  <header>
    <div :style="{ color: color }" id="container">
      <a href="/"
        ><img
          class="align-left"
          :src="require(`../assets/schriftlogo-${color}.svg`)"
          alt="logo"
      /></a>
      <!--<a class="align-left" href="/search" :style="{ color: color }">Suche</a>-->
      <a class="align-left" href="/Shop" :style="{ color: color }">Shop</a>
      <a class="align-right" href="/cart" :style="{ color: color }"
        >Warenkorb ({{ cartItemCount }})</a
      >
      <a class="align-right" href="/Account" :style="{ color: color }"
        >Account</a
      >
      <!--<a class="align-right" href="/about" :style="{ color: color }"
        >Lookbook</a
      >-->
      <a class="align-right" href="/brand" :style="{ color: color }">Brand</a>
    </div>

    <div id="container_small">
      <div @click="opennav" v-if="!open" class="opennav" :style="{ color: color }">
        <i class="fas fa-bars"></i>
      </div>
      <div class="sidenav">
        <div class="opener" @click="opennav">
          <i class="fas fa-times"></i>
        </div>
        <a href="/">
          <img class="align-left" :src="require(`../assets/schriftlogo-white.svg`)" alt="logo"/>
        </a>
        <a class="align-left" href="/Shop">Shop</a>
        <div class="sub">
          <a href="/Shop">ALL</a>
          <a href="/Shop/Tops">TOPS</a>
          <a href="/Shop/Bottoms">BOTTOMS</a>
          <a href="/Shop/Accessoires">ACCESORIES</a>
          <a style="color: red" href="/Shop/Sale">SALE</a>
        </div>
        <a class="align-right" href="/brand">Brand</a>
      </div>
    </div>
    <div class="cart" :style="{ backgroundColor: opColor() }">
      <a class="align-right" :style="{ color: color }" href="/cart">Warenkorb ({{ cartItemCount }})</a >
      <a class="align-right" :style="{ color: color }" href="/Account">Account</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    color: {
      type: String,
      default: "black",
    },
  },
  data(){
    return{
      open: false,
    }
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
  methods: {
     opennav() {
      this.open = !this.open;
      if (this.open) {
        document.getElementsByClassName("sidenav")[0].style.width = "240px";
        document.getElementsByClassName("sidenav")[0].style.width = "240px";
        document.getElementsByClassName("wrapper")[0].style.width =
          "calc(100% - 240px)";
        document.getElementsByClassName("wrapper")[0].style.marginLeft =
          "240px";
      } else {
        document.getElementsByClassName("sidenav")[0].style.width = "0px";
        document.getElementsByClassName("wrapper")[0].style.width =
          "calc(100%)";
        document.getElementsByClassName("wrapper")[0].style.marginLeft = "0px";
      }
    },
    opColor(){
      if(this.color == "white"){
        return "black";
      } else{
        return "white";
      }
    }
  }
};
</script>

<style scoped lang="scss">
header {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: auto;
  //background-color: mediumslateblue;
}

#container {
  display: inline-block;
  //background-color: mediumvioletred;
  padding: 67px 70px 20px 70px;
  width: calc(100% - 140px);
  font-size: 14px;
}

#container_small{
  display: none;
}

img {
  height: 16px;
}

a {
  margin: 0px 0px 0px 20px;
  text-decoration: none;
  font-size: 14px ;
}

.sidenav {
  background-color: black;
  //border-right: 1px solid black;
  height: 100vh;
  width: 0px;
  overflow: hidden;
  position: fixed;
  z-index: 2;
  transition: 0.5s ease;
  padding-top: 70px;

  a{
    color: white;
    text-decoration: none;
    width: 240px;
    padding: 10px;
    float: left;
    cursor: pointer;
  }

  a:hover{
    text-decoration: underline;
  }

  .sub{

    a{
      cursor: pointer;
      font-size: 12px;
      margin-left: 30px;
      margin-top: 0px;
      margin-bottom: 0px;
      padding: 5px;
    }

  }
}

.opener{
  position: absolute;
  font-size: 1.5em;
  color: white;
  background-color: black;
  padding: 10px;
  cursor: pointer;
  color: white;
  top: 0px;
  right: 0px;
  cursor: pointer;
}

.opennav{
  font-size: 1.5em;
  cursor: pointer;
  //background-color: rgba($color: white, $alpha: 0.3);
  padding: 20px;
  padding-top: 15px;
  z-index: 2;
  position: fixed;
  top: 0px;
  left: 0px;
}

.cart{
  display: none;
  margin: 20px;
  cursor: pointer;
}

@media only screen and (max-width: 600px){

  #container{
    display: none;
  }

  #container_small, .cart{
    display: block;
  }

  .cart{
    display: inline-block;
    width: calc(100% - 40px);
    margin: 0px;
    padding: 20px;
  }

}

</style>
