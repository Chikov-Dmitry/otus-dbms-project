<template>
  <v-container class="mt-4">
    <v-row class="text-center"><p class="text-h4">Категории</p></v-row>
    <v-row>
      <v-sheet
          class="py-4 px-1"
      >
      <v-chip-group
          mandatory
          active-class="primary--text"
          v-model="selection"
      >
        <v-chip
            v-for="tag in categoryList"
            :key="tag"
        >
          {{ tag }}
        </v-chip>
      </v-chip-group>
      </v-sheet>
    </v-row>
    <v-row>
      <category-product/>
    </v-row>
  </v-container>
</template>

<script>
import CategoryProduct from "@/components/Category/CategoryProduct";
export default {
  name: "Category",
  components: {CategoryProduct},
  data: () => ({
  }),
  computed:{
    categoryList: function (){
      return this.$store.state.category.categoryList
    },
    selection: {
      get: function (){
        return this.$store.state.category.selected
      },
      set: function (newVal){
        this.$store.commit('CHANGE_SELECTED', newVal)
      }
    }
  },
  created() {
    this.$store.dispatch('LOAD_CATEGORY_LIST')
  }
}
</script>

<style scoped>

</style>