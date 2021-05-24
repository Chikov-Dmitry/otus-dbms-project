import { GetterTree } from "vuex";
import { CartState } from "@/store/cart/types";
import { RootState } from "@/store/types";
import { ProductInt } from "@/store/interfaces";
import { product } from "@/store/product";

export const getters: GetterTree<CartState, RootState> = {
  get_count_products_cart(state): number {
    return state.productsCart.length;
  },
  get_order_count: (state) => (product: ProductInt) => {
    let count = 0;
    state.productsCart.forEach((item: any) => {
      if (item._id === product._id) {
        count = item.orderCount;
      }
    });
    return count;
  },
  in_cart: (state) => (id: string) => {
    let inCart = false;
    state.productsCart.forEach((item: any) => {
      if (item._id === id) {
        inCart = true;
      }
    });
    return inCart;
  },
};
