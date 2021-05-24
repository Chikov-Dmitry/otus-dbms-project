<template>
  <v-container class="mt-4">
    <v-row><p class="text-h4">Товары</p></v-row>
    <v-row class="justify-space-between">
      <product-card
        v-for="(item, index) in products"
        :key="index"
        :product="item"
      ></product-card>
    </v-row>
    <v-row class="justify-center">
      <v-pagination v-model="page" :length="lengthPaginations"></v-pagination>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from "@/components/Products/ProductCard";
import axios from "axios";

export default {
  name: "Products",
  components: { ProductCard },
  data: () => ({
    page: 1,
    countProducts: 0,
    productsOnPage: 10,
  }),
  watch: {
    page: function (newVal) {
      let skip = (newVal - 1) * this.productsOnPage;
      this.$store.dispatch(
        "LOAD_PRODUCTS_LIST",
        `skip=${skip}&limit=${this.productsOnPage}`
      );
    },
  },
  computed: {
    products: function () {
      return this.$store.state.product.productList;
    },
    lengthPaginations: function () {
      return this.countProducts / this.productsOnPage;
    },
  },
  created: function () {
    axios.get("/countproducts").then((res) => {
      this.countProducts = res.data.count;
    });
    this.$store.dispatch("LOAD_PRODUCTS_LIST", `limit=${this.productsOnPage}`);
  },
};
</script>

<style scoped></style>
