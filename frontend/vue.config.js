module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    i18n: {
      locale: "ru",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
  devServer: {
    proxy: "http://localhost:8082",
  },

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Интернет магазин";
      return args;
    });
  },
};
