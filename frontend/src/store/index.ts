import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/store/types";
import { product } from "./product";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    message: "messages",
  },
  mutations: {},
  actions: {},
  modules: {
    product,
  },
};

export default new Vuex.Store<RootState>(store);
