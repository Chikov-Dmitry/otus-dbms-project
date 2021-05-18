<template>
  <v-app>
    <v-navigation-drawer
      app
      :expand-on-hover="$vuetify.breakpoint.mdAndUp"
      left
      v-model="showNavigation"
      :value="$vuetify.breakpoint.smAndDown ? drawer : true"
      mobile-breakpoint="960"
      bottom
      color="secondary"
      dark
    >
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item link to="/login">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Войти</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/products">
          <v-list-item-icon>
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Товары</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title @click="goHome" style="cursor: pointer"
        >Интернет магазин</v-toolbar-title
      >
      <v-spacer/>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">

            <v-btn
                class="ma-2"
                text
                icon
                v-bind="attrs"
                v-on="on"
                to="/cart"
            >
              <v-badge
                  :content="countProductsCart"
                  :value="countProductsCart"
                  color="warning"
                  overlap
              >
              <v-icon  large>mdi-cart</v-icon>
              </v-badge>
            </v-btn>


        </template>
        <span>Корзина</span>
      </v-tooltip>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App",
  components: {},
  data: () => ({
    group: null,
    drawer: false,
    mini: true,
    countCart: 2
  }),
  computed: {
    showNavigation: {
      get: function () {
        if (this.$vuetify.breakpoint.mdAndUp) {
          return true;
        }
        return this.drawer;
      },
      set: function (newVal: boolean) {
        return (this.drawer = newVal);
      },
    },
    countProductsCart: function (){
      return this.$store.getters.get_count_products_cart
    }
  },
  methods: {
    goHome: function () {
      this.$router.push("/");
    },
  },
});
</script>
