<template>
  <div class="brand">
    <div class="wrapper">
      <BrandSidenav />
      <Page  v-for="(item, index) in branddata" :key="'item'+index" 
      :headline="item.headline" :text="item.text" :img="item.img" :align="item.align"
      :textpos="item.textpos" :textcolumns="item.textcolumns" :subheadline="item.subheadline"
      :bigheadline="item.bigheadline" :dist="item.dist"
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
            }
        },
  components: {
    BrandSidenav,
    Page,
  },
}

</script>

<style lang="scss">

.brand {
  width: calc(100vw - 90px);
  margin-left: 45px;
}

p{
  margin: 0px;
}

.wrapper{
  margin-top: 90px;
  width: calc(100% - 245px);
  min-width: 1000px;
  max-width: 1500px;
  margin-left: 245px;
  display: inline-block;
  //background-color: #888;
}

@media screen and (min-width: 2080px){
  .wrapper{
    margin-left: calc((100vw - 1590px)/2);
  }
}

</style>