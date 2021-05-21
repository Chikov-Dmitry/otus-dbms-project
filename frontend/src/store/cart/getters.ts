import { GetterTree } from "vuex";
import { CartState } from "@/store/cart/types";
import { RootState } from "@/store/types";

export const getters: GetterTree<CartState, RootState> = {
  get_count_products_cart(state): number {
    return state.productsCart.length;
  },
  get_order_count: (state) => (product: any) => {
    let count = 0;
    state.productsCart.forEach((item: any) => {
      if (item._id === product._id) {
        count = item.orderCount;
      }
    });
    return count;
  },
};
