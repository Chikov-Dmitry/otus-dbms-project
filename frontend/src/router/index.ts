import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import ViewProducts from "../views/ViewProducts.vue";
import ViewLogin from "../views/ViewLogin.vue";
import ViewCart from "../views/ViewCart.vue";
import ViewOrder from "../views/ViewOrder.vue";
import ViewThanks from "../views/viewThanks.vue"
import ViewCategory from "../views/ViewCategory.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: ViewProducts,
  },
  {
    path: "/login",
    name: "Login",
    component: ViewLogin,
  },
  {
    path: "/cart",
    name: "Cart",
    component: ViewCart,
  },
  {
    path: "/order",
    name: "Order",
    component: ViewOrder,
  },
  {
    path: "/thanks",
    name: "Thanks",
    component: ViewThanks,
  },
  {
    path: "/category",
    name: "Category",
    component: ViewCategory,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
