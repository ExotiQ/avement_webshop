<template>
  <div id="app">
    <Header color="white" />
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <div id="background"></div>
    <div id="center-block">
      <img
        id="center-logo"
        class="align-left"
        src="../assets/schriftlogo-white.svg"
        alt="logo"
      />
      <a href="/shop"
        ><p style="margin-left: 100px" class="align-left">SHOP</p></a
      >
      <a href="/lookbook"
        ><p style="margin-right: 100px" class="align-right">LOOKBOOK</p></a
      >
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.align-left {
  float: left;
}

.align-right {
  float: right;
}

body {
  margin: 0px;
}

#app {
  font-family: "Montserrat", serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  //background-color: mediumspringgreen;
  margin: 0px;
  padding: 0px;
}

#background {
  background-image: url("../assets/bg-image1.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  width: 100vw;
  height: 100vh;
}

#center-block {
  display: inline-block;
  position: absolute;
  width: 476px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#center-block p {
  color: white;
  margin-bottom: 0px;
  margin-top: 0px;
}

#center-logo {
  height: 96px;
}

#nav {
  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
