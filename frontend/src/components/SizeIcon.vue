<template>
  <div class="sizeicon" :style="selectedStyling()">
    <p>{{ size }}</p>
  </div>
</template>

<script>
export default {
  name: "SizeIcon",
  computed: {},
  components: {},
  methods: {
    selectedStyling(){
      var style;
      if(this.stock <= 0){
        style = { backgroundColor: 'grey', color: 'white', borderColor: 'Grey'};
        return style;
      }
      if(this.selected == this.id){
        style = { backgroundColor: 'black', color: 'white'};
      return style;
      }
    }
  },
  props: {
    size: {
      type: String,
    },
    id: {
      type: Number,
    },
    selected: {
      type: Number,
    },
    stock: {
      type: Number,
    }
  },
};
</script>

<style lang="scss" scoped>
.sizeicon {
  height: 40px;
  width: 40px;
  margin-right: 10px;
  border: 2px solid black;
  color: black;
  position: relative;
  display: inline-block;
  transition: 0.5s;
}
.sizeicon p {
  margin: 0px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
}
.sizeicon:hover {
  color: white;
  background-color: black;
  cursor: pointer;
}
</style>
