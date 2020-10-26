const path = require("path");

module.exports = {
  configureWebpack: {
    entry: path.resolve(__dirname, './src/Infrastructure/UI/Vue/main.js'),
  },
  chainWebpack: config => {
    config.optimization
      .minimizer('terser')
      .tap(args => {
        const { terserOptions } = args[0];
        terserOptions.keep_classnames = true;
        terserOptions.keep_fnames = true;
        return args;
      });
      
      if (config.plugins.has('html')) {
          config
              .plugin('html')
              .tap(args => {
                  args[0].template = path.resolve(__dirname, './src/Infrastructure/UI/Vue/template/index.html');

                  return args;
              })
      }
  }
};
