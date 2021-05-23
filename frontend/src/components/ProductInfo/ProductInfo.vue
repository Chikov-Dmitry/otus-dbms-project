<template>
  <v-container class="mt-4">
    <v-row class="text-center"><p class="text-h4">{{product.name}}</p></v-row>
    <v-row class="flex-column">
      <p>категория: {{product.category}}</p>
      <p>осталось в наличии: {{product.count}}</p>
      <div>
        <p>характеристики:</p>
        <p v-for="(value, name) in product.characteristic" :key="name">
          {{ name }} : {{ value }}
        </p>
      </div>
      <p>Цена: {{product.price}}</p>
      <div>
      <v-btn color="primary" @click.stop="addToCart" outlined rounded text :disabled="inCart">
        В корзину
      </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "ProductInfo",
  data: ()=>({
    product: {},
    inCart: false
  }),
  methods:{
    addToCart: function () {
      this.$store.commit("ADD_PRODUCTS_CART", this.product);
      this.inCart = true;
    },
  },
  created() {
    console.log(this.$route.query.id)
   this.$store.dispatch('LOAD_PRODUCT', `id=${this.$route.query.id}`).then(res=>{
      console.log(res)
     this.product = res[0]
    })
  }
}
</script>

<style scoped>

</style>