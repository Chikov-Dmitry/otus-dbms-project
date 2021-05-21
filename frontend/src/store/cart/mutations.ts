import { MutationTree } from "vuex";
import { CartState } from "@/store/cart/types";
import Vue from "vue";

export const mutations: MutationTree<CartState> = {
  ADD_PRODUCTS_CART(state, payload) {
    payload.orderCount = 1;
    state.productsCart.push(payload);
  },
  CHANGE_COUNT_CART(state, payload) {
    const productID = payload.product._id;
    state.productsCart.forEach((item: any, index) => {
      if (item._id === productID) {
        if (payload.action === "inc") item.orderCount += 1;
        else if (payload.action === "dec") item.orderCount -= 1;
        Vue.set(state.productsCart, index, item);
      }
    });
  },
  CLEAR_PRODUCT_CART(state){
    state.productsCart = []
  }
};
