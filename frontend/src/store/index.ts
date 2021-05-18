import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/store/types";
import { product } from "./product";
import { cart } from "./cart";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    message: "messages",
  },
  mutations: {},
  actions: {},
  modules: {
    product,
    cart
  },
};

export default new Vuex.Store<RootState>(store);
