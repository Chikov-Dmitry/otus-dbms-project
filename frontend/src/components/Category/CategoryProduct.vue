<template>
  <v-row class="justify-space-around">
  <product-card
      v-for="(item, index) in categoryProduct"
      :key="index"
      :product="item"
  ></product-card>
  </v-row>
</template>

<script>
import productCard from "@/components/Products/ProductCard"
export default {
  name: "CategoryProduct",
  components:{
    productCard
  },
  watch:{
    selectedCategory: function (newVal, oldVal){
      console.log(newVal)
      console.log(oldVal)
      this.$store.dispatch("LOAD_CATEGORY_PRODUCT")
    }
  },
  computed:{
    selectedCategory: function (){
      return this.$store.state.category.categoryList[this.$store.state.category.selected]
    },
    categoryProduct: function (){
      return this.$store.state.category.categoryProduct
    }
  }
}
</script>

<style scoped>

</style>