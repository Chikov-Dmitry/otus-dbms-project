import { Module } from "vuex";
import { RootState } from "@/store/types";
import { ProductState } from "@/store/product/types";
import { getters } from "@/store/product/getters";
import { mutations } from "@/store/product/mutations";
import { actions } from "@/store/product/actions";

const state: ProductState = {
  product: [],
};

export const product: Module<ProductState, RootState> = {
  state,
  getters,
  mutations,
  actions,
};
