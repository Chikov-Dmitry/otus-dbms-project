<template>
  <v-card class="mb-8" max-width="344" min-width="250" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          {{product.name}}
        </v-list-item-title>
        <v-list-item-subtitle
          >{{ product.category }}</v-list-item-subtitle
        >
          <v-list-item-subtitle
          >{{ product.count }}</v-list-item-subtitle
          >
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
        <v-spacer/>
      <v-btn @click="addToCart" outlined rounded text > В корзину </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
    props:{
      product: Object
    },
  methods:{
    addToCart: function (){
      this.$store.commit("ADD_PRODUCTS_CART", this.product)
    }
  }
};
</script>

<style scoped></style>
