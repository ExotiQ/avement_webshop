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
      <a class="align-right" href="/about" :style="{ color: color }"
        >Lookbook</a
      >
      <a class="align-right" href="/brand" :style="{ color: color }">Brand</a>
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
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
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

img {
  height: 16px;
}

a {
  margin: 0px 0px 0px 20px;
  text-decoration: none;
}

@media only screen and (max-width: 800px){

  #container{
    padding: 67px 20px 20px 20px;
    width: calc(100% - 40px);
  }

}

</style>
