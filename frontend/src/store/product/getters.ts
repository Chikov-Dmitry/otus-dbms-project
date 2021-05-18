import { GetterTree } from "vuex";
import { ProductState } from "@/store/product/types";
import { RootState } from "@/store/types";

export const getters: GetterTree<ProductState, RootState> = {
  getProductInfo(state): string {
    return `mess`;
  },
};
