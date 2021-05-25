<template>
  <div class="shop">
      <Header /> 
      <Sidenav /> 
  </div> 
</template>

<script>

import Header from '../components/Header'
import Sidenav from '../components/Sidenav.vue'


export default {
  name: 'Shop',
  components: {
    Header,
    Sidenav,
  },
}

</script>