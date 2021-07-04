<template>
  <div class="color" v-on:click="updateValues">
    <div class="cblock" :style="{ backgroundColor: color.hex }"></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: Object,
    },
  },
  methods: {
    updateValues() {
      this.$emit("update", this.color);
    },
  },
};
</script>

<style lang="scss" scoped>
.color {
  float: left;
  margin: 0px 10px 10px 0;
}

.cblock {
  height: 100px;
  width: 100px;
}
</style>
