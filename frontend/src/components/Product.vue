<template>
  <div class="product">
    <router-link
      class="link"
      :to="{ name: 'Products', params: { product_id: list.id,  } }"
    >
      <div
        @mouseover="hover = true"
        @mouseleave="hover = false"
        class="container"
      >
        <div class="img" :style="{ backgroundImage: 'url(' + require(`../resources/${list.image[0]}`) +')' }">
          
        </div>
        <div class="text">
          <p v-if="hover" class="name info">{{ list.name }}</p>
          <p v-if="hover" class="info">{{ list.price }}€</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "product",
  components: {},
  computed: {},
  props: {
    list: {
      type: Object,
    },
  },
  methods: {},
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: calc((100% - 120px) / 4);
  height: calc((100vw - 0px) / 4);
  margin: 15px;
  margin-left: 0px;
  margin-right: 30px;
  float: left;
  text-align: center;
  cursor: pointer;
}
img {
  position: absolute;
  left: 0px;
  top: calc(50% - 30px);
  transform: translate(0,-50%);

  width: 100%;
}

.img {
  height:  calc(100% - 60px);
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
p {
  margin: 0px;
  margin-bottom: 2px;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
}
.name {
  font-weight: 500;
}

.text {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%,0%);
  width: 100%;
}

.link {
  text-decoration: none;
  color: black;
}

@media only screen and (max-width: 1200px){

  .container {
    width: calc((100% - 90px) / 3);
    height: calc((100vw - 0px) / 3);
  }

}

@media only screen and (max-width: 800px){

  .container {
    width: calc((100% - 60px) / 2);
    height: calc((100vw - 0px) / 2);
  }

}

</style>
