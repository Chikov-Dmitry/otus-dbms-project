import {MutationTree} from "vuex";
import {CartState} from "@/store/cart/types";

export const mutations: MutationTree<CartState> = {
    ADD_PRODUCTS_CART(state, payload){
        state.productsCart.push(payload)
    }
}