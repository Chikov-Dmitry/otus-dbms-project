import { ActionTree } from "vuex";
import { ProductState } from "@/store/product/types";
import { RootState } from "@/store/types";
import axios from "axios";

export const actions: ActionTree<ProductState, RootState> = {
  LOAD_PRODUCTS({ commit }) {
    return axios.get("/product").then((result) => {
      commit("CHANGE_PRODUCT", result.data);
      console.log(result.data);
      return result.data;
    });
  },
};
