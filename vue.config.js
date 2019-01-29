const path = require('path');
// By default set to open the visual analyzer to false.
module.exports = {
  transpileDependencies: [
    /* eslint-disable-next-line */
    /\bvue-awesome\b/
  ],
  configureWebpack: {
    resolve: {
      alias: {
        icons: path.resolve(__dirname, 'node_modules/vue-material-design-icons'),
      },
      extensions: [
        '.vue',
      ],
    },
  },
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
