import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import ru from "vuetify/src/locale/ru";
import { VFlex, VLayout, VContainer, VImg, VRow, VCol } from "vuetify/lib";


Vue.use(Vuetify, {
  components: { VFlex, VLayout, VContainer, VImg, VRow, VCol },
});

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#F44336",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
      dark: {
        primary: "#9C27B0",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
  lang: {
    locales: { ru },
    current: "ru",
  },
});
