<template>
  <div v-on:click="toggle($event.target)" class="icon">
    <div class="div1"></div>
    <div class="div2"></div>
  </div>
</template>

<script>
export default {
  name: "DropDwonIcon",
  props: {},
  methods: {
    toggle(x) {
      x.style.backgroundColor("red");
    },
  },
};
</script>

<style scoped>
.icon {
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  float: right;
  margin-top: 6px;
}
.div1 {
  background-color: black;
  height: 2px;
  width: 8px;
}
.div2 {
  background-color: black;
  height: 6px;
  width: 2px;

  float: right;
}
</style>
