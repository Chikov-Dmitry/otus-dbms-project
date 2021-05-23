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
  </v-container>
</template>

<script>
import ProductCard from "@/components/Products/ProductCard";

export default {
  name: "Products",
  components: { ProductCard },
  computed: {
    products: function () {
      return this.$store.state.product.productList;
    },
  },
  created: function () {
    this.$store.dispatch("LOAD_PRODUCTS_LIST");
  },
};
</script>

<style scoped></style>
