<template>
  <v-row class="flex-column">
    <v-row class="justify-space-between">
      <product-card
        v-for="(item, index) in categoryProduct"
        :key="index"
        :product="item"
      ></product-card>
    </v-row>
    <v-row class="justify-center">
      <v-pagination v-model="page" :length="lengthPaginations"></v-pagination>
    </v-row>
  </v-row>
</template>

<script>
import productCard from "@/components/Products/ProductCard";
import axios from "axios";

export default {
  name: "CategoryProduct",
  components: {
    productCard,
  },
  data: () => ({
    page: 1,
    productsOnPage: 10,
    countProducts: 0,
  }),
  watch: {
    selectedCategory: function (newVal, oldVal) {
      this.page = 1;
      axios
        .get(`/countcategoryproducts?category=${this.selectedCategory}`)
        .then((res) => {
          this.countProducts = res.data.count;
        });

      this.$store.dispatch(
        "LOAD_CATEGORY_PRODUCT",
        `limit=${this.productsOnPage}`
      );
    },
    page: function (newVal) {
      let skip = (newVal - 1) * this.productsOnPage;
      this.$store.dispatch(
        "LOAD_CATEGORY_PRODUCT",
        `skip=${skip}&limit=${this.productsOnPage}`
      );
    },
  },
  computed: {
    selectedCategory: function () {
      return this.$store.state.category.categoryList[
        this.$store.state.category.selected
      ];
    },
    categoryProduct: function () {
      return this.$store.state.category.categoryProduct;
    },
    lengthPaginations: function () {
      return Math.ceil(this.countProducts / this.productsOnPage);
    },
  },
};
</script>

<style scoped></style>
