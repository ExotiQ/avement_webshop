<template>
  <div class="brand">
    <div @click="opennav" v-if="!open" class="opennav">
      <i class="fas fa-bars"></i>
    </div>
    <div class="sidenav">
      <BrandSidenav v-if="open" />
      <div class="opener" @click="opennav">
        <i class="fas fa-times"></i>
      </div>
    </div>
    <div class="wrapper">
      <Page
        v-for="(item, index) in branddata"
        :key="'item' + index"
        :headline="item.headline"
        :text="item.text"
        :img="item.img"
        :align="item.align"
        :textpos="item.textpos"
        :textcolumns="item.textcolumns"
        :subheadline="item.subheadline"
        :bigheadline="item.bigheadline"
        :dist="item.dist"
        :fullsize="item.fullsize"
        :fontlist="item.fontlist"
        :usecases="item.usecases"
        :colors="item.colors"
        :layouts="item.layouts"
        :slider="item.slider"
        :href="item.href"
      />
    </div>
  </div>
</template>

<script>
import BrandSidenav from "../components/BrandSidenav.vue";
import Page from "../components/Page";

export default {
  name: "brand",
  created() {
    if (window.innerWidth <= 1400) {
      this.open = false;
    }
    window.addEventListener("resize", this.resizeEvent);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeEvent);
  },
  computed: {
    branddata() {
      return this.$store.getters.branddata;
    },
    fontl() {
      return this.$store.getters.fontlist;
    },
  },
  components: {
    BrandSidenav,
    Page,
  },
  data() {
    return {
      open: true,
    };
  },
  methods: {
    opennav() {
      if (window.innerWidth <= 1400) {
        this.open = !this.open;
      }
      console.log("bla");
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
    resizeEvent() {
      console.log("resized");
      if (window.innerWidth > 1400) {
        this.open = true;
        this.opennav();
      }
    },
  },
};
</script>

<style lang="scss">
p {
  margin: 0px;
}

.opener {
  position: absolute;
  font-size: 1.5em;
  color: white;
  background-color: black;
  padding: 10px;
  cursor: pointer;
  color: white;
  top: 0px;
  right: 0px;
  display: none;
}

.opennav {
  font-size: 1.5em;
  background-color: rgba($color: white, $alpha: 0.3);
  padding: 10px;
  color: black;
  z-index: 2;
  position: fixed;
  top: 0px;
  left: 0px;
  display: none;
}

.sidenav {
  background-color: black;
  //border-right: 1px solid black;
  height: 100vh;
  width: 240px;
  position: fixed;
}

.wrapper {
  width: calc(100% - 240px);
  min-width: 800px;
  margin-left: 240px;
  display: inline-block;
  //background-color: #888;
}

@media screen and (min-width: 2080px) {

  .wrapper {
    //margin-left: calc((100vw - 1590px)/2);
  }

}

@media screen and (max-width: 1400px) {

  .wrapper {
    width: calc(100%);
    margin-left: 0px;
  }

  .sidenav {
    width: 0px;
    overflow: hidden;
  }

  .opener,
  .opennav {
    display: block;
  }
}
</style>
