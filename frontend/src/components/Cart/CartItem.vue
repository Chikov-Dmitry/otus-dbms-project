<template>
  <v-list-item>
    <v-list-item-content class="text-left">
      <v-list-item-title v-text="product.name"></v-list-item-title>

      <v-list-item-subtitle
        class="text--primary"
        v-text="product.category"
      ></v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action class="flex-row">
      <v-btn class="mx-2" fab dark x-small color="secondary" @click="dec">
        <v-icon dark> mdi-minus </v-icon>
      </v-btn>
      <span>{{ orderCount }}</span>
      <v-btn class="mx-2" fab dark x-small color="secondary" @click="inc">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
      <span
        >{{ product.price * orderCount }}
        <v-icon small color="black" class="font-weight-bold"
          >mdi-currency-rub</v-icon
        ></span
      >
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartItem",
  props: {
    product: Object,
  },
  data: () => ({}),
  computed: {
    orderCount: function () {
      return this.$store.getters.get_order_count(this.product);
    },
  },
  methods: {
    inc: function () {
      if (this.orderCount < this.product.count) {
        this.$store.commit("CHANGE_COUNT_CART", {
          product: this.product,
          action: "inc",
        });
      }
    },
    dec: function () {
      if (this.orderCount !== 1) {
        this.$store.commit("CHANGE_COUNT_CART", {
          product: this.product,
          action: "dec",
        });
      }
    },
  },
};
</script>

<style scoped></style>
