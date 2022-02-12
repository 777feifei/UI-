/*
 * @Description:
 * @Autor: Zhongyu
 * @Date: 2021-08-30 20:18:57
 * @LastEditors: Zhongyu
 * @LastEditTime: 2021-08-30 20:21:36
 */
// 配置选项
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production'
  ? './'
  : '/',
  outputDir: "dist", // 放置静态资源的目录
  assetsDir: "static", // html 的输出路径
  lintOnSave: false,
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 9000,
    https: false,
    proxy: {
      "/api": {
        target: "http://app.rmsdmedia.com",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    } // string | Object
  }, // CSS 相关选项
};
