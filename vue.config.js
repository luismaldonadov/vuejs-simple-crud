// By default set to open the visual analyzer to false.
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `scss/main.scss`
        /* eslint-disable-next-line */
        data: `@import "@/assets/scss/main.scss";`
      },
    },
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
    },
  },
};
