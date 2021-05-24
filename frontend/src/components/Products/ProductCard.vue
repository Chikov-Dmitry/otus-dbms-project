<template>
  <v-card
    class="mb-8"
    max-width="344"
    min-width="250"
    outlined
    @click="goToProductInfo"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          {{ product.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ product.category }}
        </v-list-item-subtitle>
        <div class="text-right">
          <p>В наличии: {{ product.count }}</p>
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
      <v-btn
        color="primary"
        @click.stop="addToCart"
        outlined
        rounded
        text
        :disabled="inCart"
      >
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

  computed: {
    inCart: function () {
      return this.$store.getters.in_cart(this.product._id);
    },
  },
  methods: {
    addToCart: function () {
      this.$store.commit("ADD_PRODUCTS_CART", this.product);
    },
    goToProductInfo: function () {
      this.$router.push({ name: "Product", query: { id: this.product._id } });
    },
  },
};
</script>

<style scoped></style>
