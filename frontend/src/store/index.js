import Vue from "vue";
import Vuex from "vuex";
/*import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie'; */
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(Vuex,VueAxios, axios);

let cart = window.localStorage.getItem('cart');

/*let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdhYTVhMjRiLTEzNDAtNGM5Mi05NTAyLTlhMzVmYjdlYTZlZSIsImlhdCI6MTYyNTg3MTUyMn0.NYl9n0k4yyoreXEQrgUVfxhMIJ9djrqYYFAC5QSvwWU';

axios.post("http://api.rumaholi.local/api/post", [], {headers: { 'Authorization' : 'Bearer '+ token}}).then(response => {
    let comments = response.data;
    console.log(comments)
}) */

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
        href: "#logo",
        open: false,
        subnav: [
          { title: "Aufbau", href: "#aufbau" },
          { title: "Varianten", href: "#varrianten" },
          { title: "Clearspace", href: "#clearspace" },
          { title: "Größe", href: "#groesse" },
          { title: "Social Icons", href: "#socialicons" },
          { title: "Guidance", href: "#guidance" },
        ],
      },
      {
        title: "Typografie",
        href: "#typo",
        open: false,
        subnav: [
          { title: "Fonts", href: "#fonts" },
          { title: "Usecases", href: "#usecases" },
        ],
      },
      { title: "Farben", href: "#colors" },
      { title: "Komposition", href: "#komposition" },
      { title: "Layoutgenerator", href: "#layoutgenerator" },
    ],
    cart: cart ? JSON.parse(cart) : [],
    branddata: [
      {
        textpos: "top",
        img: "bbtl.png",
        fullsize: true,
      },
      {
        headline: "WIr geben die tools und du kreierst!",
        text:
          "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex ",
        align: "center",
        textpos: "right",
        textcolumns: 2,
        img: "skate.gif",
      },
      {
        headline: "Wer wir sind:",
        textpos: "top",
        textcolumns: 2,
        slider: true,
      },
      {
        headline: "Branding guidelines",
        subheadline: "Was ist das und wie benutzt du sie?",
        text:
          "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex ",
        img: "BrandingGuidelines.png",
        align: "center",
        textpos: "left",
        textcolumns: 2,
        dist: 0,
      },
      {
        headline: "LAYOUT GENERATOR",
        subheadline: "Was ist das und wie benutzt du es?",
        text:
          "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex ",
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
        text:
          "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
        img: "logoaufbau1.png",
        align: "center",
        textpos: "left",
        textcolumns: 1,
        href: "aufbau",
      },
      {
        headline: "Varianten",
        text:
          "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
        img: "varrianten.jpg",
        align: "top",
        textpos: "left",
        textcolumns: 1,
        href: "varrianten",
      },
      {
        headline: "Clearspace",
        text:
          "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
        img: "Element 6.svg",
        align: "top",
        textpos: "left",
        textcolumns: 1,
        href: "clearspace",
      },
      {
        headline: "Grösse",
        text:
          "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
        img: "Element 7.svg",
        align: "topr",
        textpos: "left",
        textcolumns: 1,
        href: "groesse",
      },
      {
        headline: "Social icons",
        text:
          "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
        img: "Element 8.svg",
        align: "top",
        textpos: "left",
        textcolumns: 1,
        href: "socialicons",
      },
      {
        headline: "Guidance",
        text:
          "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
        img: "guidelines.jpg",
        align: "top",
        textpos: "left",
        textcolumns: 1,
        dist: 6,
        href: "guidance",
      },
      {
        bigheadline: "TYPOGRAFIE",
        subheadline: "Welche Fonts dürfen wie verwendet werden?",
        text:
          "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqui unda sit faccupt atiaerruptis dundicia siti incia doluptat facepelenem quaest lique conseri blant acera quibea nones eat omnis accus aut pro volum aut optatenis aut quaspitas re, intoribus aut adit labore, sam, sintis et plandam vendes ex",
        align: "center",
        textpos: "left",
        textcolumns: 2,
        dist: 1,
      },
      {
        fontlist: true,
        href: "fonts",
      },
      {
        headline: "Usecases",
        text:
          "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
        align: "top",
        textpos: "left",
        textcolumns: 1,
        dist: 1,
        href: "usecases",
      },
      {
        usecases: true,
      },
      {
        bigheadline: "colors",
        text:
          "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
        align: "top",
        textpos: "left",
        textcolumns: 1,
        dist: 1,
        href: "colors",
      },
      {
        colors: true,
      },
      {
        bigheadline: "composition",
        text:
          "Comnimpe rchictate velique peribusandem venim di cusda quam, ius anditem ex est, aborest fuga. To con nemqu",
        img: "plakat7.png",
        textpos: "top",
        textcolumns: 1,
        href: "komposition",
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
    slider: [
      {
        headline: "WIR SIND SKATER",
        text:
          "Wir repräsentieren mit unserer Mode Skater und Streetfashion Kultur. Diese kulturellen Einflüsse ziehen sich durch unsere Designsprache.",
        img: "dropin.jpg",
      },
      {
        headline: "WIR SIND NACHHALTIG",
        text:
          "Avément Produkte werden ausschließlich zu fairen Bedingungen in der EU produziert. Unsere Angestellten und die Qualität der Produkte liegt dabei besonders im Fokus. Diese Nachhaltigkeit spiegelt sich in unseren Designs wider.",
        img: "factory.jpg",
      },
      {
        headline: "WIR SIND INTERNATIONAL",
        text:
          "Avément Stores sind in vielen Ländern weltweit vertreten. Unsere Produkte sind für Menschen jeder Herkunft. Weltoffenheit und Toleranz sind wichtige Bestandteile unserer Designs.",
        img: "earth.jpg",
      },
    ],
    colors: [
      {
        primary: [
          {
            rgb: "rgb(255, 255, 255)",
            cmyk: "0 0 0 0",
            hex: "#ffffff",
            recomendet: ["#000000", "#d23b3b"],
          },
          {
            rgb: "rgb(0, 0, 0)",
            cmyk: "0 0 0 100",
            hex: "#000000",
            recomendet: ["#ffffff"],
          },
        ],
        second: [
          {
            rgb: "rgb(231, 208, 79)",
            hex: "#e7d04f",
            cmyk: "0 10 66 9",
            recomendet: ["#634163", "#d23b3b"],
          },
          {
            rgb: "rgb(210, 59, 59)",
            hex: "#d23b3b",
            cmyk: "0 72 72 18",
            recomendet: ["#e7d04f", "#ffffff"],
          },
          {
            rgb: "rgb(99, 65, 99)",
            hex: "#634163",
            cmyk: "0 34 0 61",
            recomendet: ["#e7d04f"],
          },
          {
            rgb: "rgb(68, 107, 156)",
            hex: "#446B9C",
            cmyk: "0 34 0 61",
            recomendet: ["#E7D04F"],
          },
          {
            rgb: "rgb(232, 114, 194)",
            hex: "#E872C2",
            cmyk: "0 34 0 61",
            recomendet: ["#E7D04F"],
          },
          {
            rgb: "rgb(102, 232, 163)",
            hex: "#66E8A3",
            cmyk: "0 34 0 61",
            recomendet: ["#E7D04F"],
          },
        ],
      },
    ],
    compositions: [
      {
        format: "A4",
        name: "Store Opening",
        vert: true,
        structure: "Store_Opening_Aufbau.png",
        img: [
          {
            color: "white",
            subcolors: ["#FFFFFF", "#000000", "#D23B3B"],
            src: "Store_Opening_White-min.png",
          },
          {
            color: "#E7D04F",
            subcolors: ["#000000", "#D23B3B", "#E7D04F"],
            src: "Store_Opening_Yellow-min.png",
          },
          {
            color: "#D23B3B",
            subcolors: ["#FFFFFF", "#E7D04F", "#D23B3B"],
            src: "Store_Opening_Red-min.png",
          },
          {
            color: "#634163",
            subcolors: ["#FFFFFF", "#634163", "#E7D04F"],
            src: "Store_Opening_Purple-min.png",
          },
        ],
        fonts: [
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
        ],
      },
      {
        format: "A3",
        name: "Store Opening",
        vert: true,
        structure: "Store_Opening_Aufbau.png",
        img: [
          {
            color: "#E7D04F",
            subcolors: ["#000000", "#D23B3B", "#E7D04F"],
            src: "Store_Opening_Yellow-min.png",
          },
          {
            color: "white",
            subcolors: ["#FFFFFF", "#000000", "#D23B3B"],
            src: "Store_Opening_White-min.png",
          },
          {
            color: "#D23B3B",
            subcolors: ["#FFFFFF", "#E7D04F", "#D23B3B"],
            src: "Store_Opening_Red-min.png",
          },
          {
            color: "#634163",
            subcolors: ["#FFFFFF", "#634163", "#E7D04F"],
            src: "Store_Opening_Purple-min.png",
          },
        ],
        fonts: [
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
        ],
      },
      {
        format: "A3",
        name: "Basic Advertisement",
        vert: false,
        structure: "highquality_aufbau.png",
        img: [
          {
            color: "",
            subcolors: ["#FFFFFF", "#E7D04F"],
            src: "highquality.png",
          },
        ],
        fonts: [
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
        ],
      },
      {
        format: "A3",
        name: "Skate Contest",
        vert: true,
        structure: "SkateContest_black_structure.png",
        img: [
          {
            color: "",
            subcolors: ["#FFFFFF", "#D23B3B", "#000000"],
            src: "SkateContest_Black.png",
          },
        ],
        fonts: [
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
        ],
      },
      {
        format: "A3",
        name: "Skate Contest",
        vert: true,
        structure: "SkateContest_white_structure.png",
        img: [
          {
            color: "",
            subcolors: ["#FFFFFF", "#D23B3B", "#000000"],
            src: "SkateContest_white.png",
          },
        ],
        fonts: [
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
        ],
      },
      {
        format: "A3",
        name: "Skate Contest",
        vert: true,
        structure: "SkateContest_structure.jpg",
        img: [
          {
            color: "",
            subcolors: ["#FFFFFF", "#E7D04F", "#000000"],
            src: "SkateContest-min.jpg",
          },
        ],
        fonts: [
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
        ],
      },
    ],
    users:[
      {
        "id": "687fa47a-7039-46f2-9376-726f580e7398",
        "firstName": "Florian",
        "lastName": "Gesell",
        "email": "gesell@example.com",
        "isAdmin": true,
        "password": "$2b$10$dE15MMoqfx4QfFCmiRDOJ.J47bxeR3Qr0.2NFQiO6Qv2UwhvYHNWC",
        "createdAt": "2021-07-09T12:32:59.355Z",
        "updatedAt": "2021-07-09T12:32:59.355Z"
    },
    {
        "id": "057e1c1f-5c0a-499f-bf12-32b7194f02f4",
        "firstName": "Karl",
        "lastName": "Diedrichsen",
        "email": "karl@example.com",
        "isAdmin": false,
        "password": "$2b$10$dE15MMoqfx4QfFCmiRDOJ.J47bxeR3Qr0.2NFQiO6Qv2UwhvYHNWC",
        "createdAt": "2021-07-09T12:32:59.355Z",
        "updatedAt": "2021-07-09T12:32:59.355Z"
    },
    {
        "id": "463d2ae1-0f31-47d3-aa74-dd4c26fde218",
        "firstName": "Robin",
        "lastName": "Geramb",
        "email": "robin@example.com",
        "isAdmin": false,
        "password": "$2b$10$dE15MMoqfx4QfFCmiRDOJ.J47bxeR3Qr0.2NFQiO6Qv2UwhvYHNWC",
        "createdAt": "2021-07-09T12:32:59.355Z",
        "updatedAt": "2021-07-09T12:32:59.355Z"
    }
    ],
    currentUser: {}
  },
  getters: {
    navigation: (state) => {
      return state.navigation;
    },
    branddata: (state) => {
      return state.branddata;
    },
    fontlist: (state) => {
      return state.fontlist;
    },
    colors: (state) => {
      return state.colors;
    },
    primeColors: (state) => {
      return state.colors[0].primary;
    },
    slider: (state) => {
      return state.slider;
    },
    secondColors: (state) => {
      return state.colors[0].second;
    },
    cart: (state) => {
      return state.cart;
    },
    cartItemCount: (state) => {
      let number = 0;
      for(let i = 0; i < state.cart.length; i++){
        number += state.cart[i].quantity;
      }
      
      return number;
    },
    cartTotalPrice: (state) => {
      let total = 0;

      state.cart.forEach((item) => {
        total += item.product.price * item.quantity;
      });

      return total;
    },
    compositions: (state) => {
      return state.compositions;
    },
  },
  mutations: {

    SET_USERS(state, users){
      state.users = users;
    },
    LOGOUT_USER(state){
      state.currentUser = {};
      window.localStorage.currentUser = JSON.stringify({});
    },
    SET_CURRENT_USER(state, user){
      state.currentUser = user;
      window.localStorage.currentUser = JSON.stringify(user);
    },
    REGISTERED(message){
      console.log(message);
    },
    addToCart(state, { product, quantity, selectedSize }) {
      let productInCart = state.cart.find((item) => {
        return item.product.unique_token === product.unique_token && selectedSize === item.selectedSize;
      });
      if (productInCart) {
        productInCart.quantity += quantity;
        this.commit('saveData');
        return;
      }
      state.cart.push({
        product,
        quantity,
        selectedSize,
      });
      this.commit('saveData');
    },
    saveData(state){
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeItem(state, { product, selectedSize}) {
      let productInCart = state.cart.find((item) => {
        return item.product.unique_token === product.unique_token && selectedSize === item.selectedSize;
      });
      if (productInCart) {
        productInCart.quantity --;
        this.commit('saveData');
        return;
      }
   },
    deleteItem(state, item) {
      let index = state.cart.indexOf(item);
      state.cart.splice(index,1);

      this.commit('saveData');
   }
  },
  actions: {
    addProductToCart({ commit }, { product, quantity, selectedSize }) {
      commit("addToCart", { product, quantity, selectedSize });
    },
    async loadUsers({commit}) {
      let apiUrl = 'http://localhost:4000/api/auth/list';
      let response = await axios.get(apiUrl);
      let users = response.data;
      commit('SET_USERS'), users.map(u => u.attributes)
      
    },
    loadCurrentUser({commit}) {
      let user = JSON.parse(window.localStorage.currentUser);
      commit('SET_CURRENT_USER', user)
    },
    logoutUser({commit}){
      commit('LOGOUT_USER')
    },
    async loginUser({commit}, loginInfo){
      console.log(loginInfo)
      try{
        let response = await axios({
          method: 'POST',
          url: 'http://localhost:4000/api/auth/login', 
          data: loginInfo,
          headers: {
            'Content-Type': 'application/json'
          }});
        let user = response.data;
        console.log(user);
        commit('SET_CURRENT_USER', user);
        return user;
      } catch{
        return {Error: 'Username or Password is incorrect'}
      }
    },
    async registerUser({commit}, loginInfo){
      console.log(loginInfo);
      try{
        let response = await axios({
          method: 'POST',
          url: 'http://localhost:4000/api/auth/register', 
          data: loginInfo,
          headers: {
            'Content-Type': 'application/json'
          }});
          console.log("2");
          commit('REGISTER', response);
        return response;
      } catch{
        return {Error: 'E-mail ist bereits vergeben'}
      }
    }
  },
  modules: {},
});
