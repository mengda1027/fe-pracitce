const path = require("path")
const customloader = path.resolve(__dirname, "./loader/replace-html-loader.js")
module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    const vueRule = config.module.rule("vue")
    // 追加 自定义 loader
    vueRule
      .use(customloader)
      .loader(customloader)
      .options({
        key: "include",
      })
  },
}
