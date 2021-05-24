import { CategoryState } from "@/store/category/types";
import { Module } from "vuex";
import { RootState } from "@/store/types";
import { mutations } from "@/store/category/mutations";
import { actions } from "@/store/category/actions";

const state: CategoryState = {
  categoryList: [],
  selected: 0,
  categoryProduct: [],
};

export const category: Module<CategoryState, RootState> = {
  state,
  mutations,
  actions,
};
