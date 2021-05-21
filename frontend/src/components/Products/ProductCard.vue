<template>
  <v-card class="mb-8" max-width="344" min-width="250" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          {{ product.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ product.category }}
        </v-list-item-subtitle>
        <div class="text-right">
          <p class="font-weight-bold mb-0 mt-2">
            {{ product.price
            }}<v-icon small color="black" class="font-weight-bold"
              >mdi-currency-rub</v-icon
            >
          </p>
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-spacer />
      <v-btn @click="addToCart" outlined rounded text :disabled="inCart">
        В корзину
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  data: () => ({
    inCart: false,
  }),
  methods: {
    addToCart: function () {
      this.$store.commit("ADD_PRODUCTS_CART", this.product);
      this.inCart = true;
    },
  },
};
</script>

<style scoped></style>
