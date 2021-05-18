import {GetterTree} from "vuex";
import {CartState} from "@/store/cart/types";
import {RootState} from "@/store/types";

export const getters: GetterTree<CartState, RootState> = {
    get_count_products_cart(state): number {
        return state.productsCart.length
    }
}