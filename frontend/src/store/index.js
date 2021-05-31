import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigation: [
    {
      title: "Logo",
      open: false,
      subnav: [
        {title: "Aufbau",},
        { title: "Varianten" },
        { title: "Clearspace" },
        { title: "Größe" },
        { title: "Social Icons" },
        { title: "Guidance" },
      ]
    },
    {
      title: "Typografie",
      open: false,
      subnav: [
        { title: "Fonts" }, 
        { title: "Usecases" }
      ]
    },
    { title: "Farben" },
    { title: "Komposition" },
    { title: "Downloads" },
    { title: "Layoutgenerator" },
  ],
  products: [
      {
        name: "Metal Tee",
        color: "black",
        price: 29.99,
        img: [
          {src: "beigesweater.png"},
          {src: "yellowsweater.png"},
        ],
        stock: [
          {
            size: "xs",
            amount: 20,
          },
          {
            size: "s",
            amount: 20,
          },
          {
            size: "m",
            amount: 20,
          },
          {
            size: "l",
            amount: 20,
          },
          {
            size: "xl",
            amount: 20,
          },
          {
            size: "xxl",
            amount: 20,
          },
        ],
        info: "Short Sleeve Pocket T-Shirt - Graphic Art 100% Pigment Dyed Cotton - Imported This garment has been individually dyed producing a one of a kind result. Due to the unique process color may fade or bleed after wash.",
      },
      {
        name: "Eye-Tee White",
        color: "black",
        price: 24.99,
        img: [
          {src: "beigesweater.png"},
        ],
        stock: [
          {
            size: "xs",
            amount: 20,
          },
          {
            size: "s",
            amount: 20,
          },
          {
            size: "l",
            amount: 20,
          },
          {
            size: "xl",
            amount: 20,
          },
          {
            size: "xxl",
            amount: 20,
          },
        ],
        info: "Short Sleeve Pocket T-Shirt - Graphic Art 100% Pigment Dyed Cotton - Imported This garment has been individually dyed producing a one of a kind result. Due to the unique process color may fade or bleed after wash.",
      },
      {
        name: "Skull-Tee",
        color: "black",
        price: 29.99,
        img: [
          {src: "yellowsweater.png"},
        ],
        stock: [
          {
            size: "xs",
            amount: 20,
          },
          {
            size: "s",
            amount: 20,
          },
          {
            size: "m",
            amount: 20,
          },
          {
            size: "l",
            amount: 20,
          },
          {
            size: "xl",
            amount: 20,
          },
          {
            size: "xxl",
            amount: 20,
          },
        ],
        info: "Short Sleeve Pocket T-Shirt - Graphic Art 100% Pigment Dyed Cotton - Imported This garment has been individually dyed producing a one of a kind result. Due to the unique process color may fade or bleed after wash.",
      },
      {
        name: "Eye-Tee Black",
        color: "black",
        price: 24.99,
        img: [
          {src: "beigesweater.png"},
        ],
        stock: [
          {
            size: "xs",
            amount: 20,
          },
          {
            size: "s",
            amount: 20,
          },
          {
            size: "m",
            amount: 20,
          },
          {
            size: "l",
            amount: 20,
          },
          {
            size: "xl",
            amount: 20,
          },
          {
            size: "xxl",
            amount: 20,
          },
        ],
        info: "Short Sleeve Pocket T-Shirt - Graphic Art 100% Pigment Dyed Cotton - Imported This garment has been individually dyed producing a one of a kind result. Due to the unique process color may fade or bleed after wash.",
      },
  ],
  cart: [],
  branddata: [
  
    {
      bigheadline: "bring our brand to life!",
      align: "center",
      textpos: "left",
      textcolumns: 2,
      img: "bringourbrandtolife.png",
    },
    {
      headline: "WIr geben die tools und du kreierst!",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex ",
      align: "center",
      textpos: "right",
      textcolumns: 2,
    },
    {
      img: "avement_schild_mockup.png",
      align: "center",
      textpos: "top",
      textcolumns: 2,
    
    },
    {
      headline: "Branding guidelines",
      subheadline: "Was ist das und wie benutzt du sie?",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex ",
      img: "logoaufbau1.png",
      align: "center",
      textpos: "left",
      textcolumns: 2,
     
    },
    {
      headline: "LAYOUT GENERATOR",
      subheadline: "Was ist das und wie benutzt du es?",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex ",
      img: "compositionconstruct1.png",
      align: "top",
      textpos: "left",
      textcolumns: 2,
      
    },
    {
      bigheadline: "LOGO",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
      img: "schriftlogo-black.svg",
      align: "top",
      textpos: "top",
      textcolumns: 1,
      
    },
    {
      headline: "AUFBAU",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
      img: "logoaufbau1.png",
      align: "center",
      textpos: "right",
      textcolumns: 1,
      dist: 1,
    },
    {
      img: "Element 4.svg",
      align: "top",
      textpos: "right",
      textcolumns: 2,
    },
    {
      headline: "Varianten",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
      img: "Element 5.svg",
      align: "top",
      textpos: "top",
      textcolumns: 1,
    },
    {
      headline: "Clearspace",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
      img: "Element 6.svg",
      align: "top",
      textpos: "left",
      textcolumns: 1,
    },
    {
      headline: "Grösse",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
      img: "Element 7.svg",
      align: "topr",
      textpos: "left",
      textcolumns: 1,
    },
    {
      headline: "Social icons",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
      img: "Element 8.svg",
      align: "top",
      textpos: "left",
      textcolumns: 1,
    },
    {
      headline: "Guidance",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
      img: "Element 9.svg",
      align: "top",
      textpos: "top",
      textcolumns: 1,
      dist: 6,
    },
    {
      bigheadline: "TYPOGRAFIE",
      subheadline: "Welche Fonts dürfen wie verwendet werden?",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex",
      align: "top",
      textpos: "left",
      textcolumns: 2,
      dist: 2,
    },
    {
      img: "Element 10.svg",
      align: "top",
      textpos: "right",
      textcolumns: 1,
      dist: 2,
    },
    {
      headline: "Usecases",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
      img: "usecases.png",
      align: "top",
      textpos: "top",
      textcolumns: 1,
    },
    {
      bigheadline: "colors",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
      img: "Element 12.svg",
      align: "top",
      textpos: "left",
      textcolumns: 2,
    },
  ]
},
getters: {
  navigation: state => {
    return state.navigation;
  },
  branddata: state => {
    return state.branddata;
  },
  products: state => {
    return state.products;
  },
  tshirts: state => {
    return state.products.tshirts;
  },
  cart: state => {
    return state.cart;
  }
},
  mutations: {
    ADD_TO_CART (state, {product, quantity}){
      state.cart.push({
        product,
        quantity,
      })
    }
  },
  actions: {
    addProductToCart = ({commit}, {product, quantity}) => {
      commit('ADD_TO_CART', { product, quantity})
    }
  },
  modules: {},
});


