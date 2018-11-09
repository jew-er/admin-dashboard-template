module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();

    svgRule
      .test(/\.svg$/)
      .use("html-loader")
      .loader("html-loader")
      .tap(options => {
        // modify the options...
        return options;
      });
  }
};
