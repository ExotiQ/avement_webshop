<template>
  <div class="fontlist">
    <div class="newfamily" :style="{ fontFamily: fontfamily.name }">
      <table
        class="container"
        :style="{ backgroundColor: colorswitch, fontStyle: fontswitch }"
      >
        <tr>
          <td class="first">{{ fontfamily.name }}</td>
          <td class="second">
            abcdefghijklmnopqrstuvwxyz <br />
            ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
            1234567890 .,!?%&
          </td>
          <td class="third">{{ fltextText }}</td>
          <td class="forth">{{ headlineText }}</td>
          <td class="fifth"><i class="fas fa-download"></i></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "fontlist",
  computed: {
    colorswitch() {
      if (this.bgcolor % 2 == 0) {
        //return "#111"
        return "rgb(10, 10, 10)";
      }
      //return "#F6F6FB"
      return "black";
    },
    fontswitch() {
      if (this.fontstyle.number == 0 || this.fontstyle == "0") {
        return "normal";
      }
      return "italic";
    },
    headlineText() {
      if (this.headline != "") {
        return this.headline;
      }
      return "HEADLINE";
    },
    fltextText() {
      if (this.fltext != "") {
        return this.fltext;
      }
      return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis voluptatum minima ipsa repudiandae nulla mollitia. Molestiae vel, neque, quam hic atque nam nobis, odio totam iusto nisi architecto explicabo?";
    },
  },
  props: {
    fontfamily: {
      type: Object,
    },
    bgcolor: {
      type: Number,
    },
    headline: {
      type: String,
    },
    fltext: {
      type: String,
    },
    fontstyle: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  min-height: 175px;
  margin-top: 10px;
}

td {
  padding: 10px;
  vertical-align: top;
}

.first {
  font-weight: 600;
  font-size: 25px;
  width: 160px;
}
.second {
  font-size: 1em;
  line-height: 1.8em;
  width: 320px;
}
.third {
  font-size: 1em;
  line-height: 1.8em;
  font-weight: 400;
  width: calc(100% - 1000px);
}
.forth {
  width: 250px;
  max-width: 250px;
  overflow: hidden;
  font-weight: 800;
  font-size: 40px;
}
.fifth {
  font-family: montserrat;
  vertical-align: middle;
  width: 16px;
}

.first,
.second,
.third,
.forth {
  border-right: 10px solid rgb(25, 25, 25);
}
</style>
