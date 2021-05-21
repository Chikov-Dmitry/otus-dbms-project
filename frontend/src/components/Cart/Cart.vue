<template>
  <v-container class="mt-4">
    <v-row class="text-center"><p class="text-h4">Корзина</p></v-row>
    <v-row v-if="!countProductsCart" class="text-center"
      ><p class="">Корзина пустая</p></v-row
    >
    <v-row v-else class="text-center">
      <v-list two-line width="100%" shaped>
        <v-list-item-group>
          <CartItem
            v-for="(item, index) in productsCart"
            :key="index"
            :product="item"
          />
        </v-list-item-group>
      </v-list>
      <div class="d-flex pr-8" style="width: 100%">
        <v-spacer /><v-btn @click="order" color="primary">Оформить</v-btn>
      </div>
    </v-row>
    <v-row class="mt-8"> </v-row>
  </v-container>
</template>

<script>
import CartItem from "@/components/Cart/CartItem";
export default {
  name: "Cart",
  components: {
    CartItem,
  },
  computed: {
    countProductsCart: function () {
      return this.$store.getters.get_count_products_cart;
    },
    productsCart: function () {
      return this.$store.state.cart.productsCart;
    },
  },
  methods: {
    order: function () {
      this.$router.push("/order");
    },
  },

};
</script>

<style scoped></style>
