<template>
  <div class="layouts">
    <div class="nav">
      <p>{{ object.name }}</p>
      <div class="navtop">
        <div
          class="fontsOpen open"
          @click="
            (fontsOpen = !fontsOpen),
              (colorsOpen = false),
              (structureOpen = false)
          "
        >
          <p>Fonts</p>
          <i
            class="far"
            :class="{
              'fas fa-angle-right': !fontsOpen,
              'fas fa-angle-down': fontsOpen,
            }"
          ></i>
        </div>
        <div
          :style="!fontsOpen ? 'height: 0px' : 'height: 200px'"
          class="headlineSetting setting"
        >
          <div
            class="fontcoll"
            v-for="(item, index) in object.fonts"
            :key="'item' + index"
          >
            <i class="fas fa-download"></i>
            <p class="family">
              {{ item.family }}/{{ item.fontWeight }}/{{ item.fontStyle }}
            </p>
          </div>
        </div>

        <div
          class="colorsOpen open"
          @click="
            (colorsOpen = !colorsOpen),
              (fontsOpen = false),
              (structureOpen = false)
          "
        >
          <p>Colors</p>
          <i
            class="far"
            :class="{
              'fas fa-angle-right': !colorsOpen,
              'fas fa-angle-down': colorsOpen,
            }"
          ></i>
        </div>
        <div
          :style="!colorsOpen ? 'height: 0px' : 'height: 200px'"
          class="headlineSetting setting"
        >
          <div v-if="firstimg != ''" class="colorcontainer">
            <div
              class="colorcoll"
              v-for="(item, index) in nowcolors"
              :key="'item' + index"
              :style="'cursor: pointer'"
            >
              <p class="family">{{ item }}</p>
              <div :style="{ backgroundColor: item }"></div>
            </div>
          </div>
        </div>

        <div
          class="structureOpen open"
          @click="
            (structureOpen = !structureOpen),
              (fontsOpen = false),
              (colorsOpen = false),
              structureOpen
                ? (firstimg = object.structure)
                : (firstimg = object.img[0].src)
          "
        >
          <p>Structure</p>
          <i
            class="far"
            :class="{
              'fas fa-angle-right': !structureOpen,
              'fas fa-angle-down': structureOpen,
            }"
          ></i>
        </div>
        <div
          :style="!structureOpen ? 'height: 0px' : 'height: 200px'"
          class="headlineSetting setting"
        >
          <div class="fontcoll">
            <i class="fas fa-download"></i>
            <p>Indesign Dokument</p>
          </div>
          <div class="fontcoll">
            <i class="fas fa-download"></i>
            <p>Plakat.png</p>
          </div>
          <div class="fontcoll">
            <i class="fas fa-download"></i>
            <p>Bilder.png</p>
          </div>
        </div>
      </div>
      <div class="navbottom">
        <select v-model="layformat">
          <option value="A4">A4</option>
          <option value="A3">A3</option>
          <option value="A2">A2</option>
          <option value="square">Quadrat</option>
          <option value="web">Web</option>
          <option value="insta">Instagram Stories</option>
        </select>
        <div class="icon" @click="format">
          <div
            class="hor"
            :style="
              vert
                ? 'backgroundColor: white; border: 1px solid black; zIndex: 2'
                : 'background-color: rgb(230, 230, 230); border: none; zIndex: 1'
            "
          ></div>
          <div
            class="vert"
            :style="
              !vert
                ? 'backgroundColor: white; border: 1px solid black; zIndex: 2'
                : 'background-color: rgb(230, 230, 230); border: none; zIndex: 1'
            "
          ></div>
        </div>
        <Comp
          v-for="(item, index) in comp"
          :key="'item' + index"
          :comp="item"
          @update="displayComp"
          :vert="vert"
          :layformat="layformat"
          :index="index"
        />
      </div>
    </div>
    <div v-if="firstimg != '' && img[0].color != ''" class="colorsmenu">
      <div
        v-for="(item, index) in img"
        :key="'item' + index"
        :style="{ 'background-color': item.color }"
        @click="
          firstimg = item.src;
          nowcolors = item.subcolors;
        "
        class="coloricon"
      ></div>
    </div>
    <div :class="nowvert ? 'imgcontainerver' : 'imgcontainerhor'">
      <img
        v-if="firstimg != ''"
        :src="require(`../assets/${firstimg}`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import Comp from "../components/Comp";

export default {
  components: {
    Comp,
  },
  computed: {
    comp() {
      return this.$store.getters.compositions;
    },
  },
  data() {
    return {
      fontsOpen: false,
      colorsOpen: false,
      structureOpen: false,
      vert: true,
      layformat: "A4",
      img: [],
      firstimg: "",
      nowvert: true,
      nowcolors: [],
      object: {},
    };
  },
  methods: {
    format() {
      this.vert = !this.vert;
    },
    displayComp(variable) {
      this.img = variable.img;
      this.firstimg = variable.img[0].src;
      this.nowvert = variable.vert;
      this.nowcolors = variable.img[0].subcolors;
      this.object = variable;
    },
  },
};
</script>

<style lang="scss" scoped>
.layouts {
  position: relative;
  background-color: rgb(230, 230, 230);
  width: 100%;
  height: calc(100vh - 90px);
}
.nav {
  background-color: rgb(25, 25, 25);
  height: calc(100% - 20px);
  width: 310px;
  padding: 10px;
  color: white;
  float: right;
  p {
    font-weight: 600;
  }
}
.navtop {
  display: inline-block;

  width: 100%;
  height: 360px;
}
.navbottom {
  display: inline-block;

  width: calc(100% + 10px);
  height: calc(100% - 380px);
}
.imgcontainerver {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: calc(100% - 90px);
}
.imgcontainerhor {
  position: absolute;
  top: 50%;
  left: 45px;
  transform: translate(0%, -50%);
  width: calc(100% - 420px);
}
.imgcontainerver img {
  height: 100%;
}

.imgcontainerhor img {
  width: 100%;
}
.open {
  position: relative;
  width: calc(100% - 20px);
  margin-top: 10px;
  padding: 10px;
  margin-bottom: 0px;
  background-color: black;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  i {
    position: absolute;
    top: 12px;
    right: 10px;
  }
}

.setting {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}

.fontcoll {
  width: 100%;
  margin-top: 10px;
  display: inline-block;

  p {
    float: left;
  }
  i {
    float: right;
  }
}

.colorcoll {
  width: 100%;
  margin-top: 10px;
  display: inline-block;

  p {
    float: left;
  }
  div {
    float: right;
    height: 20px;
    width: 70%;
  }
}

select {
  width: calc(100% - 60px);
  margin-bottom: 10px;
  padding: 3px;
  margin-top: 7px;
}

.icon {
  position: relative;
  float: right;
  margin-right: 10px;
  width: 39px;
  height: 39px;
}
.hor {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
  height: 39px;
  width: 25px;
  z-index: 2;
}
.vert {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(230, 230, 230);
  height: 25px;
  width: 39px;
  z-index: 1;
}
.colorsmenu {
  float: left;
  margin: 45px;
}

.coloricon {
  height: 40px;
  width: 40px;
  background-color: black;
  margin-bottom: 20px;
}
</style>
