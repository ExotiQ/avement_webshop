<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.11.0/css/all.css");

input,
select,
textarea {
  font-family: "Montserrat", serif;
  outline: none;
  font-weight: 400;
}

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
  background-image: url("./assets/bg-image1.jpg");
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

select {
  font-family: "Montserrat";
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
