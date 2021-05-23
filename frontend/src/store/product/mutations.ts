import { MutationTree } from "vuex";
import { ProductState } from "@/store/product/types";

export const mutations: MutationTree<ProductState> = {
  CHANGE_PRODUCT_LIST(state, payload) {
    state.productList = payload;
  },
};
