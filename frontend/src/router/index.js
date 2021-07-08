import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../views/Shop.vue"),
  },
  {
    path: "/shop/:filter",
    name: "Shop",
    component: () => import("../views/Shop.vue"),
  },
  {
    path: "/brand",
    name: "Brand",
    component: () => import("../views/Brand.vue"),
  },
  {
    path: "/shop/products/:product_id",
    name: "Products",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
