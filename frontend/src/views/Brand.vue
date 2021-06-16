<template>
  <div class="brand">
    <div class="sidenav">
      <BrandSidenav />
    </div>
    <div class="wrapper">
      <Page  v-for="(item, index) in branddata" :key="'item'+index" 
      :headline="item.headline" :text="item.text" :img="item.img" :align="item.align"
      :textpos="item.textpos" :textcolumns="item.textcolumns" :subheadline="item.subheadline"
      :bigheadline="item.bigheadline" :dist="item.dist" :fullsize="item.fullsize" :fontlist="item.fontlist"
      :usecases="item.usecases" :colors="item.colors" :layouts="item.layouts"
      />
    </div>
  </div>
</template>

<script>

import BrandSidenav from '../components/BrandSidenav.vue'
import Page from '../components/Page'

export default {
  name: 'brand',
   computed: {
          branddata(){
              return this.$store.getters.branddata;
          },
          fontl(){
              return this.$store.getters.fontlist;
          },
        },
  components: {
    BrandSidenav,
    Page,
  }
}


</script>

<style lang="scss">

p{
  margin: 0px;
}

.sidenav{
  background-color: black;
  //border-right: 1px solid black;
  height: 100vh;
  width: 240px;
  position: fixed;
}

.wrapper{
  width: calc(100% - 240px);
  min-width: 800px;
  margin-left: 240px;
  display: inline-block;
  //background-color: #888;
}

@media screen and (min-width: 2080px){
  .wrapper{
    //margin-left: calc((100vw - 1590px)/2);
  }
}

</style>