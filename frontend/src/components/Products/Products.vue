<template>
  <p>productssss</p>
</template>

<script>
export default {
  name: "Products",
  created: function (){
    console.log(this.$store.state.products.product)
    this.$store.dispatch('products/LOAD_PRODUCTS')
  }
};
</script>

<style scoped></style>
