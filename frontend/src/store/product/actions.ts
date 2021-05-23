import { ActionTree } from "vuex";
import { ProductState } from "@/store/product/types";
import { RootState } from "@/store/types";
import axios from "axios";

export const actions: ActionTree<ProductState, RootState> = {
  LOAD_PRODUCTS_LIST({ commit }) {
    return axios.get("/product").then((result) => {
      commit("CHANGE_PRODUCT_LIST", result.data);
      return result.data;
    });
  },
  LOAD_PRODUCT({ commit }, query) {
    return axios.get(`/product?${query}`).then((result) => {
      return result.data;
    });
  },
};
