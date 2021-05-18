<template>
  <v-container class="mt-4">
    <v-row class="text-center"><p class="text-h4">Корзина</p></v-row>
    <v-row v-if="!countProductsCart" class="text-center"><p class="">Корзина пустая</p></v-row>
    <v-row v-else class="text-center">
      <p class="">Корзина не пустая</p>
    {{productsCart}}
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Cart",
  computed:{
    countProductsCart: function (){
      return this.$store.getters.get_count_products_cart
    },
    productsCart: function (){
      console.log(this.$store.state.productsCart)
      return this.$store.state.cart.productsCart
    }
  }
}
</script>

<style scoped>

</style>