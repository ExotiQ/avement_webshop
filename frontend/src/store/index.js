import Vue from "vue";
import Vuex from "vuex";
/*import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie'; */


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
   /* plugins: [
      createPersistedState({
        getState: (key) => Cookies.getJSON(key),
        setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
      })
    ], */
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
      textpos: "top",
      img: "bbtl.png",
      fullsize: true,
    },
    {
      headline: "WIr geben die tools und du kreierst!",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex ",
      align: "center",
      textpos: "right",
      textcolumns: 2,
      img: "skate.gif",
    },
    {
      headline: "Branding guidelines",
      subheadline: "Was ist das und wie benutzt du sie?",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex ",
      img: "BrandingGuidelines.png",
      align: "center",
      textpos: "left",
      textcolumns: 2,
      dist: 0,
    },
    {
      headline: "LAYOUT GENERATOR",
      subheadline: "Was ist das und wie benutzt du es?",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex ",
      img: "SkateContest_Black.png",
      align: "center",
      textpos: "left",
      textcolumns: 2,  
    },
    {
      bigheadline: "LOGO",
      dist: 0,
    },
    {
      img: "LogoBlackBg.svg",
      fullsize: true,
    },
    {
      headline: "AUFBAU",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
      img: "logoaufbau1.png",
      align: "center",
      textpos: "left",
      textcolumns: 1,
    },
    {
      headline: "Varianten",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
      img: "Element 5.svg",
      align: "top",
      textpos: "left",
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
      textpos: "left",
      textcolumns: 1,
      dist: 6,
    },
    {
      bigheadline: "TYPOGRAFIE",
      subheadline: "Welche Fonts dürfen wie verwendet werden?",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex",
      align: "center",
      textpos: "left",
      textcolumns: 2,
      dist: 1,
    },
    {
      fontlist: true,
    },
    {
      headline: "Usecases",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
      align: "top",
      textpos: "left",
      textcolumns: 1,
      dist: 1,
    },
    {
      usecases: true,
    },
    {
      bigheadline: "colors",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
      align: "top",
      textpos: "left",
      textcolumns: 1,
      dist: 1,
    },
    {
      colors: true,
    },
    { 
      bigheadline: "composition",
      text: "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
      img: "plakat7.png",
      textpos: "top",
      textcolumns: 1,
    },
    {
      layouts: true,
    },
  ],
  fontlist: [
    {
      name: "Montserrat",
    },
    {
      name: "Politica",
    },
    {
      name: "Industry",
    },
    {
      name: "Filson Pro",
    },
    {
      name: "Antarctican Mono",
    },
    
  ],
  colors: [
    {
      primary: [
        {
          rgb: "rgb(255, 255, 255)",
          cmyk: "0 0 0 0",
          hex: "#ffffff",
          recomendet: [
            "#000000",
            "#d23b3b",
          ]
        },
        {
          rgb: "rgb(0, 0, 0)",
          cmyk: "0 0 0 100",
          hex: "#000000",
          recomendet: [
            "#ffffff"
          ]
        },
      ],
      second: [
        {
          rgb: "rgb(231, 208, 79)",
          hex: "#e7d04f",
          cmyk: "0 10 66 9",
          recomendet: [
            "#634163",
            "#d23b3b",
          ]
        },
        {
          rgb: "rgb(210, 59, 59)",
          hex: "#d23b3b",
          cmyk: "0 72 72 18",
          recomendet: [
            "#e7d04f",
            "#ffffff",
          ]
        },
        {
          rgb: "rgb(99, 65, 99)",
          hex: "#634163",
          cmyk: "0 34 0 61",
          recomendet: [
            "#e7d04f",
          ]
        },
      ]
    },
  ],
  compositions: [
    {
      format: "A4",
      name: "Store Opening",
      vert: true,
      structure: "Store_Opening_Aufbau.png",
      img:[
        {
          color: "white",
          subcolors:[
            "#FFFFFF",
            "#000000",
            "#D23B3B",
          ],
          src: "Store_Opening_White-min.png",
        },
        {
          color: "#E7D04F",
          subcolors:[
            "#000000",
            "#D23B3B",
            "#E7D04F",
          ],
          src: "Store_Opening_Yellow-min.png",
        },
        {
          color: "#D23B3B",
          subcolors:[
            "#FFFFFF",
            "#E7D04F",
            "#D23B3B",
          ],
          src: "Store_Opening_Red-min.png",
        },
        {
          color: "#634163",
          subcolors:[
            "#FFFFFF",
            "#634163",
            "#E7D04F",
          ],
          src: "Store_Opening_Purple-min.png",
        }
      ],
      fonts:[
        { 
          place: "Logo",
          family: "Filson Pro",
          fontWeight: "500",
          fontStyle: "normal",
        },
        { 
          place: "Subheadline",
          family: "Antarctican Mono",
          fontWeight: "500",
          fontStyle: "normal",
        },
        { 
          place: "Info Groß",
          family: "Antarctican Mono",
          fontWeight: "700",
          fontStyle: "normal",
        },
      ]
    },
    {
      format: "A3",
      name: "Store Opening",
      vert: true,
      structure: "Store_Opening_Aufbau.png",
      img:[
        {
          color: "#E7D04F",
          subcolors:[
            "#000000",
            "#D23B3B",
            "#E7D04F",
          ],
          src: "Store_Opening_Yellow-min.png",
        },
        {
          color: "white",
          subcolors:[
            "#FFFFFF",
            "#000000",
            "#D23B3B",
          ],
          src: "Store_Opening_White-min.png",
        },
        {
          color: "#D23B3B",
          subcolors:[
            "#FFFFFF",
            "#E7D04F",
            "#D23B3B",
          ],
          src: "Store_Opening_Red-min.png",
        },
        {
          color: "#634163",
          subcolors:[
            "#FFFFFF",
            "#634163",
            "#E7D04F",
          ],
          src: "Store_Opening_Purple-min.png",
        }
      ],
      fonts:[
        { 
          place: "Logo",
          family: "Filson Pro",
          fontWeight: "500",
          fontStyle: "normal",
        },
        { 
          place: "Subheadline",
          family: "Antarctican Mono",
          fontWeight: "500",
          fontStyle: "normal",
        },
        { 
          place: "Info Groß",
          family: "Antarctican Mono",
          fontWeight: "700",
          fontStyle: "normal",
        },
      ]
    },
    {
      format: "A3",
      name: "Basic Advertisement",
      vert: false,
      structure: "highquality_aufbau.png",
      img:[
        {
          color: "",
          subcolors:[
            "#FFFFFF",
            "#E7D04F",
          ],
          src: "highquality.png",
        },
      ],
      fonts:[
        { 
          place: "Logo",
          family: "Filson Pro",
          fontWeight: "500",
          fontStyle: "normal",
        },
        { 
          place: "Headline",
          family: "Politica",
          fontWeight: "900",
          fontStyle: "italic",
        },
        { 
          place: "Info",
          family: "Industry",
          fontWeight: "500",
          fontStyle: "normal",
        },
      ]
    },
    {
      format: "A3",
      name: "Skate Contest",
      vert: true,
      structure: "SkateContest_black_structure.png",
      img:[
        {
          color: "",
          subcolors:[
            "#FFFFFF",
            "#D23B3B",
            "#000000",
          ],
          src: "SkateContest_Black.png",
        },
      ],
      fonts:[
        { 
          place: "Logo",
          family: "Filson Pro",
          fontWeight: "500",
          fontStyle: "normal",
        },
        { 
          place: "Headline",
          family: "Politica",
          fontWeight: "900",
          fontStyle: "italic",
        },
        { 
          place: "Info",
          family: "Industry",
          fontWeight: "400",
          fontStyle: "normal",
        },
        { 
          place: "Info",
          family: "Industry",
          fontWeight: "500",
          fontStyle: "normal",
        },
        { 
          place: "Info",
          family: "Industry",
          fontWeight: "700",
          fontStyle: "normal",
        },
      ]
    },
    {
      format: "A3",
      name: "Skate Contest",
      vert: true,
      structure: "SkateContest_white_structure.png",
      img:[
        {
          color: "",
          subcolors:[
            "#FFFFFF",
            "#D23B3B",
            "#000000",
          ],
          src: "SkateContest_white.png",
        },
      ],
      fonts:[
        { 
          place: "Logo",
          family: "Filson Pro",
          fontWeight: "500",
          fontStyle: "normal",
        },
        { 
          place: "Headline",
          family: "Politica",
          fontWeight: "900",
          fontStyle: "italic",
        },
        { 
          place: "Info",
          family: "Industry",
          fontWeight: "400",
          fontStyle: "normal",
        },
        { 
          place: "Info",
          family: "Industry",
          fontWeight: "500",
          fontStyle: "normal",
        },
        { 
          place: "Info",
          family: "Industry",
          fontWeight: "700",
          fontStyle: "normal",
        },
      ]
    },
    {
      format: "A3",
      name: "Skate Contest",
      vert: true,
      structure: "SkateContest_structure.jpg",
      img:[
        {
          color: "",
          subcolors:[
            "#FFFFFF",
            "#E7D04F",
            "#000000",
          ],
          src: "SkateContest-min.jpg",
        },
      ],
      fonts:[
        { 
          place: "Logo",
          family: "Filson Pro",
          fontWeight: "500",
          fontStyle: "normal",
        },
        { 
          place: "Headline",
          family: "Politica",
          fontWeight: "900",
          fontStyle: "italic",
        },
        { 
          place: "Info",
          family: "Industry",
          fontWeight: "400",
          fontStyle: "normal",
        },
        { 
          place: "Info",
          family: "Industry",
          fontWeight: "900",
          fontStyle: "normal",
        },
      ]
    },
  ],
},
getters: {
  navigation: state => {
    return state.navigation;
  },
  branddata: state => {
    return state.branddata;
  },
  fontlist: state => {
    return state.fontlist;
  },
  products: state => {
    return state.products;
  },
  tshirts: state => {
    return state.products.tshirts;
  },
  colors: state => {
    return state.colors;
  },
  primeColors: state => {
    return state.colors[0].primary;
  },
  secondColors: state => {
    return state.colors[0].second;
  },
  cart: state => {
    return state.cart;
  },
  cartItemCount: state => {
    return state.cart.length;
  },
  cartTotalPrice: state => {
    let total = 0;
    
    state.cart.forEach(item => {
      total += item.product.price * item.quantity;
    })

    return total;
  },
  compositions: state => {
    return state.compositions;
  },
},
  mutations: {
    addToCart(state, {product, quantity}){

      let productInCart = state.cart.find(item => {
        return item.product.id === product.id;
      });

      if(productInCart) {
        productInCart.quantity += quantity;
        return;
      }

      state.cart.push({
        product,
        quantity,
      })
    }
  },
  actions: {
    addProductToCart({commit}, {product, quantity}){
      commit('addToCart', { product, quantity});
    }
  },
  modules: {},
});


