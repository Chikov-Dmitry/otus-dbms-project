import { MutationTree } from "vuex";
import {CategoryState} from "@/store/category/types";

export const mutations: MutationTree<CategoryState> = {
    CHANGE_CATEGORY_LIST(state, payload) {
        state.categoryList = payload;
    },
    CHANGE_SELECTED(state, payload){
        state.selected = payload
    },
    CHANGE_CATEGORY_PRODUCT(state, payload){
        state.categoryProduct = payload
    }
}
