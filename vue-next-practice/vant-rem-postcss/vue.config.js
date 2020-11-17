const autoprefixer = require("autoprefixer")
const pxtorem = require("postcss-pxtorem")
// vant ts 按需加载
const merge = require("webpack-merge")
const tsImportPluginFactory = require("ts-import-plugin")

module.exports = {
  parallel: false, // 防止打包时 vant 样式丢失
  lintOnSave: false,
  configureWebpack: {
    devtool: "source-map",
  },
  outputDir: "dist",
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 16, //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
            propList: ["*"],
          }),
        ],
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap((options) => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true,
              }),
            ],
          }),
          compilerOptions: {
            module: "es2015",
          },
        })
        return options
      })
  },
}
