import { ActionTree } from "vuex";
import { CategoryState } from "@/store/category/types";
import { RootState } from "@/store/types";
import axios from "axios";

export const actions: ActionTree<CategoryState, RootState> = {
  LOAD_CATEGORY_LIST({ commit }) {
    return axios.get("/categorylist").then((result) => {
      commit("CHANGE_CATEGORY_LIST", result.data);
      return result.data;
    });
  },
  LOAD_CATEGORY_PRODUCT({ commit, state }, query) {
    return axios
      .get(
        `/categoryproduct?category=${
          state.categoryList[state.selected]
        }&${query}`
      )
      .then((result) => {
        commit("CHANGE_CATEGORY_PRODUCT", result.data);
        return result.data;
      });
  },
};
